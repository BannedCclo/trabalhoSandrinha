import { useState } from 'react'
import Form from './components/form'
import Card from './components/product'
import './App.css'
import api from './service'

function App() {

  const [showForm, setShowForm] = useState(false)
  const [type, setType] = useState(1)

  function testApi() {
      api.get('/test')
  }

  return (
    <>
      <header>
        <h1>Products</h1>
        <button className="button" onClick={testApi}>
      Adicionar
      <i className="fa-solid fa-plus"></i>
      </button>
        <h1>L. Ortiz</h1>
      </header>
      <div id="productsContainer">
      <Card title='Pão' description='pão quentinho teste teste aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' category='alimentos' price={3.99} quantity={4} />
      <Card title='Pão' description='pão quentinho' category='alimentos' price={3.99} quantity={4} />
      <Card title='Pão' description='pão quentinho' category='alimentos' price={3.99} quantity={4} />
      <Card title='Pão' description='pão quentinho' category='alimentos' price={3.99} quantity={4} />
      <Card title='Pão' description='pão quentinho' category='alimentos' price={3.99} quantity={4} />
      <Card title='Pão' description='pão quentinho' category='alimentos' price={3.99} quantity={4} />
      </div>
      
      {/* <Form type={1}/> */}
    </>
  )
}



export default App
