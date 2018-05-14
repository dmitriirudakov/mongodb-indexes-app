'use strict';

import { default as Schema } from '../schemas/tag';
import CrudController from './crud';

class Controller extends CrudController {
	getSchema() {
		return Schema;
	}
}

module.exports = Controller;
