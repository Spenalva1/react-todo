const Filter = ({activeFilter, setActiveFilter, className}) => {
  return (
    <div className={className}>
      <button onClick={() => setActiveFilter('ALL')} className={`${activeFilter === 'ALL' ? 'text-blue-500' : 'text-gray-400 hover:text-black'} mr-8 focus:outline-none font-bold`}>All</button>
      <button onClick={() => setActiveFilter('ACTIVE')} className={`${activeFilter === 'ACTIVE' ? 'text-blue-500' : 'text-gray-400 hover:text-black'} mr-8 focus:outline-none font-bold`}>Active</button>
      <button onClick={() => setActiveFilter('COMPLETED')} className={`${activeFilter === 'COMPLETED' ? 'text-blue-500' : 'text-gray-400 hover:text-black'} focus:outline-none font-bold`}>Completed</button>
    </div>
  )
}

export default Filter;