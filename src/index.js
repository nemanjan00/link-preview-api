const app = require("./app");
const config = require("./config");

app.listen(config.get("PORT"), () => {
	console.log(`[🚀]  Running on the ${config.get("PORT")} port.`);
});
