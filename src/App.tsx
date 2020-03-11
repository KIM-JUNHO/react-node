import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import HistoryPage from './pages/HistoryPage';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <PrivateRoute exact path="/request">
          <RequestPage />
        </PrivateRoute>
        <PrivateRoute exact path="/history">
          <HistoryPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
