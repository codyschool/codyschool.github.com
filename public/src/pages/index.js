import { h } from "/web_modules/preact.js";
export default ((props)=>h("div", {
        className: "wrapper"
    }, h("h1", null, "Cody School"), h("article", null, h("a", {
        href: "/hello-world"
    }, "Hello World")))
);
