import checkIcon from '../assets/images/icon-check.svg';

const CheckButton = ({toggleTodoCheck, check}) => {
  return (
    <div className="m-4">
      <div onClick={() => toggleTodoCheck()} style={{width: '30px', height: '30px'}} className={`${check ? 'bg-gradient-to-r from-checkFrom to-checkTo' : ''} p-3 cursor-pointer border rounded-full flex justify-center items-center overflow-hidden`}>
        {check && <img onClick={() => toggleTodoCheck()} className="w-full select-none" src={checkIcon} alt="check" />}
      </div>
    </div>
  )
}

export default CheckButton
