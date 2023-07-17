import React from "react";
import ReactDOMClient from "react-dom/client";
import { Homepage } from "./screens/Homepage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Homepage />);
