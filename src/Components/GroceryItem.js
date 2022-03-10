function GroceryItem(props) {
const {item, index, edit, remove, editing} = props;
    return (
        <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>{item.itemName}</td>
            <td>{item.cost}</td>
            <td>{item.quantity}</td>
            <td>{item.cost * item.quantity}</td>
            <td>
                <button
                    className="btn btn-warning m-2"
                    onClick={edit}
                >Edit</button>
                <button
                    className="btn btn-danger m-2"
                    onClick={remove}
                    disabled={editing}
                >Delete</button>
            </td>
        </tr>
    )
}
export default GroceryItem;