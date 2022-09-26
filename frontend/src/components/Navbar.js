import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Navbar = () => {
  const auth=localStorage.getItem('users');
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      {/* <ul className='navbar'>
        <li><Link to='/'>Product</Link></li>
        <li><Link to='/add'>Add Products</Link></li>
        <li><Link to='/update'>Update Products</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
         {
          auth ? <li><Link onClick={logout} to='/signup'>Logout</Link> </li>:
          <>
           <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </>
         }
      </ul> */}
      {auth ? <ul className='navbar'>
        <img alt="logo" className='logo'
        src='https://banner2.cleanpng.com/20180805/ucs/kisspng-website-development-e-commerce-clip-art-business-m-obstetrics-5b66aeb7414b01.6261493115334560552675.jpg'/>
        <li><Link to='/'>Product</Link></li>
        <li><Link to='/add'>Add Products</Link></li>
        <li><Link to='/update'>Update Products</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link> </li>
       </ul> :
            <ul className='navbar nav-right'>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
     }
    </div>
  )

}

export default Navbar;
