import './styles.css'
import api from '../../service'
import {useState, useEffect} from 'react'
import {Product} from '../product'

interface DescItemProps {
    id:number
    closeForm: ()=>void,
    loadProducts: ()=>void
}

const EditForm: React.FC<DescItemProps> = ({ closeForm, id, loadProducts }) => { 

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [editingProduct, setEditingProduct] = useState<Product>()

    useEffect(()=>{
        api.get('/products').then((response)=>{
            setEditingProduct(response.data.find((product: Product) => product.id === id))
            setTitle(response.data.find((product: Product) => product.id === id)?.title)
            setDescription(response.data.find((product: Product) => product.id === id)?.description)
            setCategory(response.data.find((product: Product) => product.id === id)?.category)
            setPrice(response.data.find((product: Product) => product.id === id)?.price.toString())
            setQuantity(response.data.find((product: Product) => product.id === id)?.quantity.toString())
        })
        
    }, [])

    function editProduct(){

        if(title!="" && description!="" && category!="" && price!="" && quantity!="") {

            try{
                api.put(`/products/${id}`, {
                    title: title,
                    description: description,
                    category: category,
                    price: price,
                    quantity: quantity,
                }).then(()=>{
                    closeForm()
                    loadProducts()
                })
                api.get('/products')
            } catch(err) {
                console.log(err)
            }
            
        }else{
            alert('Todos os valores devem ser preenchidos!')
        }
    }

    return(
        <div id="formContainer">
            <form id="form" onSubmit={(e) => {
                e.preventDefault();  
                editProduct()}}>
                <div id='closeForm' onClick={closeForm}>
                <i className="fa-solid fa-x"></i>
                </div>
                <div id="inputItem">
                <label>Nome:</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div id="inputItem">
                <label>Descrição:</label>
                <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <div id="inputItem">
                <label>Categoria:</label>
                <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                </div>
                <div id="inputItem">
                <label>Preço:</label>
                <input type="number" step='0.01' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div id="inputItem">
                <label>Estoque:</label>
                <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
                </div>
                <div id="btnContainer">
                <button type="submit" id='submitBtn'>
                    Enviar
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm;