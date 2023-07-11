/* eslint-disable no-console */
/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	sassOptions: {
		logger: {
			sourceMap: true,
			warn: function (message) {
				console.warn(message);
			},
			debug: function (message) {
				console.log(message);
			},
		},
	},
};

module.exports = nextConfig;
