import './styles.css'
import api from '../../service'

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
}

interface CardItemProps {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    openDesc: (description:string)=>void
    openForm: (id:number)=>void
    loadProducts: ()=>void
}

const Card: React.FC<CardItemProps> = ({ id, title, description, category, price, quantity, openDesc, openForm, loadProducts }) => { 

    function deleteProduct() {
        console.log('deletado', id)
        api.delete(`/products/${id}`).then(()=>{
            loadProducts()
        })
        
    }

    return (
        <>
        <div id="cardContainer">
            <h1>{title}</h1>
            <div className='secondary'>
            <h2>{category}</h2>
            <h3>R${price}</h3>
            </div>
            

            <div id="card">
            <h1>{title}</h1>
            <div className='secondary'>
            <div id='details'>
            <p>Estoque: {quantity}</p>
            <p id='description' onClick={() => openDesc(description)}>Descrição...</p>
            </div>
            <div id='buttons'>
                <div id='edit' onClick={()=> openForm(id)}>
                <button>
                <i className="fa-solid fa-pencil"></i>
                </button>
                </div>
                <div id='delete' onClick={()=> deleteProduct()}>
                <button>
                <i className="fa-solid fa-trash"></i>
                </button>
                </div>   
            </div>
            </div>
            </div>
        </div>
        </>
    )

}

export default Card;