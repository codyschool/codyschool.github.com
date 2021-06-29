import { h, Fragment } from "preact";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";

const components = {
  codeblock: (props) => <div class="bg-gray-400" {...props} />,
};

export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <Fragment>
        <Helmet>
          <link rel="stylesheet" href="/styles.css" />
        </Helmet>
        <header role="banner">
          <nav class="wrapper py-4">
            <a href="/" class="title">
              Cody School
            </a>
            <a href="/about">
              About
            </a>
          </nav>
        </header>
        <main role="main">
          <div class="wrapper">{props.children}</div>
        </main>
      </Fragment>
    </MDXProvider>
  );
}
