import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<NewReact />, document.getElementById('new-react'))

export default NewReact

function NewReact(props) {
  return (
    <div>This was rendered with React 16</div>
  )
}