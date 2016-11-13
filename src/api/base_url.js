export default function get_base_url() {
  const development = window.location.hostname == "localhost";
  return development ? "http://localhost:3001/" : "/";
}