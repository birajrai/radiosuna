module.exports = {
    async redirects() {
        return [
            {
                source: '/_next/data/:path*',
                destination: '/',
                permanent: false,
            },
        ];
    },
};
