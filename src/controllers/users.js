'use strict';

import { default as Model } from '../models/user';
import CrudController from './crud';

class Controller extends CrudController {
	getModel() {
		return Model;
	}
}

module.exports = Controller;
