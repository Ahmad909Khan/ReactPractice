import { useState } from 'react';
import Header from '../screens/Header';
import GroceryList from '../screens/GroceryList';
import NewItemForm from '../screens/forms/NewItemForm';
import UpdateItemForm from '../screens/forms/UpdateItemForm';

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
    console.log(item);

    setCurrentItem({
      id: item.id,
      itemName: item.itemName,
      cost: item.cost,
      quantity: item.quantity
    });
  }

  const updateItem = (id, updatedItem) => {
    setEditing(false)

    setGroceries(groceries.map((item) => (item.id === id ? updatedItem : item)))
  }

  return (
    <div className="">
      <Header />
      <GroceryList groceries={groceries} editItem={editItem} removeItem={removeItem} />
      <div>
        {editing ? (
          <UpdateItemForm
            updateItem={updateItem}
            setEditing={setEditing}
            currentItem={currentItem} />
        ) : (
          <NewItemForm addItem={addItem} />
        )}
      </div>
    </div>
  );
}

export default GroceryApp;