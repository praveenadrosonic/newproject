import React from 'react'
import './Alert.css'

export default function Alert(props) {
    let alertStatus = '';
    if(props.alert) {
        alertStatus = props.alert.status.charAt(0).toUpperCase() + props.alert.status.slice(1) ;
    }
   
  return (
     props.alert && <div className='alertParent'>
       <div className={`m-0 alert alert-${props.alert.status}`} role="alert">
       {alertStatus} : {props.alert.message} 
      </div>
    </div>
     
  )
}
