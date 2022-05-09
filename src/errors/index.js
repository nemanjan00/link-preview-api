module.exports = {
	tokenIsMissing: () => {
		return {
			status: 400,
			type: "TokenNotFound",
			message: "Authorization token is missing"
		};
	},

	tokenIncorrect: () => {
		return {
			status: 401,
			type: "TokenIsInvalid",
			message: "Token is not valid"
		};
	},

	unknownError: () => {
		return {
			status: 500,
			type: "UnknownError",
			message: "Unknown error"
		};
	},

	notFound: () => {
		return {
			status: 404,
			type: "NotFound",
			message: "Not found"
		};
	}
};
