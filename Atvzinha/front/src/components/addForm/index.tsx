import './styles.css'
import api from '../../service'
import {useState} from 'react'
import {Product} from '../product'


interface DescItemProps {
    closeForm: ()=>void
    loadProducts: ()=>void
}

const AddForm: React.FC<DescItemProps> = ({ closeForm, loadProducts }) => { 

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    function addProduct() {
        if(title!="" && description!="" && category!="" && price!="" && quantity!="") {

            
            try{
                api.post('/products', {
                    title: title,
                    description: description,
                    category: category,
                    price: price,
                    quantity: quantity,
                }).then(()=>{
                    loadProducts()
                    closeForm()
                })
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
                addProduct()}}>
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

export default AddForm;