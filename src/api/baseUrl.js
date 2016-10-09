export default function getBaseUrl() {
  const inDevelopment = window && window.location.hostname === 'localhost';
  return inDevelopment ? 'http://localhost:3001/' : '/';
}
