/* eslint-disable no-use-before-define */
import React from 'react';
import classNames from 'classnames';
import MainContent from '../MainContent/MainContent';
import './Main.scss';

const Main = () => (
  <div className={mainClass}>
    <div className={mainOverflowClass}>
      <MainContent
        title="one"
        date="01/01/2017"
        contentText="Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor."
        author="James Jonson"
      />
      <MainContent
        title="two"
        date="02/02/2018"
        contentText="Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor.
        Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor."
        author="Flex Box"
      />
      <MainContent
        title="three"
        date="02/02/2019"
        contentText="Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor."
        author="Flex Box"
      />
      <MainContent
        title="four"
        date="03/01/2019"
        contentText="Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor."
        author="Flex Grid"
      />
    </div>
  </div>
);

const mainClass = classNames({
  main: true,
  main_position: true,
});

const mainOverflowClass = classNames({
  main__overflow: true,
});

export default Main;
