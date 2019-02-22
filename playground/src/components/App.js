import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, CarouselPage, FileUploaderPage, RichEditorPage, NotFoundPage } from 'pages';
import { PageTemplate } from 'components/common';

const App = () => {
  return (
    <div>
      <PageTemplate />
      <div className="wrap-contents">
        <Switch>
          <Route exact path='/' component={ListPage} />
          <Route path='/page/:page' component={ListPage} />
          <Route path='/tag/:tag/:page?' component={ListPage} />
          <Route path='/carousel' component={CarouselPage} />
          <Route path='/file-uploader' component={FileUploaderPage} />
          <Route path='/editor' component={RichEditorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

    </div>
  );
};

export default App;