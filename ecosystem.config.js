module.exports = {
	apps: [{
		name:"sb-build",
		script: "serve",
		watch: true,
		instances: "max",
		exec_mode: "cluster",
		autorestart: true,
		env: {
			PM2_SERVE_PATH: './storybook-static',
			PM2_SERVE_PORT: 8080,
			PM2_SERVE_SPA: 'true',
			PM2_SERVE_HOMEPAGE: './index.html',
			NODE_ENV: "development",
			args: "dev",
		},
	}],
};
