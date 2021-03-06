import { useEffect, useState } from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import bgDesktopLightImage from '../assets/images/bg-desktop-light.jpg';
import bgDesktopDarkImage from '../assets/images/bg-desktop-dark.jpg';
import bgMobileLightImage from '../assets/images/bg-mobile-light.jpg';
import bgMobileDarkImage from '../assets/images/bg-mobile-dark.jpg';
import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';
import { useDarkMode } from '../lib/darkModeContext';
import useLocal from '../lib/useLocal';
import Filter from './filter';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const App = () => {
  const {darkMode, toggleDarkMode} = useDarkMode();
  const [todos, setTodos] = useLocal('TODOS', []);
  // const [todosShow, setTodosShow] = useState(todos);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const todosLeft = todos.filter(todo => !todo.check).length;
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

  // useEffect(() => {
  //   setTodosShow(todos.filter(todo => {
  //     if (activeFilter === 'ALL') {
  //       return true;
  //     }
  //     if (activeFilter === 'ACTIVE' && !todo.check) {
  //       return true;
  //     }
  //     if (activeFilter === 'COMPLETED' && todo.check) {
  //       return true;
  //     }
  //     return false;
  //   }))
  // }, [todos, activeFilter])

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
  
  const onDragEnd = (result) => {
    if(!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
  }
  
  const todosShow = todos.filter(todo => {
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
    })

  return (
    <div>
      <img className="w-full h-auto absolute z-0" src={mobileDesign ? (darkMode ? bgMobileDarkImage : bgMobileLightImage) : (darkMode ? bgDesktopDarkImage : bgDesktopLightImage)} alt="background" />
      <div className="z-10 relative container m-auto max-w-6xl px-8 py-16 box-border">
        <div className="header flex justify-between items-center pb-16">
          <h1 className="text-white font-black text-6xl tracking-widest">TODO</h1>
          <button className="outline-none focus:outline-none" onClick={() => toggleDarkMode()}>
            <img src={ darkMode ? sunIcon : moonIcon} alt="theme toggle"></img>
          </button>
        </div>
        <TodoForm newTodo={newTodo} />
        {todos && todos.length > 0 && <div className="todo-list overflow-hidden shadow-lg mt-14 rounded-lg">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todos">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {todosShow.map((todo, index) => (
                    <Draggable key={todo.id} draggableId={''+todo.id} index={index}>
                      {(provided) => (
                        // <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>{todo.name}</div>
                        // <TodoItem {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className="todo-list-item" todo={todo} mobileDesign={mobileDesign} deleteTodo={deleteTodo} toggleTodoCheck={toggleTodoCheck} />
                        <TodoItem provided={provided} className="todo-list-item" todo={todo} mobileDesign={mobileDesign} deleteTodo={deleteTodo} toggleTodoCheck={toggleTodoCheck} />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className={`todo-footer ${darkMode ? 'bg-darkVeryDarkDesaturatedBlue' : 'bg-white'} p-8 flex justify-between items-center relative`}>
            <p className="text-gray-400">{todosLeft > 0 ? `${todosLeft} items left` : 'No items left'}</p>
            <button onClick={() => clearCompleted()} className="text-gray-400 focus:outline-none hover:text-black">Clear Completed</button>
            {!mobileDesign && <Filter className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" todos={todos} setActiveFilter={setActiveFilter} activeFilter={activeFilter} clearCompleted={clearCompleted} />}
          </div>
        </div>}
        {todos && todos.length > 0 && mobileDesign && <Filter className={`mt-16 p-4 ${darkMode ? 'bg-darkVeryDarkDesaturatedBlue' : 'bg-white'} flex justify-center rounded-lg shadow-lg`} todos={todos} setActiveFilter={setActiveFilter} activeFilter={activeFilter} clearCompleted={clearCompleted} />}
      </div>
    </div>
  );
}


export default App;
