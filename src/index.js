import React from "react";
import ReactDOM from 'react-dom';  //this is going to hook react in index.html

import App from "./App";
import './index.css';

ReactDOM.render(<App/>, document.getElementById('root'));

//  App component is going to be rendered with the id of root in index.html  