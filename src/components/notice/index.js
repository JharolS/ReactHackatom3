import React from "react";
import PropTypes from "prop-types";
import './index.css';

const Notice = (props) => {
    const {img,text,day,corp} = props;
    return (
        <div className="notice">
            <div className="inf">
            <img style={{width: 150, height: 80}} alt ="" src={img}/>
            <k>{text}</k>
            <k1>{day}</k1>
            </div>
            <div className='coment'>
            <k2>{corp}</k2>
            </div>
        </div>
    )
}
Notice.propTypes = {
    text: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    corp: PropTypes.string.isRequired,
}
export default Notice;