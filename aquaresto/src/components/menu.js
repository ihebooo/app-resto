import { MdOutlineAddShoppingCart } from "react-icons/md";
import { api_nestjs } from "../utils/client";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Button,
} from "@tremor/react";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useCart } from '../context/CartContext';
import { toast } from "react-hot-toast";

const Meals = () => {

  const { cart : cartList, addItemToCart } = useCart();


  console.log({cartList})


  const { data, isLoading, isError } = useQuery(
    "get-meals",
    () =>
      api_nestjs.get("/meals", {
        // ...
      }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  const [cart, setCart] = useState([]);

  const handleAddToCart = (meal) => {

    console.log({meal})

    addItemToCart(meal)

    toast("meal ajouté au panier")
    


  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching meals data</div>;
  }

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data &&
        data.map((meal) => (
          <li
            key={meal.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                src={meal.strMealThumb}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {meal.strMeal}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Category</dt>
                <dd className="text-gray-500 text-sm">
                  {meal.category.strCategory}
                </dd>
                <dt className="sr-only">Price</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {meal.price}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    className="relative w-0 flex-1 inline-flex cursor-pointer items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    onClick={() => handleAddToCart(meal)}
                  >
                    <MdOutlineAddShoppingCart
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Add to Cart</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Meals;
