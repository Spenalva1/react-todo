import { useEffect, useState } from 'react';
import styled from 'styled-components';
import bgDesktopLightImage from '../assets/images/bg-desktop-light.jpg';
import bgMobileLightImage from '../assets/images/bg-mobile-light.jpg';
import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';
import useLocal from '../lib/useLocal';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);  // DARK
  const [todos, setTodos] = useLocal('TODOS', []);
  // const [todos, setTodos] = useState([
  //   {
  //     name: 'todo 1',
  //     id: 1,
  //     check: false
  //   },
  //   {
  //     name: 'todo 2',
  //     id: 2,
  //     check: true
  //   },
  //   {
  //     name: 'todo 3',
  //     id: 3,
  //     check: false
  //   }
  // ]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  const newTodo = (name, check) => {
    setTodos([...todos, {name, check, id: new Date().valueOf()}])
  }

  const toggleTodoCheck = (id) => {
    setTodos(todos.map(todo => todo.id === id ? ({...todo, check: !todo.check}) : todo ))
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
        <div className="todo-list overflow-hidden shadow-lg mt-14">
          <TodoListItems>
            {todos && todos.length > 0 && todos.map(todo => <TodoItem key={todo.id} className="todo-list-item" todo={todo} toggleTodoCheck={toggleTodoCheck} />)}
          </TodoListItems>
          <div className="todo-list-filter">

          </div>
        </div>
      </div>
    </div>
  );
}

const TodoListItems = styled.div`
  div:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;


export default App;
