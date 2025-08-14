export const onRequest = (context: { request: { url: string | URL; }; }) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (path === '/click') {
    return new Response('Click endpoint reached', {
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  return new Response(JSON.stringify({
    status: 404,
    headers: { 'Content-Type': 'text/plain' },
  }));
};