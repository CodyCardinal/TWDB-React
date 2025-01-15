import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ShoppingListForm from './ShoppingListForm.jsx';

export default function ShoppingList() {

    const [shoppingList, setShoppingList] = useState([
        { id: uuid(), product: "Bananas", quantity: 8 },
        { id: uuid(), product: "Apples", quantity: 4 },
    ]);

    const addItem = (item) => {
        setShoppingList((currentList) => {
            return [...currentList, { ...item, id: uuid() }];
        });
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {shoppingList.map((item) => (
                    <li key={item.id}>{item.product} - {item.quantity}</li>
                ))}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    );
}