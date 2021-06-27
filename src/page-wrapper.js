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
          <nav className="wrapper py-4">
            <a href="/" className="title">
              Cody School
            </a>
          </nav>
        </header>
        <main role="main">
          <div className="wrapper">{props.children}</div>
        </main>
      </Fragment>
    </MDXProvider>
  );
}
