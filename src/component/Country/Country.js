import React from 'react';

const Country = (props) => {
    const {name, population, capital, flag}=props.country;
    const flagStyle={height: '100px'};
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={{border: '1px solid black', backgroundColor:'goldenrod', padding: '10px', margin: '10px', borderRadius: '20px'}}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h5>Capital: {capital}</h5>
            <h5>Population: {population} </h5>
            <button onClick={()=>handleAddCountry(props.country)}>ADD COUNTRY</button>
        </div>
    );
};

export default Country;