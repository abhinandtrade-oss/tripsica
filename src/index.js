export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve index.html for the root path
    if (url.pathname === '/') {
      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tripsica Tours & Travels</title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <div class="container">
    <h1>Welcome to Tripsica</h1>
    <p>Tours & Travels</p>
  </div>
  <script src="/js/logo.js"></script>
</body>
</html>`,
        {
          headers: {
            'Content-Type': 'text/html; charset=UTF-8',
            'Cache-Control': 'max-age=3600'
          }
        }
      );
    }

    // For all other paths, return 404
    return new Response('Not Found', { status: 404 });
  }
};
