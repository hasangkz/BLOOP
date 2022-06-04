import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Blog from './pages/blog/Blog';
import Error from './pages/Error';
import ThemeSelector from './components/ThemeSelector';

import { useTheme } from './hooks/useTheme';
function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <ThemeSelector />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/blog/:id'>
          <Blog />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
