import { useRef } from 'react';

function NewItemForm(props) {
    let itemNameRef = useRef();
    let itemCostRef = useRef();
    let itemQuantityRef = useRef();

    function newItemSubmitHandler(event) {
        event.preventDefault();

        let itemName = itemNameRef.current.value;
        let itemCost = itemCostRef.current.value;
        let itemQuantity = itemQuantityRef.current.value;

        let newGroceryItem = {
            itemName: itemName,
            cost: itemCost,
            quantity: itemQuantity
        }
        props.addItem(newGroceryItem);

        itemNameRef.current.value='';
        itemCostRef.current.value='';
        itemQuantityRef.current.value='';
    }
    return (
        <form className="col-6 mx-auto mt-3" onSubmit={newItemSubmitHandler}>
            <div>
                <label htmlFor="itemName">Item Name: </label>
                <input id="itemName" className="form-control" type="text" ref={itemNameRef} required />
            </div>
            <div>
                <label htmlFor="itemCost">Cost per Item: </label>
                <input id="itemCost" className="form-control" type="text" pattern='^[0-9]+$' ref={itemCostRef} required />
            </div>
            <div>
                <label htmlFor="itemQty">Number of Items: </label>
                <input id="itemQty" className="form-control" type="text" pattern='^[0-9]+$' ref={itemQuantityRef} required />
            </div>
            <button type="submit" className="btn btn-success form-control mt-4">Add Item</button>
        </form>
    )
}

export default NewItemForm