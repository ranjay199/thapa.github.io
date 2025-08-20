import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import TopPicks from './pages/TopPicks';
import Search from './pages/Search';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route path="/categories/:categoryId" component={Categories} />
          <Route path="/blog" component={Blog} />
          <Route path="/top-picks" component={TopPicks} />
          <Route path="/search" component={Search} />
          {/* Placeholder routes for future development */}
          <Route path="/product/:id" render={() => (
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-3xl font-bold">Product Detail Coming Soon</h1>
              <p className="text-gray-600 mt-4">Detailed product reviews and specifications will be available soon.</p>
            </div>
          )} />
          <Route path="/blog/:slug" render={() => (
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-3xl font-bold">Blog Post Coming Soon</h1>
              <p className="text-gray-600 mt-4">Full blog post views are under development.</p>
            </div>
          )} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
