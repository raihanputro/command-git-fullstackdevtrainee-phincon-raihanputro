import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import Home from "./pages/home/Home"
import Detail from "./pages/detail/Detail"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:name" element={<Detail />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
