import faker from "faker";

const cartText = `<div>${faker.random.number()}</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
 