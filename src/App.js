import React from "react";
import Header from "./componentes/header.js";
import Body from "./componentes/body.js";
import Menu from "./componentes/menu.js";
import Fetch from "./componentes/fetch.js";
import Hook from "./componentes/Hook.js";

function App() {
  return (
    <div>
      {/* <Fetch /> */}
      <Hook initialNumber={1} />
    </div>
  );
}
export default App;
