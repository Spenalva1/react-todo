import { useRef, useState } from "react";
import checkIcon from '../assets/images/icon-check.svg';
import { useDarkMode } from "../lib/darkModeContext";
import CheckButton from "./CheckButton";

const TodoForm = ({newTodo}) => {
    const {darkMode} = useDarkMode();
    const [formCheck, setFormCheck] = useState(false);
    const [formInput, setFormInput] = useState('');
    const inputRef = useRef();
  
    const handleFormInputChange = (event) => {
      setFormInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formInput.trim().length <= 0) return;
        newTodo(formInput.trim(), formCheck);
        setFormCheck(false);
        setFormInput('');
    }

    return (
        <form onSubmit={handleSubmit} className={`flex p-4 ${darkMode ? 'bg-darkVeryDarkDesaturatedBlue' : 'bg-white'} shadow-lg rounded-lg overflow-hidden w-full relative`}>
            <CheckButton check={formCheck} toggleTodoCheck={() => setFormCheck(!formCheck)}/>
            <input ref={inputRef} value={formInput} onChange={handleFormInputChange} className={`${darkMode ? 'bg-darkVeryDarkDesaturatedBlue text-white' : 'bg-white text-black'} flex-1 px-8 outline-none focus:outline-none`} type="text" placeholder="Create a new todo..."></input>
        </form>
    )
}

export default TodoForm