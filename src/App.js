import React from 'react'
import './styles/main.scss'
// import axios from 'axios'
import { getArt } from '../src/components/lib/api.js'

function App() {

  const [art, setArt] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getArt()
        setArt(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(art)



  return (
    <div className="App">
      {art ? <div>{art.objectID}</div> : <div>Art</div>}

    </div>
  );
}

export default App;
