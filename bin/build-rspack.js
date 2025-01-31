import { buildRspack } from "../lib/index.js";

const [, , remote = "origin", branch = "main"] = process.argv;

(async () => {
	buildRspack(remote, branch);
})().catch(err => {
	process.exitCode = 1;
	console.error(err.stack);
});
