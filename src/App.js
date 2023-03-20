import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import AllPosts from './Pages/AllPosts';
import TodoList from './Pages/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={ TodoList }></Route>
      <Route path='/results/:id' component={AllPosts}></Route>
    </BrowserRouter>
  );
}

export default App;
