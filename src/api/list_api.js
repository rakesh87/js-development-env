import 'whatwg-fetch';
import get_base_url from "./base_url";

const base_url = get_base_url();

export function get_lists() {
  return get("lists");
};

export function delete_lists(id) {
  return del(`list/${id}`);
};

function get(url) {
  return fetch(base_url + url).then(on_success, on_error);
};

// function name id del as delete is reserved key
function del(url) {
  const request = new Request(base_url + url, {
    method: "DELETE"
  });

  return fetch(request).then(on_success, on_error);
};

function on_success(response) {
  return response.json();
};

function on_error(error) {
  console.log(error); // eslint-disable-line no-console
};
