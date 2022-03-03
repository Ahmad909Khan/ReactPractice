import Header from './Groceries/Header';
import TableList from './Groceries/TableList';
import NewItemForm from './Groceries/NewItemForm';
import { useState } from 'react';

function App() {

  let Groceries = [
    {
      no: 1,
      itemName: "Cabbage",
      cost: 30,
      qty: 2
    },
    {
      no: 2,
      itemName: "Potato",
      cost: 10,
      qty: 5
    }
  ]

  const [grocs, setGrocs] = useState(Groceries)

  const addItem = (item) => {
    item.no = grocs.length + 1;
    setGrocs([...grocs, item]);
  }

  return (
    <div className="">
      <Header />
      <TableList grocs={grocs} />
      <NewItemForm addItem={addItem}/>
    </div>
  );
}

export default App;
