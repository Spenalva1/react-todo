import checkIcon from '../assets/images/icon-check.svg';

const TodoItem = ({todo}) => {
    return (
        <div className="flex items-center p-4 bg-white overflow-hidden w-full relative border-b first:rounded">
            <img width="30px" height="30px" className={`m-4 border rounded-full flex justify-center items-center p-3 ${todo.check ? 'bg-gradient-to-r from-checkFrom to-checkTo' : ''}`} src={checkIcon} alt="check" />
            <p className="flex-1 px-8">{todo.name}</p>
        </div>
    )
}

export default TodoItem;