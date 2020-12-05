import React from "react";
import { shallow, mount, render } from "../enzyme";

import App from "../App";
import BugTitle from "../components/BugTitle";
import BugStatus from "../components/BugStatus";

describe("loads app component", () => {
    it("renders App component", () => {
        shallow(<App />);
    });
});

describe("properly displays bug feed", () => {
    it("displays the title and project of each bug", () => {
        const wrapper = shallow(
            <BugTitle title="test bug" project="test project" />
        );
        const title = wrapper.find("h2").text();
        expect(title).toBe("test bug");
        const project = wrapper.find("h3").text();
        expect(project).toBe("test project");
    });
    it("displays the correct bug status", () => {
        const wrapper = shallow(<BugStatus status="closed" />);
        const status = wrapper.find("p").text();
        expect(status).toBe("closed");
    });
});
