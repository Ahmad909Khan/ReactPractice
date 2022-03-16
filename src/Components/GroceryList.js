import { useSelector } from 'react-redux';
import GroceryItem from "./GroceryItem";
function GroceryList() {
    const groceries = useSelector((state) => state.allGroceries.groceries);

    groceries.map((item, index) => item.id = index + 1)
        
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
                    {groceries.length > 0 ? (
                        groceries.map((item, index) => (
                            <GroceryItem item={item} index={index} key={index + 1} />
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