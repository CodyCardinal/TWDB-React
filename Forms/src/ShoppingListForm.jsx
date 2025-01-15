import { useForm } from "react-hook-form";

export default function ShoppingListForm({ addItem }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const handleItem = (data) => { addItem(data); };
    const handleError = (errors) => { };

    const formOptions = {
        product: { required: "Product cannot be blank" },
        quantity: { required: "Quantity cannot be blank", min: {value: 1, message: "Minimum of 1 Item", }, max: {value:10, message:"Max of 10 items"} }
    };

    return (
        <form onSubmit={handleSubmit(handleItem, handleError)}>
            <div>
                <label htmlFor="quantity"> Quantity </label>
                <input
                    type="number"
                    placeholder="1"
                    id="quantity"
                    name="quantity"
                    {...register("quantity", formOptions.quantity)}
                />
                <div className="text-danger">{errors?.quantity && errors.quantity.message}</div>
            </div>
            <div>
                <label htmlFor="product">Product Name </label>
                <input
                    type="text"
                    placeholder="item"
                    id="product"
                    name="product"
                    {...register("product", formOptions.product)}
                />
                <div className="text-danger">{errors?.product && errors.product.message}</div>
            </div>
            <button type="submit">Add Item to Cart</button>

        </form>
    );
}