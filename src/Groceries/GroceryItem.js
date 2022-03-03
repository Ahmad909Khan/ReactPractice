function GroceryItem(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.cost}</td>
            <td>{props.qty}</td>
            <td>{props.cost * props.qty}</td>
        </tr>
    )
}

export default GroceryItem