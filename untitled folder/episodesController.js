import _ from 'lodash';
import Joi from 'joi';
import randtoken from 'rand-token';
import mongoose from 'mongoose';
import HttpStatus from 'http-status';
import BaseController from '../../../baseController';
import { RequestHandler, Logger, Errors, S3 } from '../../../../utils';
import { Episode } from '../../../../models';

const logger = new Logger();
const requestHandler = new RequestHandler(logger);

class Episodes extends BaseController {
  constructor() {
    super();
  }

  index = async(req, res) => {
    const { page = this.page, perPage = this.perPage, movie } = req.query || {};
    const entries = _.parseInt(perPage);
    const conditions = { movie: new mongoose.Types.ObjectId(movie) };
    try {
      const episodes = await Episode.aggregate([
        { $match: conditions },
        { $sort: { episode: 1 } },
        { $facet:
          {
            data: [
              { $skip: (page * entries) - entries },
              { $limit: entries },
              { $project:
                {
                  movie: 1, episode: 1, video: 1, vi: 1, ja: 1, created_at: 1,
                },
              },
            ],
            totalEntries: [
              { $project: { _id: 1 } },
              {
                $group: { _id: null, count: { $sum: 1 } },
              },
            ],
          },
        },
      ]);
      const { totalEntries } = episodes[0];
      requestHandler.sendSuccess(res, 'Get Successfully')({
        episodes: episodes[0].data,
        totalEntries: totalEntries.length > 0 ? totalEntries[0].count : 0,
      });
    } catch (e) {
      return requestHandler.sendError(req, res, e);
    }
  }

  create = async(req, res) => {
    const schema = Joi.object().keys({
      movie: Joi.string().required(),
      episode: Joi.number().required(),
      video: Joi.string().required(),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      requestHandler.sendError(req, res, Errors.errors(HttpStatus.BAD_REQUEST, error ? error.details[0].message : '', 'BE_01'));
      return;
    }
    try {
      const newE = new Episode(value);
      let [file_name, content_type] = Array(2).fill(null);
      if (!_.isEmpty(req.files)) {
        _.map(req.files, (file) => {
          const fileName = file.fieldname;
          const fileType = file.originalname.split('.').pop() || '';
          file_name = fileType ? `${randtoken.generate(20)}.${fileType}` : randtoken.generate(20) + file.originalname;
          content_type = file.mimetype;
          newE[fileName] = { file_name, content_type };
          S3.upload({ key: `movies/${value.movie}/${file_name}`, data: file.buffer, mimetype: content_type });
        });
      }
      const episode = await newE.save();
      requestHandler.sendSuccess(res, 'Create Successfully')({
        episode,
      });
    } catch (e) {
      return requestHandler.sendError(req, res, e);
    }
  }

  update = async(req, res) => {
    const { currentEpisode } = req;
    const ep = currentEpisode;
    const schema = Joi.object().keys({
      episode: Joi.number(),
      video: Joi.string(),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      requestHandler.sendError(req, res, Errors.errors(HttpStatus.BAD_REQUEST, error ? error.details[0].message : '', 'BE_01'));
      return;
    }
    try {
      let [file_name, content_type] = Array(2).fill(null);
      if (!_.isEmpty(req.files)) {
        _.map(req.files, (file) => {
          const fileName = file.fieldname;
          const fileType = file.originalname.split('.').pop() || '';
          file_name = fileType ? `${randtoken.generate(20)}.${fileType}` : randtoken.generate(20) + file.originalname;
          content_type = file.mimetype;
          const oldFile = ep[fileName] && ep[fileName].file_name;
          S3.delete({ key: `movies/${ep.movie}/${oldFile}` });
          ep[fileName] = { file_name, content_type };
          S3.upload({ key: `movies/${ep.movie}/${file_name}`, data: file.buffer, mimetype: content_type });
        });
      }
      ep.set(value);
      await ep.save();
      requestHandler.sendSuccess(res, 'Update Successfully')({ episode: ep });
    } catch (e) {
      return requestHandler.sendError(req, res, e);
    }
  }

  edit = async(req, res) => {
    const { currentEpisode } = req;
    requestHandler.sendSuccess(res, 'Get Edit Successfully')({
      episode: currentEpisode,
    });
  }

  deleteIds = async(req, res) => {
    const schema = Joi.object().keys({
      ids: Joi.array().items(Joi.string().required()),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      requestHandler.sendError(req, res, Errors.errors(HttpStatus.BAD_REQUEST, error ? error.details[0].message : '', 'BE_01'));
      return;
    }
    try {
      await Episode.deleteMany({ _id: { $in: value.ids } });
      requestHandler.sendSuccess(res, 'Delete Successfully')({});
    } catch (e) {
      return requestHandler.sendError(req, res, e);
    }
  }

  load = async(req, res, next, id) => {
    try {
      const episode = await Episode.findOne({ _id: id });
      if (!episode) {
        return requestHandler.sendError(
          req,
          res,
          Errors.errors(HttpStatus.NOT_FOUND, 'Not found', 'BE_11'),
        );
      }
      req.currentEpisode = episode;
      return next();
    } catch (e) {
      requestHandler.sendError(
        req,
        res,
        Errors.errors(HttpStatus.NOT_FOUND, 'Not found', 'BE_11'),
      );
    }
  }
}
export default new Episodes();
