import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} AfriLyric{' '}
      <Link to="/contact">Contact us</Link>{' '}
      <Link to="/Advert">Advertize here</Link>{' '}
      <Link to="/Piracy_policy">Piracy policy</Link>{' '}
      <Link to="/about">About us</Link>
    </footer>
  );
};
