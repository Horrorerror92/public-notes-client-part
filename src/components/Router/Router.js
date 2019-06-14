import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContentList from '../MainContentList/MainContentList';
import NoteForm from '../NoteForm/NoteForm';
import ViewNote from '../ViewNote/ViewNote';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import NotFound from '../NotFound/NotFound';

const Router = () => (
  <>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <MainContentList
            notes={[
              {
                title: 'one',
                createdAt: `${new Date()}`,
                contentText: 'Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor  ',
                author: 'Flex Box',
                _id: 0,
              },
              {
                title: 'two',
                createdAt: `${new Date()}`,
                contentText: 'Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor  ',
                author: 'Flex Box',
                _id: 1,
              },
              {
                title: 'three',
                createdAt: `${new Date()}`,
                contentText: 'Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor  ',
                author: 'Flex Box',
                _id: 2,
              },
              {
                title: 'four',
                createdAt: `${new Date()}`,
                contentText: 'Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor  ',
                author: 'Flex Box',
                _id: 3,
              },

            ]}
          />
        )}
      />
      <Route
        exact
        path="/news/:id"
        component={() => (
          <ViewNote
            title="one"
            createdAt={`${new Date()}`}
            contentText="Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor Ut proident irure ad duis reprehenderit nisi dolor  "
            author="Flex Box"
          />
        )}
      />
      <Route exact path="/add" component={NoteForm} />
      <Route exact path="/registration" component={RegistrationForm} />
      <Route path="*" component={NotFound} />
    </Switch>
  </>

);

export default Router;
