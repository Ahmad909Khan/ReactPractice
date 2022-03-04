import GroceryItem from '../components/GroceryItem';

function GroceryList(props) {
    return (
        <div className="text-center my-5">
            <h2 className="m-3">List of Groceries</h2>
            <table className="col-sm-10 col-md-6 mx-auto">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Vegetable</th>
                        <th>Cost per item</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {props.groceries.map((item) => (
                        <GroceryItem
                            key={item.no}
                            id={item.no}
                            name={item.itemName}
                            cost={item.cost}
                            quantity={item.quantity}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default GroceryList;