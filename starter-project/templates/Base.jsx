import React from 'react';

export default props => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <link rel="canonical" href={props.url} />
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={props.description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href={`/${props.css_file}`} rel="stylesheet" />
    </head>
    <body>
      <section className="site-header">
        <header>
          <h1>Hello!</h1>
          <h2>This is a new site made with Yagss</h2>
        </header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About Yagss</a></li>
          </ul>
        </nav>
      </section>
      <main>{props.children}</main>
      {
        props.bundledJS ? props.bundledJS.map(s => <script src={s} key={s} />) : null
      }
    </body>
  </html>
);
