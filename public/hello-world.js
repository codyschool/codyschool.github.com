/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '/web_modules/@mdx-js/preact.js';
export const meta = {
    title: "Hello World",
    slug: "/hello-world"
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("h1", {
        id: "hello-world"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#hello-world",
        parentName: "h1"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "Hello World"), mdx("p", null, "and some content"), mdx("codeblock", {
        className: "language-js",
        codestring: "const hello = 'Hello World'"
    }, mdx("pre", {
        className: "prism-code language-js",
        style: {
            color: "#d6deeb",
            backgroundColor: "transparent"
        },
        parentName: "codeblock"
    }, mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "const"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " hello "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token string",
        style: {
            color: "rgb(173, 219, 103)"
        },
        parentName: "div"
    }, "'Hello World'")))));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
