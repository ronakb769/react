
import './App.css'
import Card from './components/Card'

function App() {
//const [count, setCount] = useState(0);


  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

     <Card username="Rounak" btnText="click me"/>
     <Card username="Divya" btnText="visit me"/>
     
    </>
  )
}

export default App
