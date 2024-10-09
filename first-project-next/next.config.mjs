/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/Home"
            },
            {
                source: "/axios",
                destination: "/AxiosPage"
            }
        ]
    }
};

export default nextConfig;
