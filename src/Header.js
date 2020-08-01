import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"; 
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    console.log(basket);

    return ( 
    <nav className="header"> 
            {/* logo at left side */}
            <Link to="/">
                <img 
                className="header__logo" 
                src="data:image/png;base64,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"
                alt=""
                />
            </Link>
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link" >
                    <div className="header__option" >
                        <span className="header__optionLineone" >hello</span>
                        <span className="header__optionLinetwo">Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link" >
                    <div className="header__option" >
                        <span className="header__optionLineone">Returns</span>
                        <span className="header__optionLinetwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link" >
                    <div className="header__option" >
                        <span className="header__optionLineone">Your</span>
                        <span className="header__optionLinetwo">Prime</span>
                    </div>
                </Link>
            </div>

            {/* bashket */}
            <Link to="/checkout" className="header__link" >
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
    <span className="header__optionLinetwo header__basketCount" >{basket?.length}</span>
                </div>
            </Link>
        </nav>
    );
}

export default Header