import React from "react";
import ReactDOM from "react-dom";
import App from "./App"


const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

//if we are in development and in isolation 
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot)
    }
}

// we are running through container
export { mount }