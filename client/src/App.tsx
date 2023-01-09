import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './sections/Header'
import HomePage from './pages/Homepage'
import SavedpostPage from './pages/SavedPostPage'
import SearchUserInfo from './pages/SearchUserInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <Header/>
          {/* <HomePage/> */}
          {/* <SavedpostPage/> */}
          <SearchUserInfo/>
    </div>
  )
}

export default App
