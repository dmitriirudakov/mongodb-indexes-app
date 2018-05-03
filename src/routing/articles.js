'use strict';

import * as express from 'express';
import { default as controller } from '../controllers/articles';
import { default as crudWrapper } from './crud-wrapper';

const router = express.Router();
crudWrapper.wrap(router, controller);

module.exports = router;