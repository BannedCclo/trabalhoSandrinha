import './styles.css'

interface CardItemProps {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    openDesc: (description:string)=>void
}

const Card: React.FC<CardItemProps> = ({ title, description, category, price, quantity, openDesc }) => { 


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
                <div id='edit'>
                <button>
                <i className="fa-solid fa-pencil"></i>
                </button>
                </div>
                <div id='delete'>
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