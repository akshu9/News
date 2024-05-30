
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { useState } from 'react'


function App() {
  const[progress,setProgress]=useState(1)
  const apiKey=import.meta.env.VITE_REACT_NEWSAPI_KEY
  //const apiKey = import.meta.env.VITE_REACT_APP_NEWSAPI_KEY
  console.log('API Key:', apiKey);
  
 
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}/>
      <Routes>
     <Route exact path='/' element={<News setProgress={setProgress}  key="general" apiKey={apiKey}pageSize={6} country='in' category="general" lang="en"/>}></Route>
     <Route exact path='/sports' element={<News setProgress={setProgress}  key="sports" apiKey={apiKey} pageSize={6} country='in' category="sports" lang="en"/>}></Route>
     <Route exact path='/technology' element={<News setProgress={setProgress}  key="technology" apiKey={apiKey} pageSize={6} country='in' category="technology" lang="en"/>}></Route>
     <Route exact path='/business' element={<News setProgress={setProgress}  key="business" apiKey={apiKey} pageSize={6} country='in' category="business" lang="en"/>}></Route>
     <Route exact path='/entertainment' element={<News setProgress={setProgress}  key="entertainment" apiKey={apiKey} pageSize={6} country='in' category="entertainment" lang="en"/>}></Route>
     <Route exact path='/health' element={<News setProgress={setProgress}  key="health"  apiKey={apiKey} pageSize={6} country='in' category="health" lang="en"/>}></Route>
     <Route exact path='/science' element={<News setProgress={setProgress}  key="science" apiKey={apiKey} pageSize={6} country='in' category="science" lang="en"/>}></Route>
     
     
      </Routes>
      </Router>
    </>
  )
}

export default App
