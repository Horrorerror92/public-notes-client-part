/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import classNames from 'classnames';
import {
  Header, Main, Footer,
} from './components';
import './styles/layout.scss';
import './styles/button.scss';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className={wrapper}>
            {/* TODO name from data */}
            <Header name="Type string: name from data or guest" />
            {/* Disable ArticleNav - in dev */}
            {/* <ArticleNav title="example title sdsadasdasdasdasd" /> */}
            <Main />
            <Footer />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

const wrapper = classNames({
  wrapper: true,
});


export default App;
