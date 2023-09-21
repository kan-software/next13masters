/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
};

module.exports = nextConfig;
