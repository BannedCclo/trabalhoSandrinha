import './styles.css'
import api from '../../service'

interface FormItemProps {
    
    type: number
}

const Form: React.FC<FormItemProps> = ({ type }) => { 

    function addProduct() {
        const title = document.querySelectorAll('#inputItem>input')[0].value
        const description = document.querySelectorAll('#inputItem>input')[1].value
        const category = document.querySelectorAll('#inputItem>input')[2].value
        const price = document.querySelectorAll('#inputItem>input')[3].value
        const quantity = document.querySelectorAll('#inputItem>input')[4].value
        if(title!="" && description!="" && category!="" && price!="" && quantity!="") {

            api.post('test')
            console.log(title, description, category, price, quantity)
        }else{
            alert('Todos os valores devem ser preenchidos!')
        }
        

    }

    return(
        <div id="formContainer">
            <form id="form" onSubmit={(e) => {
                e.preventDefault();  
                addProduct()}}>
                <div id="inputItem">
                <label>Nome:</label>
                <input type="text" />
                </div>
                <div id="inputItem">
                <label>Descrição:</label>
                <input type="text" />
                </div>
                <div id="inputItem">
                <label>Categoria:</label>
                <input type="text" />
                </div>
                <div id="inputItem">
                <label>Preço:</label>
                <input type="number" step='0.01'/>
                </div>
                <div id="inputItem">
                <label>Estoque:</label>
                <input type="number" />
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

export default Form;