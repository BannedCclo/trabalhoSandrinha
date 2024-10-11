import { useState, useEffect } from 'react'
import {Product} from './components/product';
import AddForm from './components/addForm'
import EditForm from './components/editForm'
import ChartComponent from './components/chart'
import Card from './components/product'
import Desc from './components/description'
import './App.css'
import api from './service'

function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [filtered, setFiltered] = useState<Product[]>([])
  const [addForm, setAddForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [editId, setEditId] = useState(0)
  const [chart, setChart] = useState(false)
  const [showDesc, setShowDesc] = useState(false)
  const [description, setDescription] = useState('')
  const [options, setOptions] = useState<string[]>([])
  const [filter, setFilter] = useState<string>('')

  useEffect(() =>{
    loadProducts()
  }, [])

  useEffect(() =>{
    loadOptions()
  }, [products])

  useEffect(() =>{
    loadFilter()
  }, [products])


  useEffect(() =>{
    loadFilter()
  }, [filter])

  function loadFilter() {
    console.log('teste',products)
      if(filter != ""){
        const filteredProducts = products.filter((product) => product.category === filter)
        setFiltered(filteredProducts)
        
        } else {
          setFiltered(products)
        }
  }

  function loadOptions() {
    const optionArr:string[] = []
    products.forEach((product)=>{
      console.log(product.category, optionArr.some(arrEl => product.category === arrEl))
      if (!optionArr.some(arrEl => product.category === arrEl)) {
        optionArr.push(product.category)
        console.log(optionArr)
      }
    })
    setOptions(optionArr)
  }

  function loadProducts(){
    console.log('Loading products')
    api.get('/products')
    .then(response => {  
       setProducts(response.data)
     })
      
  }

  function closeForm() {
    setAddForm(false)
    setEditForm(false)
    setChart(false)
  }

  function openEditForm(id:number) {
    setEditId(id)
    setEditForm(true)
  }

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
        <button className="button" onClick={()=>setAddForm(true)}>
      Adicionar
      <i className="fa-solid fa-plus"></i>
      </button>
        <h1>Marcelo</h1>
      </header>
      <div id="filter">
      <button id="openChart" onClick={() => setChart(true)}>
        Gráfico
      </button>
      <h1>Filtrar:</h1>
        <select id="filterSelect" value={filter} onChange={((e)=>{
          setFilter(e.target.value)
        })}> 
          <option value="">Nenhum</option> 
          {options.map((option)=>(
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div id="productsContainer">
      {filtered.map((product) => (
          <Card id={product.id} title={product.title} description={product.description} category={product.category} 
          price={product.price} quantity={product.quantity} openDesc={openDescription} openForm={openEditForm} loadProducts={loadProducts}/>
        ))}
      </div>
      {showDesc && (
        <Desc description={description} closeDesc={closeDescription}/>
      )}
      {addForm && (
        <AddForm closeForm={closeForm} loadProducts={loadProducts}/>
      )}
      {editForm && (
        <EditForm closeForm={closeForm} loadProducts={loadProducts} id={editId}/>
      )}
      {chart && (
        <ChartComponent closeChart={closeForm}/>
      )}
    </>
  )
}



export default App
