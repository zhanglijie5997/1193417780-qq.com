import  React  from 'react';
import  ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from ".//Redux/Store/Store";
import  loadable  from '@loadable/component';
const App = loadable(() => import(/* webpackChunkName: "app" */'./App'));
import 'antd/dist/antd.css';

// 创建store注入
const store = configureStore(createBrowserHistory());
import './Static/Css/Reset.css';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
