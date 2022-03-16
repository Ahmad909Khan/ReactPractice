import { useSelector, useDispatch } from 'react-redux';
import { removeItem, selectCurrentItem, editMode } from "../redux/actions/groceryActions";

function GroceryItem(props) {

    const editing = useSelector((state) => state.editMode.editing)
    const dispatch = useDispatch();
    const { item, index } = props;
    const { id, itemName, cost, quantity } = item;

    const editHandler = () => {
        dispatch(editMode(true));
        dispatch(selectCurrentItem(item))
    }

    return (
        <tr key={index + 1}>
            <td>{id}</td>
            <td>{itemName}</td>
            <td>{cost}</td>
            <td>{quantity}</td>
            <td>{cost * quantity}</td>
            <td>
                <button
                    className="btn btn-warning m-2"
                    onClick={() => editHandler()}
                >Edit</button>
                <button
                    className="btn btn-danger m-2"
                    onClick={() => dispatch(removeItem(index))}
                    disabled={editing}
                >Delete</button>
            </td>
        </tr>
    )
}
export default GroceryItem;