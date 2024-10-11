import './styles.css'
import {Bar} from 'react-chartjs-2'
import {useState, useEffect} from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend} from 'chart.js'
import api from '../../service'
import {Product} from '../../components/product'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface ChartItemProps {
    closeChart: ()=>void
}

const ChartComponent: React.FC<ChartItemProps> = ({ closeChart }) => { 

    const [products, setProducts] = useState<Product[]>()
    const [titles, setTitles] = useState<string[]>()
    const [quants, setQuants] = useState<number[]>()

    useEffect(()=>{
        if(products != undefined){
            const titlesArr = products.map((product)=>{
                return product.title
            })
            const quantsArr = products.map((product)=>{
                return product.quantity
            })
            setTitles(titlesArr)
            setQuants(quantsArr)
            console.log(titles)
            console.log(quants)
        }
        
    }, [products])

    useEffect(()=>{
        api.get('products').then((response)=>{
            setProducts(response.data)
        })
    }, [])

    

    const chartData = {
        labels: titles,
        datasets: [
            {
                label: "Estoque",
                data: quants,
                backgroundColor: "rgb(0, 107, 179)",
            }
        ]
    }

    const options = {}

    return(
        <div id='chartPage'>
            <div id='chartContainer'>
            <div id='closeChart' onClick={closeChart}>
            <i className="fa-solid fa-x"></i>
            </div>
            <Bar options={options} data={chartData}/>
            </div>
        </div>
    )
}

export default ChartComponent