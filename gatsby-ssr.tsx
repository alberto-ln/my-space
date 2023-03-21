import React from "react";

const HtmlAttributes = {
    lang: "es",
};

const HeadComponents = [
    <link
        key={"favicon"}
        rel="icon"
        type="image/png"
        href="/assets/images/logo.png"
    />
];

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes(HtmlAttributes);
    setHeadComponents(HeadComponents);
};
