import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styles from '../Navigation/styles';
import Logo from '../Pages/Logo';
import Category from './Category';

const Navigation = () => {
    return (
      <div className='flex'>
        <div className='w-full flex  justify-around items-center'><Logo /></div>
        <div className={styles.Nav}>
          <Link to="/">
            Home
          </Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Amenities">
          Amenities
          </Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/ContactUs"> 
          Contact Us 
          </Link>&nbsp;&nbsp;&nbsp;&nbsp; 
        </div>
        <div className='w-full flex justify-around items-center'><Category /></div>
     </div>
 
    )   
}
export default Navigation;