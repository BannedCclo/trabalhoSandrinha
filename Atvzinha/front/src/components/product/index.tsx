import './styles.css'

export interface Card {
    title: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
    
}

interface CardItemProps {
    title: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
}

const Card: React.FC<CardItemProps> = ({ title, description, category, price, quantity }) => { 


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
            <p>Estoque: {quantity}</p>
            <p id='description'>Descrição...</p>
            </div>
            </div>
        </div>
        </>
    )

}

export default Card;