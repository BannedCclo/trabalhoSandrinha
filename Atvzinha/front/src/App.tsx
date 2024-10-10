import { useState, useEffect } from 'react'
import Form from './components/form'
import Card from './components/product'
import Desc from './components/description'
import './App.css'
import api from './service'

function App() {

  const [showForm, setShowForm] = useState(false)
  const [showDesc, setShowDesc] = useState(false)
  const [type, setType] = useState(1)
  const [description, setDescription] = useState('')

  function testApi() {
      api.get('/test')
  }

  function openDescription(description:string) {
    setShowDesc(true)
    setDescription(description)
  }

  function closeDescription() {
    setShowDesc(false)
  }

  return (
    <>
      <header>
        <h1>Products</h1>
        <button className="button" onClick={testApi}>
      Adicionar
      <i className="fa-solid fa-plus"></i>
      </button>
        <h1>Marcelo</h1>
      </header>
      <div id="productsContainer">
      <Card id={1} title='Pão' description='pão quentinho teste' category='alimentos' price={3.99} quantity={4} openDesc={openDescription}/>
      <Card id={2} title='Pão' description='pão quentinho' category='alimentos' price={3.99} quantity={4} openDesc={openDescription}/>
      <Card id={3} title='Pão' description='pal quentinho teste' category='alimentos' price={3.99} quantity={4} openDesc={openDescription}/>
      </div>
      {showDesc && (
        <Desc description={description} closeDesc={closeDescription}/>
      )}
      <Form type={1}/>
      
    </>
  )
}



export default App
