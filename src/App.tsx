import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home, JobDetails, Four04} from './pages/index'

function App() {

  return (
    <Router>
      <Routes>
          <Route index  element={<Home />} />
          <Route path='job-details' element={<JobDetails />} />
          <Route element={<Four04 />} />
      </Routes>
  </Router>
  )
}

export default App
