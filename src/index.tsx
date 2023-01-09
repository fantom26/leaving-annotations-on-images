import ReactDOM from "react-dom/client";
import { StateProvider } from "utils/contexts";

import { App } from "./app";

import "./scss/globals.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StateProvider>
    <App />
  </StateProvider>
);
