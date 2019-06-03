/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classNames from 'classnames';
import Header from './Header/Header';
import Main from './Main/Main';
import ArticleNav from './ArticleNav/ArticleNav';
import Footer from './Footer/Footer';
import '../styles/layout.scss';
import '../styles/button.scss';


class App extends Component {
  render() {
    return (
      <>
        <div className={wrapper}>
          {/* TODO name from data */}
          <Header name="Type string: name from data or guest" />
          <ArticleNav title="example title sdsadasdasdasdasd" />
          <Main />
          <Footer />
        </div>
      </>
    );
  }
}

const wrapper = classNames({
  wrapper: true,
});


export default App;
