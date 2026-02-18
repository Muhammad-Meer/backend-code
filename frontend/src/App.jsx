import React from 'react'
import Createpost from "./pages/createpost";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/createpost" element={<Createpost />} />
      </Routes>
    </Router>
  )
}

export default App
