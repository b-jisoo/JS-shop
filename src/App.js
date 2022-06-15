import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NotFound from "./NotFound";
import ProductDetailPage from "./Product-detailPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductDetailPage />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
