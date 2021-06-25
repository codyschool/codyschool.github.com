import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => (
    <div
      class="bg-gray-400"
      {...props}
    />
  ),
};
export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <div className="max-w-4xl mx-auto">
        <Helmet>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        <div><a href="/">Home</a></div>
        {props.children}
      </div>
    </MDXProvider>
  );
}
