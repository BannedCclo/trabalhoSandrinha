import './styles.css'

export interface Form {
    type: number;
    
}

interface FormItemProps {
    
    type: number
}

const Form: React.FC<FormItemProps> = ({ type }) => { 

    return(
        <div id="formContainer">
            <form id="form">
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
                <label>Preço em reais:</label>
                <input type="number" />
                </div>
                <div id="inputItem">
                <label>Quantidade em estoque:</label>
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