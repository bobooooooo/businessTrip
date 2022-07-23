import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Button(props) {

  const [first, setfirst] = useState('test');
  const type = props.btnType || 'btn-light';
  const btnRawClasses = props.btnRawClasses || '';
  function handleClick(){
    console.log(setfirst);
  }  
  return (
        <button onClick={handleClick} className={ 'btn ' + type + ' '+ btnRawClasses}>Button</button>
  )
}

Button.propTypes = {}

export default Button
