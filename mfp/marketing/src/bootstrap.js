import React from "react";
import ReactDOM from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>aaaaa</h1>, el);
};
//test
 
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
} else {
}
