export default function getBaseUrl() {
  const inDevelopment = (global.window && global.window.location.hostname === 'localhost');
  return inDevelopment ? 'http://localhost:3001/' : '/';
}
