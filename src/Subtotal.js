import React from 'react';
import CurrencyFormat from "react-currency-format";
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBaskeTotal } from './reducer';

function Subtotal() {

    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value)=>(
                    <>
                    <p>
                    Subtotal ({basket.length} items):<strong>{` ${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> this order contain a gift
                    </small>
                    </>
                )}

                decimalScale ={2}
                value={getBaskeTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
