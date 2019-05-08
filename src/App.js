import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SomarNumeros from "./SomarNumeros";

const App = () => (
  <Provider store={store}>
    <h1>Soma entre número com React e Redux</h1>
    <SomarNumeros />
  </Provider>
);

export default App;
