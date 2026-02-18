import React from 'react'
import Createpost from "./pages/createpost";
import Feed from "./pages/feed";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/createpost" element={<Createpost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
