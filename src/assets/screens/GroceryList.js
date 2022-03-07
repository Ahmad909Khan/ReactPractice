
function GroceryList(props) {

    return (
        <div className="text-center py-2 m-1 border border-success">
            <h2 className="m-3">List of Groceries</h2>
            <table className="col-md-10 mx-auto">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Vegetable</th>
                        <th>Cost per item</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.groceries.length > 0 ? (
                        props.groceries.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.itemName}</td>
                                <td>{item.cost}</td>
                                <td>{item.quantity}</td>
                                <td>{item.cost * item.quantity}</td>
                                <td>
                                    <button
                                    className="btn btn-warning m-2"
                                    onClick={() => props.editItem(item)}
                                    >Edit</button>
                                    <button
                                        className="btn btn-danger m-2"
                                        onClick={() => props.removeItem(item.id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>
                                <h4 className="m-3"><u>No items in the grocery list</u></h4>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default GroceryList;