import ShoppingListCart from "./ShoppingListCart";
import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList() {
    const cart = ShoppingListCart();
    return (
        <ul>
            {cart.map((each) => (
                <ShoppingListItem key={each.id} {...each} />
            ))}
        </ul>
    );
}