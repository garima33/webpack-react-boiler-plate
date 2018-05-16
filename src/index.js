import React from "react";
import ReactDOM from "react-dom";
import {FormComponent} from './component'
const Index = () => {
  return <div>Hello React!</div>;
};
console.log('Form====>', FormComponent)

ReactDOM.render(<FormComponent />, document.getElementById("index"));