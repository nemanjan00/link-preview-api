module.exports = {
	tokenIsMissing: () => {
		return {
			status: 400,
			error: {
				type: "TokenNotFound",
				message: "Authorization token is missing"
			}
		};
	},
	tokenIncorrect: () => {
		return {
			status: 401,
			error: {
				type: "TokenIsInvalid",
				message: "Token is not valid"
			}
		};
	}
};
