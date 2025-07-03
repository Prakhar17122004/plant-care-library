import React from 'react'

function SearchAndFilter({ searchTerm, setSearchTerm, filter, setFilter }) {
  const careLevels = ['Easy', 'Medium', 'Hard']

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by common name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {careLevels.map(level => (
         <button
  key={level}
  className={`btn me-2 ${filter === level ? 'btn-success' : 'btn-outline-success'}`}
  onClick={() => setFilter(filter === level ? '' : level)}
>
  {level}
</button>

        ))}
      </div>
    </div>
  )
}

export default SearchAndFilter
