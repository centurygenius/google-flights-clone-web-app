import React from 'react'

function Pagination({flightsPerPage, totalFlights, setCurrentPage, currentPage}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFlights / flightsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='page-div'>
      {pageNumbers.map((page, index) => {
        return <button className='page-button' 
                        id={page == currentPage ? 'active' : ''}
                       key={index}
                       onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
      })}
    </div>
  )
}

export default Pagination;