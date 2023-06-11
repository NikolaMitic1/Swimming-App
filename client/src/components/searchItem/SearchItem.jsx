import React from 'react'
import './searchItem.scss'

const SearchItem = (item) => {
  return (
    <div className='searchItem'>
        <img src="../../../public/1200px-Baku_Aquatic_Palace,_Olympic_Pool.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1>item.name</h1>
            <span className='siDistance'>{item.gender} {item.distance} {item.style}</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className="siSubtitle">{item.location}</span>
            <span className="siFatures">1 Swimming pool •  10 bathroom</span>
            <span className="siPrijava">Free prijava</span>
            <span className='siCancel'>Mozete odustati u bilo koje vreme</span>
        </div>
        <div className="siDetails">
            <button>Prijavi se</button>
        </div>
    </div>
  )
}

export default SearchItem