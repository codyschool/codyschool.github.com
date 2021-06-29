import { h, Fragment } from "/web_modules/preact.js";
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
    }, h(Fragment, null, h(Helmet, null, h("link", {
        rel: "stylesheet",
        href: "/styles.css"
    })), h("header", {
        role: "banner"
    }, h("nav", {
        class: "wrapper py-4"
    }, h("a", {
        href: "/",
        class: "title"
    }, "Cody School"), h("a", {
        href: "/about"
    }, "About"))), h("main", {
        role: "main"
    }, h("div", {
        class: "wrapper"
    }, props.children))));
};
