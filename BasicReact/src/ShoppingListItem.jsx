export default function ShoppingListItem({...each}) {
    const styles = {
        color: each.completed ? "green" : "red",
        textDecoration: each.completed ? "line-through" : "none"
    };

    return (
        <li style={styles}>
            {each.item} - {each.quantity}
        </li>
    );
}