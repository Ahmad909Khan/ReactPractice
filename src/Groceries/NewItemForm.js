import { useRef } from 'react';

function NewItemForm(props) {
    let itemNameRef = useRef();
    let itemCostRef = useRef();
    let itemQtyRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        let itemName = itemNameRef.current.value;
        let itemCost = itemCostRef.current.value;
        let itemQty = itemQtyRef.current.value;

        let newGroceryItem = {
            itemName: itemName,
            cost: itemCost,
            qty: itemQty
        }
        props.addItem(newGroceryItem);
        itemName = '';
        itemCost = '';
        itemQty = '';
    }
    return (
        <form className="col-6 mx-auto m-4" onSubmit={submitHandler}>
            <div>
                <label htmlFor="itemName">Item Name: </label>
                <input id="itemName" className="form-control" type="text" ref={itemNameRef} required />
            </div>
            <div>
                <label htmlFor="itemCost">Cost per Item: </label>
                <input id="itemCost" className="form-control" type="number" ref={itemCostRef} required />
            </div>
            <div>
                <label htmlFor="itemQty">Number of Items: </label>
                <input id="itemQty" className="form-control" type="number" ref={itemQtyRef} required />
            </div>
            <button type="submit" className="btn btn-success form-control mt-4">Add Item</button>
        </form>
    )
}

export default NewItemForm