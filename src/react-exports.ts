// eslint-disable-next-line import/no-extraneous-dependencies
import React from "react";
import { createComponent } from "@lit-labs/react";

import HelloText from "./components/hello-text";

export const HelloTextReact = createComponent({
    tagName: "hello-text",
    elementClass: HelloText,
    react: React,
    events: {
        onchange: "change",
    },
});
