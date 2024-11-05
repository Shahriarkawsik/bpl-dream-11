import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Main from './components/main/Main'
// import PropTypes from 'prop-types';
import { Alert } from "./components/alerts/Alert";
import { useState } from 'react';


function App() {

  const [addCredit,SetAddCredit] = useState(0)

  const handleAddCredit = () => {
    SetAddCredit(addCredit + 10000000);
    Alert(true, "Coins added!");      
  }
  const handleBuyPlayer = (price) => SetAddCredit((addCredit) => addCredit - price); //এটা choose player থেকে আসবে ।
  return (
    <>
      <Header 
      addCredit={addCredit}
      handleAddCredit={handleAddCredit}
      ></Header>
      <Main 
      addCredit={addCredit}
      handleBuyPlayer={handleBuyPlayer}
      ></Main>      
      <Footer></Footer>
    </>
  )
}

export default App
