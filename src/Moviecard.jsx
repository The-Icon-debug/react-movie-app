import React from 'react'

const Moviecard = ({year,poster,title,type}) => {
  return (
    <div className='movie'>
        <div>
           <p>{year}</p>
        </div>
        <div>
           <img src={poster} alt={title}/>
        </div>
        <div>
           <span>{type}</span>
           <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Moviecard