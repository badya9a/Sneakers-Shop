import React from 'react';

const Header = () => {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <img width={40} height={40} src="/img/logo.png" alt=""/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className='opacity-5'>The best sneakers shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className='align-center'>
          <img src="/img/car.svg" alt=""/>
          <span>1205 uah</span>
        </li>
        <li className='ml-15'><img src="/img/like.svg" alt=""/></li>
        <li><img src="/img/user.svg" alt=""/></li>
      </ul>
    </header>
  );
};

export default Header;