import Navbar from "./Navbar";
import Banner from "./Banner";
import { useState } from 'react';

const Header = () => {
  const [addCredit,SetAddCredit] = useState(0)

  const handleAddCredit = () => {
    SetAddCredit(addCredit + 10000000);
  }

  return (
    <header className='w-10/12 sm:w-10/12 lg:w-4/5 mx-auto mt-12 space-y-12'>
      <Navbar addCredit={addCredit}></Navbar>
      <Banner handleAddCredit={handleAddCredit}></Banner>
         
    </header>
  );
};

export default Header;