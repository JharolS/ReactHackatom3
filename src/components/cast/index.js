import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    const {img1, img2, name, characters} = props
    return (
        <div className="card">
        <img style={{width: 150, height: 80}} alt ="" src={img1}/>
        <img style={{width: 150, height: 80}} alt ="" src={img2}/>
        <p>{name}</p>
        <p2>in {characters}</p2>
        </div>
    )
}
Card.propTypes = {
    name: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
}
export default Card;