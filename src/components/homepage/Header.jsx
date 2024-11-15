import { Search, ShoppingBasket } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className='flex justify-between items-center py-4'>            
            <nav>
                <ul className='flex gap-5 font-bold text-sm'>
                    <li><NavLink to="/">Men</NavLink></li>
                    <li><NavLink to="/">Woman</NavLink></li>
                    <li><NavLink to="/">Kids</NavLink></li>
                    <li><NavLink to="/">New & Featured</NavLink></li>
                    <li><NavLink to="/">Gift</NavLink></li>
                </ul>
            </nav>
            <Link to="/"><img src={`${imgPath}/headerlogo.png`} alt="" /></Link>

            <ul className="flex gap-5  ">
              <li>
                <button>
                  <Search strokeWidth={1} />
                </button>
              </li>
              <li>
                <button>
                  <ShoppingBasket strokeWidth={1} />
                </button>
              </li>
              <li className="font-semibold">
                <Link to="/account">Login</Link>
              </li>
            </ul>
            </div>

        </div>
    </header>
  )
}

export default Header