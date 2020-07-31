import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<OldReact showHeader />, document.getElementById('old-react'))

export default OldReact

function OldReact(props) {
  return (
    <div>
      {props.showHeader && <h1>React 15</h1>}
      This was rendered with React 15
    </div>
  )
}