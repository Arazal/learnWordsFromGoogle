import React from 'react'


const Pagination = ({ wordsPerPage, totalWords, paginate }) => {
    const pageNumbers = []

    for( let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
       
            <nav>
                <ul className='pagination'>
                {pageNumbers.map(number => (
                 <li className='page-item' key={number}>
                     <a onClick={()=> paginate(number) } href='!#' className='page-link'>{number}
                     </a>
                 </li>   
                )
                )}   
                </ul>  
            </nav>
      
    )
}

export default Pagination


