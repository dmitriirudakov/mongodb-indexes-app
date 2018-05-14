'use strict';

import { default as Schema } from '../schemas/rubric';
import CrudController from './crud';

class Controller extends CrudController {
	getSchema() {
		return Schema;
	}
}

module.exports = Controller;
