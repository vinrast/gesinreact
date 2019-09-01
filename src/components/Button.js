import React from 'react'
import { Link } from 'react-router-dom'

var url_btn = 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'

const handleShow =(props)=>(
  // event.preventDefault()
  console.log({props})
)
const Button = ()=>(
  <div className="row">
    <div className="mx-auto pt-3">
      <Link to="/exercise/new" onClick={ handleShow } >
        <img src={ url_btn } width="80" height="80"/>
      </Link>
    </div>
  </div>
)


export default Button
