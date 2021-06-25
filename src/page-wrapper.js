import { h } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => <div class="bg-gray-400" {...props} />,
};
export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <div className="wrapper">
        <Helmet>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        <header role="banner">
          <a href="/">Home</a>
        </header>
        <main role="main">{props.children}</main>
      </div>
    </MDXProvider>
  );
}
