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
	async redirects() {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
