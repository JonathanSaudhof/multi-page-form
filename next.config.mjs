/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/form-details',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
