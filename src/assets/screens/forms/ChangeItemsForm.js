import { useRef, useState, useEffect } from 'react';

function ChangeItemsForm(props) {
    let itemNameRef = useRef();
    let itemCostRef = useRef();
    let itemQuantityRef = useRef();

    const [item, setItem] = useState(props.currentItem);

    function submitHandler(event) {
        event.preventDefault();

        let itemName = itemNameRef.current.value;
        let itemCost = itemCostRef.current.value;
        let itemQuantity = itemQuantityRef.current.value;

        // if statement: to edit current list item
        if (props.editing) {

            let updatedItem = {
                id: props.currentItem.id,
                itemName: itemName,
                cost: itemCost,
                quantity: itemQuantity
            }
            props.updateItem(updatedItem.id, updatedItem);
        }

        //else statement: to add new item to the list
        else {
            let newGroceryItem = {
                itemName: itemName,
                cost: itemCost,
                quantity: itemQuantity
            }


            props.addItem(newGroceryItem);
        }
        
        // To empty input fields after submit
        itemNameRef.current.value = '';
        itemCostRef.current.value = '';
        itemQuantityRef.current.value = '';
    }

    //Setting values of selected item in input fields
    useEffect(() => {
        itemNameRef.current.value = item.itemName;
        itemCostRef.current.value = item.cost;
        itemQuantityRef.current.value = item.quantity;
    }, [item])

    // Adding new item to Grocery list
    useEffect(() => {
        setItem(props.currentItem)
    }, [props])

    return (
        <form className="col-6 mx-auto mt-3" onSubmit={submitHandler}>
            <div>
                <label htmlFor="itemName">Item Name: </label>
                <input
                    id="itemName"
                    className="form-control"
                    type="text"
                    ref={itemNameRef}
                    required />
            </div>
            <div>
                <label htmlFor="itemCost">Cost per Item: </label>
                <input
                    id="itemCost"
                    className="form-control"
                    type="text"
                    pattern='^[0-9]+$'
                    ref={itemCostRef}
                    required />
            </div>
            <div>
                <label htmlFor="itemQty">Number of Items: </label>
                <input
                    id="itemQty"
                    className="form-control"
                    type="text"
                    pattern='^[0-9]+$'
                    ref={itemQuantityRef}
                    required />
            </div>
            {props.editing ? (
                <div>
                    <button type="submit"
                        className="btn btn-primary mt-3 form-control"
                    >
                        Update Item
                    </button>
                    <button
                        onClick={() => props.setEditing(false)}
                        className="btn btn-secondary mt-2 form-control"
                    >
                        Cancel
                    </button>
                </div>
            ) :

                <button
                    type="submit"
                    className="btn btn-success form-control mt-4"
                >
                    Add Item
                </button>
            }
        </form>
    )
}

export default ChangeItemsForm