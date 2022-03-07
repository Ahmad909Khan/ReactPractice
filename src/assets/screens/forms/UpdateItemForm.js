import React, { useRef, useEffect, useState } from 'react'

const UpdateUserForm = (props) => {
    let itemNameRef = useRef();
    let itemCostRef = useRef();
    let itemQuantityRef = useRef();

    const [item, setItem] = useState(props.currentItem)

    const updateItemSubmitHandler = (event) => {
        event.preventDefault();

        let itemName = itemNameRef.current.value;
        let itemCost = itemCostRef.current.value;
        let itemQuantity = itemQuantityRef.current.value;

        let updatedItem = {
            id: props.currentItem.id,
            itemName: itemName,
            cost: itemCost,
            quantity: itemQuantity
        }
        props.updateItem(updatedItem.id, updatedItem);
    }

    useEffect(() => {
        setItem(props.currentItem)
    }, [props])


    return (
        <form
            className="col-6 mx-auto mt-3"
            onSubmit={updateItemSubmitHandler}
        >
            <label>Name</label>
            <input
                type="text"
                className="form-control"
                defaultValue={item.itemName}
                ref={itemNameRef}
                required
            />
            <label>Cost per Item</label>
            <input
                type="text"
                className="form-control"
                defaultValue={item.cost}
                ref={itemCostRef}
                pattern='^[0-9]+$'
                required
            />
            <label>Number of Items: </label>
            <input
                type="text"
                className="form-control"
                defaultValue={item.quantity}
                ref={itemQuantityRef}
                pattern='^[0-9]+$'
                required
            />
            <button type="submit"
                className="btn btn-primary mt-3 form-control"
            >
                Update user
            </button>
            <button
                onClick={() => props.setEditing(false)}
                className="btn btn-secondary mt-2 form-control"
            >
                Cancel
            </button>
        </form>
    )
}

export default UpdateUserForm