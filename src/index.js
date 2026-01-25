export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // GitHub raw URLs for the files
    const baseURL = 'https://raw.githubusercontent.com/abhinandtrade-oss/tripsica/main';
    
    // Route handling
    if (url.pathname === '/') {
      // Fetch index.html from GitHub
      const response = await fetch(`${baseURL}/index.html`);
      const html = await response.text();
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'max-age=300'
        }
      });
    }
    
    // Serve CSS files
    if (url.pathname.startsWith('/css/')) {
      const response = await fetch(`${baseURL}${url.pathname}`);
      const css = await response.text();
      return new Response(css, {
        headers: {
          'Content-Type': 'text/css',
          'Cache-Control': 'max-age=3600'
        }
      });
    }
    
    // Serve JS files
    if (url.pathname.startsWith('/js/')) {
      const response = await fetch(`${baseURL}${url.pathname}`);
      const js = await response.text();
      return new Response(js, {
        headers: {
          'Content-Type': 'application/javascript',
          'Cache-Control': 'max-age=3600'
        }
      });
    }
    
    // Serve image files
    if (url.pathname.startsWith('/assets/images/')) {
      const response = await fetch(`${baseURL}${url.pathname}`);
      const image = await response.arrayBuffer();
      const contentType = url.pathname.endsWith('.jpg') || url.pathname.endsWith('.jpeg') 
        ? 'image/jpeg' 
        : url.pathname.endsWith('.png') 
        ? 'image/png' 
        : 'image/jpeg';
      
      return new Response(image, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'max-age=86400'
        }
      });
    }

        // Serve HTML files
    if (url.pathname.endsWith('.html')) {
      const response = await fetch(`${baseURL}${url.pathname}`);
      const html = await response.text();
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
          'Cache-Control': 'max-age=300'
        }
      });
    }


    // 404 for all other paths
    return new Response('Not Found', { status: 404 });
  }
};

