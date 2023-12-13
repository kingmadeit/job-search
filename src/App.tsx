import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home, JobDetails} from './pages/index'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path='job-details' element={<JobDetails />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
