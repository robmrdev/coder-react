import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import "./Loading.css"

function Loading() {
  return (
    <>
    <div className='loadingContainer'>
        <img src="../img/loading.gif" alt="" className='loading' centered="true" />
    </div>
    </>
  )
}
export default Loading