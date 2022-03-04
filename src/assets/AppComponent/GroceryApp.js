import { useState } from 'react';
import Header from '../screens/Header';
import GroceryList from '../screens/GroceryList';
import NewItemForm from '../screens/NewItemForm';

function GroceryApp() {

  let Groceries = [
    {
      no: 1,
      itemName: "Cabbage",
      cost: 30,
      quantity: 2
    },
    {
      no: 2,
      itemName: "Potato",
      cost: 10,
      quantity: 5
    }
  ]

  const [groceries, setGroceries] = useState(Groceries)

  const addItem = (item) => {
    item.no = groceries.length + 1;
    setGroceries([...groceries, item]);
  }

  return (
    <div className="">
      <Header />
      <GroceryList groceries={groceries} />
      <NewItemForm addItem={addItem}/>
    </div>
  );
}

export default GroceryApp;