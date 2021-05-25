import styled from 'styled-components';
import crossIcon from '../assets/images/icon-cross.svg';
import { useDarkMode } from '../lib/darkModeContext';
import CheckButton from './CheckButton';

const TodoItem = ({provided, todo, toggleTodoCheck, deleteTodo, mobileDesign}) => {
    const {darkMode} = useDarkMode();
    return (
        <TodoItemStyles {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className={`flex items-center p-4 ${darkMode ? 'bg-darkVeryDarkDesaturatedBlue' : 'bg-white'} overflow-hidden w-full relative border-b`}>
            <CheckButton check={todo.check} toggleTodoCheck={() => toggleTodoCheck(todo.id)}/>
            <p className={`${darkMode ? 'text-white' : 'text-black'} flex-1 px-8 ${todo.check ? 'line-through opacity-40' : ''}`}>{todo.name}</p>
            <img onClick={() => deleteTodo(todo.id)} width="30px" height="30px" className={`${!mobileDesign ? 'desktop' : ''} cursor-pointer m-4 p-3`} src={crossIcon} alt="check" />
        </TodoItemStyles>
    )
}

const TodoItemStyles = styled.div`
    .desktop {
        display: none;
    }
    
    &:hover {
        .desktop {
            display: block;
        }
    }
`

export default TodoItem;