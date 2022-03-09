import { useState } from 'react';
import GroceryList from '../Components/GroceryList';
import ChangeItemsForm from './forms/ChangeItemsForm';

function GroceryApp() {
  // dummy array of objects
  let Groceries = [
    {
      id: 1,
      itemName: "Cabbage",
      cost: 30,
      quantity: 2
    },
    {
      id: 2,
      itemName: "Potato",
      cost: 10,
      quantity: 5
    }
  ]
  // passing dummy array into a state
  const [groceries, setGroceries] = useState(Groceries);


  const initialFormState = {
    id: null,
    itemName: "",
    cost: null,
    quantity: null
  }

  // state for 'add item'/ 'edit item' form
  const [editing, setEditing] = useState(false);

  // state for item selected to edit
  const [currentItem, setCurrentItem] = useState(initialFormState);

  // function to add an item into grocery list
  const addItem = (item) => {
    item.id = groceries.length + 1;
    setGroceries([...groceries, item]);
  }
  // function to remove item from grocery list
  const removeItem = (id) => {
    setGroceries(groceries.filter((item) => item.id !== id))
  }

  // function to switch edit state on and pass item to be edited
  const editItem = (item) => {
    setEditing(true);

    setCurrentItem({
      id: item.id,
      itemName: item.itemName,
      cost: item.cost,
      quantity: item.quantity
    });
  }

  const updateItem = (id, updatedItem) => {
    setEditing(false)

    setGroceries(groceries.map((item) => (
      item.id === id ? updatedItem : item
      )))
  }

  return (
    <div className="">
      <GroceryList
        groceries={groceries}
        editing={editing}
        editItem={editItem}
        removeItem={removeItem} />

      <ChangeItemsForm 
        addItem={addItem}
        updateItem={updateItem}
        editing={editing}
        setEditing={setEditing}
        currentItem={currentItem} />
    </div>
  );
}

export default GroceryApp;