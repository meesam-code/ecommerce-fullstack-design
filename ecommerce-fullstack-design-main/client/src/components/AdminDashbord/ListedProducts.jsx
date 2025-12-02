import React from "react";
import { UseContext } from "../../Context/EcommerceContext";
import { deleteProduct } from "../../Api/product.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

const ListedProducts = () => {
  const { products, setProducts } = UseContext();
  const navigate = useNavigate();
  const [productList, setProductList] = useState(null);
  const [inStock, setInStock] = useState(false);

  const handleDeleteFromDB = async (id) => {
    try {
      const response = await deleteProduct(id);
      if (response) {
        setProducts((prev) => prev.filter((product) => product._id !== id));
        toast.success("Product deleted successfully from database");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    setProductList([...products]);
  }, [products]);

  return (
    <div className="flex-1 pb-10 flex flex-col justify-between">
      <div className="w-full md:px-10 px-4">
        <h2 className="pb-4 text-xl font-semibold text-gray-800">
          All Products
        </h2>

        <div className="overflow-x-auto bg-white border border-gray-300 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px] text-sm text-left">
            <thead className="bg-gray-100 text-gray-900">
              <tr>
                <th className="px-4 py-3 font-medium">Image</th>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Selling Price</th>
                <th className="px-4 py-3 font-medium">In Stock</th>
                <th className="px-4 py-3 font-medium text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {productList
                ?.slice()
                .reverse()
                .map((product, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-3 flex items-center gap-3">
                      <img
                        src={product.image[0]}
                        alt="Product"
                        className="w-14 h-14 object-cover border rounded"
                      />
                      <span>{product.name}</span>
                    </td>

                    <td className="px-4 py-3">{product.title}</td>
                    <td className="px-4 py-3">${product.price}</td>

                    <td className="px-4 py-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={product.inStock}
                          value={inStock}
                          onChange={(e) => {
                            setInStock(e.target.checked);
                            setProducts((prev) =>
                              prev.map((p) =>
                                p._id === product._id
                                  ? { ...p, inStock: e.target.checked }
                                  : p,
                              ),
                            );
                            toast.success(
                              `Product ${
                                e.target.checked ? "in stock" : "out of stock"
                              }`,
                            );
                          }}
                        />
                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                      </label>
                    </td>

                    <td className="px-4 py-3 text-center">
                      {product._id.length === 24 ? (
                        <div className="flex items-center gap-2">
                          <button
                            className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white text-xs px-3 py-1 ml-1 rounded"
                            onClick={() =>
                              navigate(`/product/edit/${product._id}`)
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 cursor-pointer  hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                            onClick={() => handleDeleteFromDB(product._id)}
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                          onClick={() => {
                            setProducts((prev) =>
                              prev.filter((p) => p._id !== product._id),
                            );
                            toast.success(
                              "Product deleted successfully from local",
                            );
                          }}
                        >
                          Delete (Local)
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListedProducts;
