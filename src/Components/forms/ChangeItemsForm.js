import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewItem, updateItem, selectCurrentItem, editMode } from '../../redux/actions/groceryActions';

function ChangeItemsForm() {

    let currentItem = useSelector((state) => state.selectedItem.item);
    const editing = useSelector((state) => state.editMode.editing);
    const groceries = useSelector((state) => state.allGroceries.groceries);
    const dispatch = useDispatch();

    let itemNameRef = useRef();
    let itemCostRef = useRef();
    let itemQuantityRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        let itemName = itemNameRef.current.value;
        let itemCost = itemCostRef.current.value;
        let itemQuantity = itemQuantityRef.current.value;

        // if statement: to edit current list item
        if (editing) {
            currentItem = {
                id: currentItem.id,
                itemName: itemName,
                cost: itemCost,
                quantity: itemQuantity
            };
            dispatch(updateItem(currentItem.id, currentItem));
            dispatch(editMode(false));
        }

        //else statement: to add new item to the list
        else {
            let newGroceryItem = {
                id: groceries.length + 1,
                itemName: itemName,
                cost: itemCost,
                quantity: itemQuantity
            };

            dispatch(addNewItem(newGroceryItem));
        };
        
        // To empty input fields after submit
        itemNameRef.current.value = '';
        itemCostRef.current.value = '';
        itemQuantityRef.current.value = '';
    };

    // Updating DOM with selected item
    useEffect(() => {
        itemNameRef.current.value = currentItem.itemName;
        itemCostRef.current.value = currentItem.cost;
        itemQuantityRef.current.value = currentItem.quantity;
        dispatch(selectCurrentItem(currentItem));
    
    }, [currentItem, dispatch]);

    const editModeDomButtons = (
        <div>
            <button type="submit"
                className="btn btn-primary mt-3 form-control"
            >
                Update Item
            </button>
            <button
                onClick={() => dispatch(editMode(false))}
                className="btn btn-secondary mt-2 form-control"
            >
                Cancel
            </button>
        </div>
    );

    const addItemDomButton = (
        <button
            type="submit"
            className="btn btn-success form-control my-3"
        >
            Add Item
        </button>
        );

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
            {editing ? editModeDomButtons : addItemDomButton}
        </form>
    )
}

export default ChangeItemsForm