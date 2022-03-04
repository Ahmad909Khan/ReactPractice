function GroceryItem(props) {
    const {id, name, cost, quantity} = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{cost}</td>
            <td>{quantity}</td>
            <td>{cost * quantity}</td>
        </tr>
    )
}

export default GroceryItem