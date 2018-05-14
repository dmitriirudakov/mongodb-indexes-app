'use strict';

import * as express from 'express';
import { default as Controller } from '../controllers/rubrics';
import { default as crudWrapper } from './crud-wrapper';

const router = express.Router();
crudWrapper.wrap(router, new Controller());

module.exports = router;