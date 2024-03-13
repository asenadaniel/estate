import React, { useState } from 'react'
import './searchbox.scss'
import { Search } from '@mui/icons-material'

const categories = ['Buy', 'Rent']

function SearchBox() {

  const [query, setQuery] = useState({
    category: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0
  })

  const handleSwitch = (value) => {
    setQuery(prev => ({ ...prev, category: value }))
  }

  return (
    <div className='searchbox'>
      <div className="category">
        {categories.map(category => (
          <button
            className={query.category === category ? 'active ' : ''}
            key={category}
            onClick={() => handleSwitch(category)}>{category}
          </button>

        ))}

      </div>
      <form>
        <input
          type="text"
          name="location"
          placeholder='City Location'
        />
        <input
          type="number"
          name="minP"
          placeholder='Min Price'
          min={0}
          max={100000000}
        />
        <input
          type="number"
          name="maxP"
          placeholder='Max price'
          min={0}
          max={100000000}
        />
        <button>
          <Search className='img' />
        </button>
      </form>
    </div>
  )
}

export default SearchBox
