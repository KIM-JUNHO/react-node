import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Request from './pages/Request';
import History from './pages/History';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route exact path="/request" component={Request} />
      <Route exact path="/history" component={History} />
    </BrowserRouter>
  );
}
