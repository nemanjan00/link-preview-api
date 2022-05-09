const router = require("express").Router();

const errors = require("../errors");
const config = require("../config");

router.use((req, res, next) => {
	if(config.get("TOKEN") === undefined) {
		return next();
	}

	if(req.headers["authorization"] === undefined) {
		return next(errors.tokenIsMissing());
	}

	if(req.headers["authorization"].replace("Bearer ", "") !== config.get("TOKEN")) {
		return next(errors.tokenIncorrect());
	}

	next();
});

router.use((_req, _res, next) => {
	return next(errors.notFound());
});

router.use((err, _req, res, next) => {
	if (res.headersSent) {
		return next(err)
	}

	console.log(err);

	if(!err.status) {
		err = errors.unknownError();
	}

	return res.status(err.status).json({
		status: "error",
		error: err
	});
});

module.exports = router;
