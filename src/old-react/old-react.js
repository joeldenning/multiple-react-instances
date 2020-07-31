import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<OldReact />, document.getElementById('old-react'))

export default OldReact

function OldReact(props) {
  return (
    <div>This was rendered with React 15</div>
  )
}