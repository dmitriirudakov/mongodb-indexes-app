import db from './config/database';

function cleanup(event) {
	console.log(`(!) A system event occurred: ${event}`)
	db.disconnect().finally(() => {
		/*eslint no-process-exit: "off"*/
		process.exit();
	});
}

process.on('SIGINT', () => cleanup('SIGINT'));
process.on('SIGTERM', () => cleanup('SIGTERM'));