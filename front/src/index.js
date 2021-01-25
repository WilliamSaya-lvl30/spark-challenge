import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom';
import App from "../routes/App"
import { RecoilRoot } from "recoil";
import 'antd/dist/antd.css';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('app')
);
