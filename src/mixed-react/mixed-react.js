import React from 'react';
import ReactDOM from 'react-dom';
import OldReact from '/lib/old-react/old-react.js';
import NewReact from '/lib/new-react/new-react.js';

ReactDOM.render(<MixedReact />, document.getElementById('mixed-react'))

export default MixedReact

function MixedReact(props) {
  return (
    <h1>
      Mixed react:
      <OldReact />
      <NewReact />
    </h1>
  )
}