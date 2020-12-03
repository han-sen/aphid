import React from "react";
import { shallow, mount, render } from "../enzyme";

import App from "../App";

describe("rendering components", () => {
    it("renders App component", () => {
        shallow(<App />);
    });
});
