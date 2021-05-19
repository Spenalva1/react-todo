import styled from 'styled-components';
import checkIcon from '../assets/images/icon-check.svg';
import crossIcon from '../assets/images/icon-cross.svg';

const TodoItem = ({todo, toggleTodoCheck, deleteTodo, mobileDesign}) => {
    return (
        <TodoItemStyles className="flex items-center p-4 bg-white overflow-hidden w-full relative border-b">
            <img onClick={() => toggleTodoCheck(todo.id)} width="30px" height="30px" className={`cursor-pointer m-4 border rounded-full flex justify-center items-center p-3 ${todo.check ? 'bg-gradient-to-r from-checkFrom to-checkTo' : ''}`} src={checkIcon} alt="check" />
            <p className={`flex-1 px-8 ${todo.check ? 'line-through text-gray-300' : ''}`}>{todo.name}</p>
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