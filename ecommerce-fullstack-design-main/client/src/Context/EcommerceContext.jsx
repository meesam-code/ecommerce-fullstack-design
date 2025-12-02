import { createContext, useContext, useState, useEffect } from "react";
import { getProducts } from "../Api/product.js";
import { fetchUser } from "../Api/auth.js";
import toast from "react-hot-toast";

const EcommerceContext = createContext({
  products: [],
  isGridView: false,
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  favorite: [],
  addToFavorite: () => {},
  removeFromFavorite: () => {},
  removeAllCart: () => {},
  initialFilters: [],
  isAdmin: false,
  user: {},
  isUserLoading: true,
  search: "",
  setSearch: () => {},
  allProducts: [],
  setAllProducts: () => {},
  setProducts: () => {},
  orderConfirm: null,
  setOrderConfirm: () => {},
  setIsAdmin: () => {},
});

export const ContextProvider = ({ children }) => {
  const [orderConfirm, setOrderConfirm] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Assuming you might want to manage admin state
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([
    {
      _id: "1",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      oldPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: [
        "/assets/image 33.png",
        "/assets/ired1.jpg",
        "/assets/ired2.jpg",
        "/assets/ired3.jpg",
        "/assets/ired4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "2",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 23.png",
        "/assets/redmi1.jpg",
        "/assets/redmi2.jpg",
        "/assets/redmi3.jpg",
        "/assets/redmi4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "3",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 32.png",
        "/assets/stab1.jpg",
        "/assets/stab2.jpg",
        "/assets/stab3.jpg",
        "/assets/stab4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "4",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 34.png",
        "/assets/laptop1.jpg",
        "/assets/laptop2.jpg",
        "/assets/laptop3.jpg",
        "/assets/laptop4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "5",
      title: "Best watch for mens",
      price: 998.0,
      oldPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 35.png",
        "/assets/watch1.jpg",
        "/assets/watch2.jpg",
        "/assets/watch3.jpg",
        "/assets/watch4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "6",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 86.png",
        "/assets/sheadphone1.jpg",
        "/assets/sheadphone2.jpg",
        "/assets/sheadphne3.jpg",
        "/assets/sheadphone4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "7",
      title: "Winter Coat for Men - Blue",
      price: 120.0,
      oldPrice: 150.0,
      rating: 8.2,
      orders: 98,
      shipping: "Free Shipping",
      description: "Stylish and warm winter coat for men with durable fabric.",
      image: [
        "/assets/image 30.png",
        "/assets/coat1.jpg",
        "/assets/coat2.jpg",
        "/assets/coat3.jpg",
        "/assets/coat4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "8",
      title: "Cotton Casual Shirt - White",
      price: 35.0,
      oldPrice: 45.0,
      rating: 8.0,
      orders: 320,
      shipping: "Free Shipping",
      description: "Breathable cotton shirt for everyday wear.",
      image: [
        "/assets/image 34 shirt.png",
        "/assets/image 37.png",
        "/assets/image 38.png",
        "/assets/image 39.png",
        "/assets/image 40.png",
      ],
      inStock: true,
    },
    {
      _id: "9",
      title: "Handwoven Carpet - Persian Design",
      price: 240.0,
      oldPrice: 300.0,
      rating: 9.1,
      orders: 72,
      shipping: "Free Shipping",
      description: "Premium handwoven Persian-style carpet for living rooms.",
      image: [
        "/assets/carpet.png",
        "/assets/carpet1.jpg",
        "/assets/carpet2.jpg",
        "/assets/carpet3.jpg",
        "/assets/carpet4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "10",
      title: "Leather Handbag - Brown",
      price: 89.0,
      oldPrice: 110.0,
      rating: 8.4,
      orders: 198,
      shipping: "Free Shipping",
      description: "Elegant and spacious leather handbag for daily use.",
      image: [
        "/assets/image 24.png",
        "/assets/purse1.jpg",
        "/assets/purse2.jpg",
        "/assets/purse3.jpg",
        "/assets/purse4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "11",
      title: "King Size Bed with Storage",
      price: 799.0,
      oldPrice: 999.0,
      rating: 9.0,
      orders: 45,
      shipping: "Free Shipping",
      description:
        "Spacious and sturdy bed with under-bed storage compartments.",
      image: [
        "/assets/image 93.png",
        "/assets/matress1.jpg",
        "/assets/matress2.jpg",
        "/assets/matress3.jpg",
        "/assets/matress4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "12",
      title: "Stylish bag ",
      price: 180.0,
      oldPrice: 220.0,
      rating: 9.2,
      orders: 130,
      shipping: "Free Shipping",
      description: "Ergonomic and stylish bag for everyday use.",
      image: [
        "/assets/image 26.png",
        "/assets/bag1.jpg",
        "/assets/bag2.jpg",
        "/assets/bag3.jpg",
        "/assets/bag4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "13",
      title: "Men's Cotton Long Nikar",
      price: 22.0,
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      description: "Comfortable long nikar made with breathable fabric.",
      image: [
        "/assets/Bitma.png",
        "/assets/bluish1.jpg",
        "/assets/bluish2.jpg",
        "/assets/bluish3.jpg",
        "/assets/bluish4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "14",
      title: "Winter Coat",
      price: 10.3,
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      description: "Jeans shorts for men, blue color",
      shipping: "Free Shipping",
      image: [
        "/assets/2 1.png",
        "/assets/hodie1.jpg",
        "/assets/hoodie2.jpg",
        "/assets/hoodie3.jpg",
        "/assets/hoodie4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "15",
      title: "Gaming Headset",
      price: 8.99,
      description: "Headset for gaming with mic",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/image 86.png",
        "/assets/headphone1.jpg",
        "/assets/headphone2.jpg",
        "/assets/headphone3.jpg",
        "/assets/headphone4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "16",
      title: "Clay Pot",
      price: 10.3,
      description: "Blue wallet for men, leather material",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/image 90.png",
        "/assets/port1.jpg",
        "/assets/port2.jpg",
        "/assets/port3.jpg",
        "/assets/port4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "17",
      title: "Travel Kettle",
      price: 80.95,
      description: "Jeans bag for travel, for men",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/image 85.png",
        "/assets/tea1.jpg",
        "/assets/tea2.jpg",
        "/assets/tea3.jpg",
        "/assets/tea4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "18",
      title: "Camera Shorts",
      price: 9.99,
      description: "Canon camera black, 100x zoom",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/Bitmap.png",
        "/assets/short1.jpg",
        "/assets/short2.jpg",
        "/assets/short3.jpg",
        "/assets/short5.jpg",
      ],
      inStock: true,
    },
  ]);
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      oldPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: [
        "/assets/image 33.png",
        "/assets/ired1.jpg",
        "/assets/ired2.jpg",
        "/assets/ired3.jpg",
        "/assets/ired4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "2",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 23.png",
        "/assets/redmi1.jpg",
        "/assets/redmi2.jpg",
        "/assets/redmi3.jpg",
        "/assets/redmi4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "3",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 32.png",
        "/assets/stab1.jpg",
        "/assets/stab2.jpg",
        "/assets/stab3.jpg",
        "/assets/stab4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "4",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 34.png",
        "/assets/laptop1.jpg",
        "/assets/laptop2.jpg",
        "/assets/laptop3.jpg",
        "/assets/laptop4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "5",
      title: "Best watch for mens",
      price: 998.0,
      oldPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 35.png",
        "/assets/watch1.jpg",
        "/assets/watch2.jpg",
        "/assets/watch3.jpg",
        "/assets/watch4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "6",
      title: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      oldPrice: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: [
        "/assets/image 86.png",
        "/assets/sheadphone1.jpg",
        "/assets/sheadphone2.jpg",
        "/assets/sheadphne3.jpg",
        "/assets/sheadphone4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "7",
      title: "Winter Coat for Men - Blue",
      price: 120.0,
      oldPrice: 150.0,
      rating: 8.2,
      orders: 98,
      shipping: "Free Shipping",
      description: "Stylish and warm winter coat for men with durable fabric.",
      image: [
        "/assets/image 30.png",
        "/assets/coat1.jpg",
        "/assets/coat2.jpg",
        "/assets/coat3.jpg",
        "/assets/coat4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "8",
      title: "Cotton Casual Shirt - White",
      price: 35.0,
      oldPrice: 45.0,
      rating: 8.0,
      orders: 320,
      shipping: "Free Shipping",
      description: "Breathable cotton shirt for everyday wear.",
      image: [
        "/assets/image 34 shirt.png",
        "/assets/image 37.png",
        "/assets/image 38.png",
        "/assets/image 39.png",
        "/assets/image 40.png",
      ],
      inStock: true,
    },
    {
      _id: "9",
      title: "Handwoven Carpet - Persian Design",
      price: 240.0,
      oldPrice: 300.0,
      rating: 9.1,
      orders: 72,
      shipping: "Free Shipping",
      description: "Premium handwoven Persian-style carpet for living rooms.",
      image: [
        "/assets/carpet.png",
        "/assets/carpet1.jpg",
        "/assets/carpet2.jpg",
        "/assets/carpet3.jpg",
        "/assets/carpet4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "10",
      title: "Leather Handbag - Brown",
      price: 89.0,
      oldPrice: 110.0,
      rating: 8.4,
      orders: 198,
      shipping: "Free Shipping",
      description: "Elegant and spacious leather handbag for daily use.",
      image: [
        "/assets/image 24.png",
        "/assets/purse1.jpg",
        "/assets/purse2.jpg",
        "/assets/purse3.jpg",
        "/assets/purse4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "11",
      title: "King Size Bed with Storage",
      price: 799.0,
      oldPrice: 999.0,
      rating: 9.0,
      orders: 45,
      shipping: "Free Shipping",
      description:
        "Spacious and sturdy bed with under-bed storage compartments.",
      image: [
        "/assets/image 93.png",
        "/assets/matress1.jpg",
        "/assets/matress2.jpg",
        "/assets/matress3.jpg",
        "/assets/matress4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "12",
      title: "Stylish bag ",
      price: 180.0,
      oldPrice: 220.0,
      rating: 9.2,
      orders: 130,
      shipping: "Free Shipping",
      description: "Ergonomic and stylish bag for everyday use.",
      image: [
        "/assets/image 26.png",
        "/assets/bag1.jpg",
        "/assets/bag2.jpg",
        "/assets/bag3.jpg",
        "/assets/bag4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "13",
      title: "Men's Cotton Long Nikar",
      price: 22.0,
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      description: "Comfortable long nikar made with breathable fabric.",
      image: [
        "/assets/Bitma.png",
        "/assets/bluish1.jpg",
        "/assets/bluish2.jpg",
        "/assets/bluish3.jpg",
        "/assets/bluish4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "14",
      title: "Winter Coat",
      price: 10.3,
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      description: "Jeans shorts for men, blue color",
      shipping: "Free Shipping",
      image: [
        "/assets/2 1.png",
        "/assets/hodie1.jpg",
        "/assets/hoodie2.jpg",
        "/assets/hoodie3.jpg",
        "/assets/hoodie4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "15",
      title: "Gaming Headset",
      price: 8.99,
      description: "Headset for gaming with mic",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/image 86.png",
        "/assets/headphone1.jpg",
        "/assets/headphone2.jpg",
        "/assets/headphone3.jpg",
        "/assets/headphone4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "16",
      title: "Clay Pot",
      price: 10.3,
      description: "Blue wallet for men, leather material",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/image 90.png",
        "/assets/port1.jpg",
        "/assets/port2.jpg",
        "/assets/port3.jpg",
        "/assets/port4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "17",
      title: "Travel Kettle",
      price: 80.95,
      description: "Jeans bag for travel, for men",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/image 85.png",
        "/assets/tea1.jpg",
        "/assets/tea2.jpg",
        "/assets/tea3.jpg",
        "/assets/tea4.jpg",
      ],
      inStock: true,
    },
    {
      _id: "18",
      title: "Camera Shorts",
      price: 9.99,
      description: "Canon camera black, 100x zoom",
      oldPrice: 30.0,
      rating: 7.9,
      orders: 85,
      shipping: "Free Shipping",
      image: [
        "/assets/Bitmap.png",
        "/assets/short1.jpg",
        "/assets/short2.jpg",
        "/assets/short3.jpg",
        "/assets/short5.jpg",
      ],
      inStock: true,
    },
  ]);

  const [initialFilters, setInitialFilters] = useState({
    categories: [
      { id: 1, title: "Mobile accessory", selected: false },
      { id: 2, title: "Electronics", selected: false },
      { id: 3, title: "Smartphones", selected: false },
      { id: 4, title: "Modern tech", selected: false },
    ],
    brands: [
      { id: 1, title: "Samsung", selected: false },
      { id: 2, title: "Apple", selected: false },
      { id: 3, title: "Huawei", selected: false },
      { id: 4, title: "Pocco", selected: false },
      { id: 5, title: "Lenovo", selected: false },
    ],
    features: [
      { id: 1, title: "Metallic", selected: true },
      { id: 2, title: "Plastic cover", selected: false },
      { id: 3, title: "8GB Ram", selected: false },
      { id: 4, title: "Super power", selected: false },
      { id: 5, title: "Large Memory", selected: false },
    ],
  });
  const [favorite, setFavorite] = useState([]);

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };
  const [cart, setCart] = useState([]);

  const addToCart = ({ id, price, quantity = 1, replace = false }) => {
    if (!id || typeof price !== "number" || typeof quantity !== "number") {
      console.warn("Invalid addToCart call", { id, price, quantity });
      return;
    }
    setCart((prev) => {
      const itemIndex = prev.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: replace
            ? quantity
            : updatedCart[itemIndex].quantity + quantity,
        };
        return updatedCart;
      }

      return [...prev, { id, price, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.success("Product deleted successfully 🗑️");
  };

  const addToFavorite = (id) => {
    setFavorite((prev) => (prev.includes(id) ? prev : [...prev, id]));
    toast("Added to favorites 💖");
  };

  const removeFromFavorite = (id) => {
    setFavorite((prev) => prev.filter((item) => item !== id));
    toast("Removed from favorites 💔");
  };

  const removeAllCart = () => {
    setCart([]);
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        if (Array.isArray(response)) {
          setProducts((prev) => [...prev, ...response]);
          setAllProducts((prev) => [...prev, ...response]);
        } else {
          console.warn("Unexpected response format:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error.message);
      });
  }, []);

  useEffect(() => {
    if (user) {
      const storedCart =
        JSON.parse(localStorage.getItem(`cart_${user._id}`)) || [];
      setCart(storedCart);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user._id}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  useEffect(() => {
    if (user) {
      const storedFavorites =
        JSON.parse(localStorage.getItem(`favorite_${user._id}`)) || [];
      setFavorite(storedFavorites);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`favorite_${user._id}`, JSON.stringify(favorite));
    }
  }, [favorite, user]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await fetchUser();

        if (user) {
          setUser(user);
          setIsAdmin(user.role === "admin");
        }
      } catch (error) {
        console.error("Failed to fetch user", error.message);
      } finally {
        setIsLoadingUser(false); // ✅ Mark loading complete
      }
    };

    loadUser();
  }, []);

  return (
    <EcommerceContext.Provider
      value={{
        products,
        isGridView,
        initialFilters,
        setInitialFilters,
        setProducts,
        toggleView,
        cart,
        favorite,
        addToFavorite,
        removeFromFavorite,
        removeAllCart,
        isAdmin,
        addToCart,
        removeFromCart,
        setUser,
        user,
        isLoadingUser,
        isUserLoading: isLoadingUser,
        search,
        setSearch,
        allProducts,
        setAllProducts,
        orderConfirm,
        setOrderConfirm,
        setCart,
        setFavorite,
        setIsAdmin,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

export const UseContext = function () {
  return useContext(EcommerceContext);
};
