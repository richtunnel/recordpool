import { useEffect, useState } from 'react';
import { RiShoppingCart2Fill } from "react-icons/ri";

export default function CartIcon() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    if (typeof window !== 'undefined') { // Ensure we're in the browser
      const savedCart = window.localStorage.getItem('cart');
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        const count = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
        setCartCount(count);
      }
    }
  };

  useEffect(() => {
    updateCartCount(); // Initialize cart count when the component mounts

    const handleCartUpdated = () => {
      updateCartCount(); // Update cart count when 'cartUpdated' event is fired
    };

    // Add event listener for custom 'cartUpdated' event
    if (typeof window !== 'undefined') {
      window.addEventListener('cartUpdated', handleCartUpdated);
    }

    // Cleanup event listener when the component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('cartUpdated', handleCartUpdated);
      }
    };
  }, []);

  return (
    <div>
      <RiShoppingCart2Fill style={{ display: "inline" }} />
      <span>{cartCount}</span>
    </div>
  );
}
