import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./js/store/index";

render(
    <Provider store ={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
