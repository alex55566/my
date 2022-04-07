import { checkCVC } from "./fortest";
import { createForm } from "./fortest";

let cardValid = require("card-validator");

test("Проверка CVC должна пропускать корректные значения", () => {
  expect(checkCVC(["123", "test"])).toBe(true);
});

test("Проверка CVC не должна пропускать корректные значения2", () => {
  expect(checkCVC(["1", "test"])).toBe(false);
  expect(checkCVC(["1234", "test"])).toBe(false);
  expect(checkCVC(["abc", "test"])).toBe(false);
  expect(checkCVC(["a.c", "test"])).toBe(false);
});

test("проверка валидного номера карты", () => {
  expect(cardValid.number("4111 1111 1111 1111").isValid).toBe(true);
});

test("проверка невалидного номера карты", () => {
  expect(cardValid.number("aaaa bbbb cccc dddd").isValid).toBe(false);
  expect(cardValid.number("фффф цццц юююю щщщщ").isValid).toBe(false);
  expect(cardValid.number("4111, 1111, 1111, 1111").isValid).toBe(false);
  expect(cardValid.number("4444").isValid).toBe(false);
  expect(cardValid.number("5555 5555 5555 5555 5555 5555 5555").isValid).toBe(
    false
  );
});

test("Функция createForm должна создать форму", () => {
  const expectedText =
    '<form><input name="Элемент 1" placeholder="Номер карты"><input name="Элемент 2" placeholder="ММ/ГГ"><input name="Элемент 3" placeholder="CVV/CVC"><input name="Элемент 4" placeholder="Email"></form>';
  const el = createForm([
    { name: "Элемент 1", placeholder: "Номер карты" },
    { name: "Элемент 2", placeholder: "ММ/ГГ" },
    { name: "Элемент 3", placeholder: "CVV/CVC" },
    { name: "Элемент 4", placeholder: "Email" },
  ]);
  expect(el).toBeInstanceOf(HTMLFormElement);
  expect(el.outerHTML).toBe(expectedText);
});
