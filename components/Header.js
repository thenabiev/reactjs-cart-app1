import React from "react";


export default function Header({countCartItems}){

    return(
        <header className="row">
            <div>
                <h1>
                    <a href="#">React Shopping Cart</a>
                </h1>
            </div>
            <div className="nav-links">
                <a href="#/cart">Cart 
                {countCartItems?(
                    <span 
                    className="cartBadge">{countCartItems}</span>
                ):false}
                </a>
                <a href="#/signin">Sign In</a>
            </div>
            
        </header>
    )
}



