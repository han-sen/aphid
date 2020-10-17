const seedData = [
    {
        id: 1,
        title: "broken list",
        project: "dogify",
        severity: "breaking",
        blameFile: "unknown",
        summary: "can't render list of dogs",
        readOut: "Unexpected token '<' at start of file",
        status: "open",
    },
    {
        id: 2,
        title: "can't save form data",
        project: "papaya",
        severity: "breaking",
        blameFile: "signUpForm.js",
        summary: "form data is not coming in as expected",
        readOut: "reference error: taget is not defined",
        status: "open",
    },
    {
        id: 3,
        title: "wrong image order in slider",
        project: "juniper",
        severity: "minor",
        blameFile: "slider.js",
        summary: "slider starts from 2nd item in image array",
        readOut: "",
        status: "closed",
    },
    {
        id: 4,
        title: "can't access auth route",
        project: "momostly",
        severity: "breaking",
        blameFile: "app.js",
        summary: "unable to access gated route even with a valid json token",
        readOut: "403 - Unauthorized Access",
        status: "open",
    },
    {
        id: 5,
        title: "nested promises need cleanup",
        project: "shipit",
        severity: "warning",
        blameFile: "shipmentController.js",
        summary: "ESLint is complaining about nested promises",
        readOut: "Warning: Avoid Nesting Promises",
        status: "closed",
    },
];

export default seedData;
