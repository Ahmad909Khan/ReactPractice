import GroceryList from './GroceryList';

function TableLists(props) {
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
                <GroceryList items={props.grocs} />
            </table>
        </div>
    )
}
export default TableLists;