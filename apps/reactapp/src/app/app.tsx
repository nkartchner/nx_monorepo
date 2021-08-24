import styles from './app.module.scss';

import { Route, Switch } from 'react-router-dom';

import { routes, Route as LocalRoute } from './js/router'

export function App() {
  return (
    <div className={styles.app}>
      <Switch>
        {routes.map((route: LocalRoute) => {
          return (
            <Route path={route.path} component={route.component} key={route.name} />
          )
        })}
      </Switch>
    </div>
  );
}

export default App;
