import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<NewReact showHeader />, document.getElementById('new-react'))

export default NewReact

function NewReact(props) {
  return (
    <div>
      {props.showHeader && <h1>React 16</h1>}
      This was rendered with React 16
    </div>
  )
}