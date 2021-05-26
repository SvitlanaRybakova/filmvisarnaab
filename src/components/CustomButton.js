import React from 'react'
import styles from '../css/CustomButton.css'

export default function CustomButton({text}) {

  const defineClass = (text) => {
    
    if( text==="Boka" ){return "bookButton"}
    if( text==="Info" ){return "infoButton"}
    if( text==="Avboka"){return "cancelButton"}
    if( text==="Logga in"){return "loginButton"}
    if( text==="Registrera"){return "signInButton"}
    if( text=== "OK"){return "okButton"}
    if( text==="Boka biljetter"){return "bookTicketButton"}
    if( text==="Trailer"){return "trailerButton"}
  }
  return (
    <div className={styles.wrapper}>
    <div role="button" className={defineClass(text)}>{text}</div>
    </div>
  )
}
