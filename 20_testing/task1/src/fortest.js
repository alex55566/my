import v8n from "v8n";

import { el } from "redom";

export function checkCVC(str) {
  if (str[1] === "validation") {
    v8n().minLength(3).maxLength(3).check(str[0]);
  }
  if (str[1] === "test") {
    let re = /[^0-9]+/g;
    if (re.test(str[0])) {
      return false;
    } else {
      return v8n().minLength(3).maxLength(3).test(str[0]);
    }
  }
}

export function createForm(items) {
  return el(
    "form",
    items.map((item) => el("input", item))
  );
}
