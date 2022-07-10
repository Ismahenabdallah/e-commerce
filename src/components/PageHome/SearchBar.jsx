import React from 'react'

export default function SearchBar({value,search }) {
  return (
    <div>
      <form className="form-inline">
        <input className="form-control mr-sm-2 mt-2" type="search" placeholder="Search By Title" aria-label="Search"
          value={value}
          onChange={search} />

      </form>
    </div>
  )
}
