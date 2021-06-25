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
    }, h("div", {
        className: "wrapper"
    }, h(Helmet, null, h("link", {
        rel: "stylesheet",
        href: "/styles.css"
    })), h("header", {
        role: "banner"
    }, h("a", {
        href: "/"
    }, "Home")), h("main", {
        role: "main"
    }, props.children)));
};
