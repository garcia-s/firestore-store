module.exports = {
	read(doc) {
		return doc;
	},

	save(doc) {
		return JSON.parse(JSON.stringify(doc));
	}
};
