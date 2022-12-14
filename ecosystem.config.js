module.exports = {
	apps: [{
		script: "npm",
		watch: true,
		instances: "max",
		exec_mode: "cluster",
		autorestart: true,
		env_development: {
			name: "sb-development",
			NODE_ENV: "development",
			args: "local",
		},
		env_production: {
			name: "sb-production",
			NODE_ENV: "production",
			args: "deploy-storybook",
		},
	}],
};
