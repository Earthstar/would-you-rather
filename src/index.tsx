import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChoicePage, {ChoicePageDataWrapper, getChoicePageParams} from "./components/ChoicePage";
import Choices from "./choices.json"
import {Choice} from "./types";

function getChoices() {
  return Choices as Choice[];
}



// @ts-ignore
function getChoiceLoader({params}) {
  // we have two pieces of information we need to convey
  // what is the id of the choice
  // and whether this is the "last" choice
  const choiceId = parseInt(params.choiceId);
  return getChoicePageParams(getChoices(), choiceId);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
      children: [
        {
          path: "choices/:choiceId",
          element: (
            <ChoicePageDataWrapper/>
          ),
          loader: getChoiceLoader,
        }
      ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
