import React from 'react';

const Card = () => {
  return (
    <div className="card d-flex flex-column">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked"/>
      </div>
      <img width={133} height={112} src="/img/1.jpg" alt="Sneakers"/>
      <h5>Man's Sneakers Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className=' d-flex flex-column'>
          <span>Price:</span>
          <b>12 999 uah</b>
        </div>
        <button className='button'>
          <img width={11} height={11} src="/img/plus.svg" alt=""/>
        </button>
      </div>
    </div>
  );
};

export default Card;