import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Transaction from "./pages/transaction";
import Debts from "./pages/debts";
import Header from "./components/header/header";
import { useState } from "react";

function App() {
  const [debts , setDebts] = useState(JSON.parse(localStorage.getItem("debts")) || [
    {
      name:"Abdulla",
      phone:"+998906878778",
      debt:1200,
      descraption:"Vada-vada!",
    },
    {
      name:"Roxmatulloh",
      phone:"+998906878778",
      debt:1700,
      descraption:"Vada-vada!",
    },
    {
      name:"Minxo",
      phone:"+998906878778",
      debt:2000,
      descraption:"Vada-vada!",
    },
  ])


  const deleteHendle = (name) =>{
    let check = window.confirm("Bu oochirilsinmi ?")
    if (check) {
      let r = debts.filter((el)=>el.name !== name)
      localStorage.setItem("debts" , JSON.stringify(r))
      setDebts(r)
    }
  }

  const [search,setSearch] = useState("")

  const [show, setShow] = useState(false);

  const [debt , setDebt] = useState(
    {
      name:"",
      phone:"",
      debt:"",
      descraption:"",
    }
  )

  const handleDebt = (e) =>{
    setDebt({...debt , [e.target.id]:e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let r = [...debts , debt]
    localStorage.setItem("debts" , JSON.stringify(r))
    setDebts(r)
  }





  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  return (
    <BrowserRouter>
        <Header />
        <Routes >
          <Route path="/" element={<Home debts={debts} />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/debts" element={<Debts debt={debt} deleteHendle={deleteHendle} debts={debts} handleSubmit={handleSubmit} search={search} handleSearch={handleSearch} show={show} handleDebt={handleDebt} handleShow={handleShow} handleClose={handleClose} />} />
        </Routes>
    </BrowserRouter> 
    );
}

export default App;
