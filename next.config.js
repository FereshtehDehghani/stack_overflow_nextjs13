/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: {
			taint: true,
			bodySizeLimit: "2mb",
		},
		serverComponentsExternalPackages: ["mongoose"],
	},
};

module.exports = nextConfig;
