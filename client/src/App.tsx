import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './sections/Header'
import HomePage from './pages/Homepage'
import SavedpostPage from './pages/SavedPostPage'
import SearchUserInfo from './pages/SearchUserInfo'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <Header/>
          <Routes>
              <Route path='/' element={<HomePage/> } />
              <Route path='/savedtweet' element={<SavedpostPage/> } />
              <Route path='/lookupuser' element={<SearchUserInfo/>} />

          </Routes>
    
    
          
    </div>
  )
}

export default App
