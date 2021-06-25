import { h } from "/web_modules/preact.js";
import { Helmet } from "/web_modules/react-helmet.js";
import { MDXProvider } from "/web_modules/@mdx-js/preact.js";
const components = {
    codeblock: (props)=>h("div", Object.assign({
            class: "bg-gray-400"
        }, props))
};
export default function PageWrapper(props) {
    return h(MDXProvider, {
        components: components
    }, h("div", null, h(Helmet, null, h("link", {
        rel: "stylesheet",
        href: "/styles.css"
    })), h("header", {
        role: "banner"
    }, h("nav", {
        className: "wrapper py-4"
    }, h("a", {
        href: "/",
        className: "title"
    }, "Cody School"))), h("main", {
        role: "main"
    }, h("div", {
        className: "wrapper"
    }, props.children))));
};
