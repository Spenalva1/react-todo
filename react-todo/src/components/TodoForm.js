import { useRef, useState } from "react";
import checkIcon from '../assets/images/icon-check.svg';

const TodoForm = ({newTodo}) => {
    const [formCheck, setFormCheck] = useState(false);
    const [formInput, setFormInput] = useState('');
    const inputRef = useRef();

    const handleFormCheckChange = (event) => {
      setFormCheck(event.target.checked);
    }
  
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
        <form onSubmit={handleSubmit} className="flex p-4 bg-white shadow-lg rounded-lg overflow-hidden w-full relative border">
            <label className="cursor-pointer m-4" onClick={() => inputRef.current.focus()}>
                <img width="30px" height="30px" className={`border rounded-full flex justify-center items-center p-3 ${formCheck ? 'bg-gradient-to-r from-checkFrom to-checkTo' : ''}`} src={checkIcon} alt="check" />
                <input className="hidden" type="checkbox" checked={formCheck} onChange={handleFormCheckChange}></input>
            </label>
            <input ref={inputRef} value={formInput} onChange={handleFormInputChange} className="flex-1 px-8 outline-none focus:outline-none" type="text" placeholder="Create a new todo..."></input>
        </form>
    )
}

export default TodoForm