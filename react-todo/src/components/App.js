import { useEffect, useState } from 'react';
import bgDesktopLightImage from '../assets/images/bg-desktop-light.jpg';
import bgMobileLightImage from '../assets/images/bg-mobile-light.jpg';
import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';
import useLocal from '../lib/useLocal';
import Filter from './filter';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);  // DARK
  const [todos, setTodos] = useLocal('TODOS', []);
  const [todosShow, setTodosShow] = useState(todos);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const mobileDesign = windowWidth < 850;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  useEffect(() => {
    setTodosShow(todos.filter(todo => {
      if (activeFilter === 'ALL') {
        return true;
      }
      if (activeFilter === 'ACTIVE' && !todo.check) {
        return true;
      }
      if (activeFilter === 'COMPLETED' && todo.check) {
        return true;
      }
      return false;
    }))
  }, [todos, activeFilter])

  const newTodo = (name, check) => {
    setTodos([...todos, {name, check, id: new Date().valueOf()}])
  }

  const toggleTodoCheck = (id) => {
    setTodos(todos.map(todo => todo.id === id ? ({...todo, check: !todo.check}) : todo ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.check));
  }
  

  return (
    <div>
      <img className="w-full h-auto absolute z-0" src={mobileDesign ? bgMobileLightImage : bgDesktopLightImage} alt="background" />
      <div className="z-10 relative container m-auto max-w-6xl px-8 py-16 box-border">
        <div className="header flex justify-between items-center pb-16">
          <h1 className="text-white font-black text-6xl tracking-widest">TODO</h1>
          <button className="outline-none focus:outline-none" onClick={() => setDarkTheme(!darkTheme)}>
            <img src={ darkTheme ? sunIcon : moonIcon} alt="theme toggle"></img>
          </button>
        </div>
        <TodoForm newTodo={newTodo} />
        {todos && todos.length > 0 && <div className="todo-list overflow-hidden shadow-lg mt-14 border rounded-lg">
          <div>
            {todosShow.map(todo => <TodoItem key={todo.id} className="todo-list-item" todo={todo} mobileDesign={mobileDesign} deleteTodo={deleteTodo} toggleTodoCheck={toggleTodoCheck} />)}
          </div>
          <Filter todos={todos} setActiveFilter={setActiveFilter} activeFilter={activeFilter} clearCompleted={clearCompleted} />
        </div>}
      </div>
    </div>
  );
}


export default App;
