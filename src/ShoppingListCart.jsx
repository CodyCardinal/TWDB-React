export default function ShoppingListCart() {
    const cart = [
        { id: 1, item: "eggs", quantity: 12, completed: false },
        { id: 2, item: "milk", quantity: 12, completed: true },
        { id: 3, item: "chicken", quantity: 12, completed: false },
        { id: 4, item: "carrots", quantity: 12, completed: true },
    ];

    return cart;
}