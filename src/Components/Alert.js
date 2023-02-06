import React from 'react'

function Alert(props) {
   {/*const capitalFirst=(word)=>{
        let lower = word.tostring();
         
        return lower[0].toUpperCase() +
   lower.slice(1);*/}
        
    
  return (
  props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
       <strong>{props.alert.typ}</strong> {props.alert.msg}
  </div>
  )
}

export default Alert
