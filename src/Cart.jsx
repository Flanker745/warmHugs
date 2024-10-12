import React from 'react';
import { useCart } from './CartContext'; // Ensure you have a context for cart management
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart(); // Assuming you have a removeFromCart function in your context

    return (
        <div className="cart p-6 bg-white shadow-lg max-w-lg mx-auto mt-10 rounded-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <ul className="divide-y divide-gray-200">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex flex-col md:flex-row justify-between items-center py-4">
                            <Link to={`/product/${item.id}`} className="flex-1 flex items-center mb-2 md:mb-0">
                                <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-md" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold hover:underline">{item.name}</h3>
                                    <p className="text-yellow-500">Rating: {item.rating} ⭐</p>
                                    <p className="text-red-600 font-bold">
                                        ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
                                    </p>
                                </div>
                            </Link>
                            <button
                                onClick={() => removeFromCart(item.id)} // Function to remove item from cart
                                className="mt-2 md:mt-0 md:ml-4 bg-red-500 text-white py-2 px-4 rounded-lg transition duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
