import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import TeacherList from '../pages/TeacherList';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/study" exact component={TeacherList} />
      <Route path="/give-classes" exact component={TeacherForm} />
    </Switch>
  )
}

export default Routes;