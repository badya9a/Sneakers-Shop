import React from 'react';

const Drawer = () => {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className='d-flex justify-between mb-30'>
          Cart <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{backgroundImage: 'url(/img/1.jpg)'}}
              className="cartItemImg"></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 uah</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{backgroundImage: 'url(/img/1.jpg)'}}
              className="cartItemImg"></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 uah</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{backgroundImage: 'url(/img/2.jpg)'}}
              className="cartItemImg"></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 uah</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
          </div>
        </div>
        <div className='cartTotalBlock'>
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>21 498 uah</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 uah</b>
            </li>
          </ul>
          <button className='greenButton'>Make the order <img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;