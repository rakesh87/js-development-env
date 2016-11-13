import {get_lists, delete_list} from "./api/list_api";
import "./index.css";

import numeral from "numeral";

const courseCost = numeral(2000).format("Rs 0,0.00");
console.log(`I would pay ${courseCost} for awesome tutorial`);  // eslint-disable-line no-console

get_lists().then(result => {
  let lists_res = "";

  result.forEach(list => {
    lists_res += `<tr>
      <td><a href="#" data-id="${list.id}" class="delete-list"> Delete </a></td>
      <td>${list.id}</td>
      <td>${list.name}</td>
      <td>${list.position}</td>
      </tr>`;
  });

  global.document.getElementById("lists").innerHTML = lists_res;

  const delete_links = global.document.getElementsByClassName("delete-list");

  Array.from(delete_links, link => {
    link.onClick = function(event) {
      const element = event.target;
      event.preventDefault();
      delete_lists(element.attributes["data-id"].value);
      const row = element.parentNode.perentNode;
      row.parentNode.removeChild(row);
    };
  });
});
