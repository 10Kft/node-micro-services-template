# nginx integration

Link the example-api.confg file to your nginx servers configuration directory, then test, and reload nginx. With that, you now have nginx proxying requests to your example-api server process managed by PM2.

This is for illustration purposes only. In production, you will likely have a cluster of API servers that nginx will proxy requests to.

See http://nginx.org/en/docs/ for more information.
