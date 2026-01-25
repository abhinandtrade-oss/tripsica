export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Serve index.html for the root path
        if (url.pathname === '/') {
            return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request));
        }

        // Attempt to fetch the requested asset
        const response = await env.ASSETS.fetch(request);

        // If asset not found, serve the custom 404.html
        if (response.status === 404) {
            return env.ASSETS.fetch(new Request(new URL('/404.html', request.url), request));
        }

        return response;
    },
};
