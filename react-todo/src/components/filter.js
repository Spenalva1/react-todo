const Filter = ({todos, clearCompleted, activeFilter, setActiveFilter}) => {
  const todosLeft = todos.filter(todo => !todo.check).length;
  return (
    <div className="bg-white p-8 flex justify-between items-center relative">
      <p className="text-gray-400">{todosLeft > 0 ? `${todosLeft} items left` : 'No items left'}</p>
      <button onClick={() => clearCompleted()} className="text-gray-400 focus:outline-none hover:text-black">Clear Completed</button>
      <div className="filters absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <button onClick={() => setActiveFilter('ALL')} className={`${activeFilter === 'ALL' ? 'text-blue-600' : 'text-gray-500 hover:text-black'} mr-8 focus:outline-none `}>All</button>
        <button onClick={() => setActiveFilter('ACTIVE')} className={`${activeFilter === 'ACTIVE' ? 'text-blue-600' : 'text-gray-500 hover:text-black'} mr-8 focus:outline-none `}>Active</button>
        <button onClick={() => setActiveFilter('COMPLETED')} className={`${activeFilter === 'COMPLETED' ? 'text-blue-600' : 'text-gray-500 hover:text-black'} focus:outline-none `}>Completed</button>
      </div>
    </div>
  )
}

export default Filter;