import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const el = document.getElementById("root");
console.log(el);

const root = ReactDOM.createRoot(el);

root.render(<App />);
