import GroceryItem from "./GroceryItem";

function GroceryList(props) {
   
    return (
        <tbody>
            {props.items.map((item) => (
                <GroceryItem
                    key={item.no}
                    id={item.no}
                    name={item.itemName}
                    cost={item.cost}
                    qty={item.qty}
                />
            ))}
        </tbody>
    )
}

export default GroceryList;