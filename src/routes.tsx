import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home'

type Props = {}

const AppRoutes = (props: Props) => {
  return (
    <BrowserRouter basename="/med-study">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes