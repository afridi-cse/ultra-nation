import React from 'react';

const Cart = (props) => {
    const population = props.selectedCounty.reduce((total, items) => total + items.population, 0)
    return (
        <div>
            <h4>This is Cart {props.selectedCounty.length} </h4>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Cart;