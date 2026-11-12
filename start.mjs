// Render production entry point.
process.env.NODE_ENV = 'production';
await import('./dist/server.mjs');
