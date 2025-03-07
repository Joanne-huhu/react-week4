import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const defaultModalState = {
  imageUrl: "",
  title: "",
  category: "",
  unit: "",
  origin_price: "",
  price: "",
  description: "",
  content: "",
  is_enabled: 0,
  imagesUrl: [""]
};

function App() {
  const [isAuth, setIsAuth] = useState(false);
  

// const [modalMode,setModalMode]= useState(null);


  return (
    <>
      {isAuth ? <ProductPage setIsAuth={setIsAuth} /> : <LoginPage setIsAuth={setIsAuth}/>}
     
    </>
  );
}

export default App;