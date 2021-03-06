import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainLayout extends Component {
  render() {
    return (
      <html>
        <head>
          <script id="initial-state" type="text/json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.data) }} >
          </script>
          <title>Contact List</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script async src="/static/javascripts/bundle.js"></script>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/stylesheets/style.css" />
        </head>
        <body>
          <div id="react-app" dangerouslySetInnerHTML={{ __html: this.props.children }} />
        </body>
      </html>
    );
  }
}

function storeToProps(store) {
  return {
    data: store,
  };
}

export default connect(storeToProps)(MainLayout);
