/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "rickandmortyapi.com"}]
    },
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/Home"
            },
            {
                source: "/axios",
                destination: "/AxiosPage"
            },
            {
                source: "/no-hook",
                destination: "/NoHookPage"
            },
            {
                source: "/figma",
                destination: "/FigmaPage"
            }
        ]
    }
};

export default nextConfig;
