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
        className: "max-w-4xl mx-auto"
    }, h(Helmet, null, h("link", {
        rel: "stylesheet",
        href: "/styles.css"
    })), h("div", null, h("a", {
        href: "/"
    }, "Home")), props.children));
};
