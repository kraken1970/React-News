import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import Root from "./news/components/Root";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
