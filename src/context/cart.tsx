import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ItemData } from '../components/DataItems';

interface CartProps {
  children: ReactNode;
}

interface CartContextProps {
  add: (item: ItemData) => void;
  cart: ItemData[];
  totalValue: number;
  totalItems: number;
  remove: (item: ItemData) => void;
  removeAllOfType: (itemId: string) => void;
  removeAllItems: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProps) {
  const [cart, setCart] = useState<ItemData[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  function removeAllItems() {
    setCart([]); // Set the cart to an empty array to remove all items
  }

  useEffect(() => {
    const itemsValue = cart.reduce((acc, curr) => acc + curr.count, 0); // Contador de itens totais

    setTotalItems(itemsValue);

    const value = cart.reduce((acc, curr) => acc + curr.count * curr.price, 0); // Contador do valor total do carrinho

    setTotalValue(value);
  }, [cart]);

  function add(item: ItemData) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].count += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, count: 1 }]);
    }
  }

  function remove(item: ItemData) {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, count: Math.max(cartItem.count - 1, 0) } : cartItem
    );

    setCart(updatedCart.filter((cartItem) => cartItem.count > 0));
  }

  function removeAllOfType(itemId: string) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  }

  const store: CartContextProps = {
    add,
    cart,
    totalValue,
    totalItems,
    remove,
    removeAllOfType,
    removeAllItems
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  const { cart, add, totalValue, totalItems, remove, removeAllOfType, removeAllItems } = context;

  return {
    cart,
    add,
    totalValue,
    totalItems,
    remove,
    removeAllOfType,
    removeAllItems
  };
}
