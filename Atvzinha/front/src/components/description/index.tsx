import './styles.css'

interface DescItemProps {
    description: string
    closeDesc: ()=>void
}

const Desc: React.FC<DescItemProps> = ({ description, closeDesc }) => { 

    return(
        <>
        <div id="descContainer">
            
            <div id="fullDesc">
            <button id='out' onClick={closeDesc}>
            <i className="fa-solid fa-x"></i>
            </button>
                <p>{description}</p>
            </div>
        </div>
        </>
    )

}

export default Desc