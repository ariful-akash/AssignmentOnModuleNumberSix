import React, { useState } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';

import Content from './component/Content';

const App = () => {

const [items, setItems] = useState([]);

function handleAddItems(item){
  setItems((items)=>[...items,item]);
}

  return (
    <div>
      <Header title = "Creating a Simple React Application" />
      <Content onAddItem = {handleAddItems} items = {items}/>
      <Footer />
    </div>
  );
};

export default App;