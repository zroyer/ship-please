import React from "react";
import ReactDOM from "react-dom";
import './styles.less';

const App = () => {
  return <div className='test'>Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
