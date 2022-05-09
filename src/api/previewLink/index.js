const getLinkPreview = require("link-preview-js").getLinkPreview;

const URL = require("url").URL;

const errors = require("../../errors");

const router = require("express").Router();

router.post("/", (req, res, next) => {
	let url;

	try {
		const link = req.body.link;
		url = new URL(link);
	} catch (error) {
		return next(errors.invalidLink());
	}

	getLinkPreview(url + "").then(preview => {
		res.json({
			status: "ok",
			preview
		});
	}).catch(err => {
		console.error(err);

		next(errors.errorFetchingLink());
	});
});

module.exports = router;
