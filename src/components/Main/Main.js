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
        createdAt={`${new Date()}`}
        contentText="Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor."
        author="James Jonson"
        _id={0}
      />
      <MainContent
        title="two"
        createdAt={`${new Date()}`}
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
        _id={1}
      />
      <MainContent
        title="three"
        createdAt={`${new Date()}`}
        contentText="Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor."
        author="Flex Box"
        _id={2}
      />
      <MainContent
        title="four"
        createdAt={`${new Date()}`}
        contentText="Ut proident irure ad duis reprehenderit nisi dolor aliqua magna nostrud do.
        Aute magna labore consequat veniam ipsum ut do ipsum. Exercitation sint adipisicing nisi
        veniam qui cupidatat dolor ipsum deserunt anim in. Elit eiusmod esse aliqua ex elit nisi
        enim elit qui duis eiusmod sint. In culpa nulla excepteur duis pariatur do aliqua amet
        elit amet ullamco consequat fugiat ad.Eu culpa Lorem duis minim dolor."
        author="Flex Grid"
        _id={3}
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
