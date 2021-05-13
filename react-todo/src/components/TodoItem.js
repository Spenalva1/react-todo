import checkIcon from '../assets/images/icon-check.svg';

const TodoItem = ({todo, toggleTodoCheck}) => {
    return (
        <div className="flex items-center p-4 bg-white overflow-hidden w-full relative border-b first:bg-black">
            <img onClick={() => toggleTodoCheck(todo.id)} width="30px" height="30px" className={`cursor-pointer m-4 border rounded-full flex justify-center items-center p-3 ${todo.check ? 'bg-gradient-to-r from-checkFrom to-checkTo' : ''}`} src={checkIcon} alt="check" />
            <p className={`flex-1 px-8 ${todo.check ? 'line-through text-gray-300' : ''}`}>{todo.name}</p>
        </div>
    )
}

export default TodoItem;