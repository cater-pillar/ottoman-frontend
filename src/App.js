import {useState, useEffect, useCallback} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from "./components/Navbar"
import InputForm from "./components/InputForm"

function App() {

  const fetchData = useCallback(async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }, [])
    
  const assignData = useCallback((uri, setData) => {
      const getData = async () => {
          const dataFromServer = await fetchData(uri)
          setData(dataFromServer)
        }
        getData()
  }, [fetchData])

  


  const [location, setLocation] = useState([])
  const [member, setMember] = useState([])
  const [occupations, setOccupations] = useState([])
  const [tax, setTax] = useState([])
  const [land, setLand] = useState([])
  const [realEstate, setRealEstate] = useState([])
  const [livestock, setLivestock] = useState([])
  
  useEffect(() => assignData(
    'http://localhost:4000/location', 
    setLocation), [assignData])
  useEffect(() => assignData(
    'http://localhost:4000/member', 
    setMember), [assignData])
  useEffect(() => assignData(
    'http://localhost:4000/occupation', 
    setOccupations), [assignData])
  useEffect(() => assignData(
    'http://localhost:4000/tax', 
    setTax), [assignData])
  useEffect(() => assignData(
    'http://localhost:4000/land', 
    setLand), [assignData])
  useEffect(() => assignData(
    'http://localhost:4000/real_estate', 
    setRealEstate), [assignData])
  useEffect(() => assignData(
    'http://localhost:4000/livestock', 
    setLivestock), [assignData])
  

    
    
  return (
    <Router>
      <Navbar />
      <div className="container alert alert-primary"
           style={{marginTop: '30px', marginBottom: '30px'}}>
             <Route path='/' exact render={(props) => (
               <>
        <h1 className="page-header">Home</h1>
 
              </>
            )}/>
            <Route path='/input-form' render={(props) => (
               <>
        <h1 className="page-header">Add Household</h1>
        <InputForm selectData={[location, 
                                member, 
                                occupations, 
                                tax, 
                                land, 
                                realEstate, 
                                livestock]} />
              </>
            )}/>

          <Route path='/browse-households' exact render={(props) => (
               <>
        <h1 className="page-header">Browse Households</h1>
 
              </>
            )}/>  


<Route path='/last-added' exact render={(props) => (
               <>
        <h1 className="page-header">Last Added</h1>
 
              </>
            )}/> 

<Route path='/household-list' exact render={(props) => (
               <>
        <h1 className="page-header">Household List</h1>
 
              </>
            )}/> 

      </div>
    </Router>
  );
}

export default App;
