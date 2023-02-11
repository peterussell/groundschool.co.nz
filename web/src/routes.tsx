import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "auth/protected-route";
import {
  ArticlesPage,
  ContactPage,
  ExamsPage,
  HomePage,
  NotFoundPage,
  ContributePage
} from "pages";

const routes = (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/exams" component={ExamsPage} />
    <Route path="/articles" component={ArticlesPage} />
    {/* <Route path="/resources" component={ResourcesPage} /> */}
    <ProtectedRoute
      path="/contribute"
      component={ContributePage}
    />
    <Route path="/contact" component={ContactPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default routes;
