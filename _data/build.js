import { execSync } from "node:child_process";

export default {
	date: new Date().toISOString(),
	commit: execSync("git rev-parse --short HEAD").toString().trim()
};
