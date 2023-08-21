import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { toast } from "react-hot-toast";
import {api_nestjs} from "../utils/client"
import {
  useMutation,
} from 'react-query'

export default function CartModal({ open, setOpen }) {
  const { cart : cartList, clearCart } = useCart();
  const { state } = useAuth();

  let {token} = state
    
  const {
    data,
    error,
    isError,
    isLoading,
    isSuccess,
    mutate,
  } = useMutation(async (params) => await api_nestjs.post("/orders", params,  { headers : {
    Authorization: `Bearer ${token}`
  }}),
      {  
        onSuccess : (data) => {
         
          toast.success("order placed successfully")
          clearCart()
          setOpen(false)
        }
      }
  );



  const handleSubmit = async (event) => {
    event.preventDefault();

    let params =  { cat_id : cartList[0].idCategory, meal_id:cartList[0].id, price : parseFloat(cartList[0].price) }



    mutate(params)
  };
  return (
    <Transition show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setOpen(false)}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-8">
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Cart
                </h3>
                {cartList && cartList.map((item,key) => (
                  <div
                    key={key}
                    className="flex items-start space-x-4 mb-4"
                  >
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-lg font-medium text-gray-900">
                        {item.strMeal}
                      </h4>
                      <p className="text-gray-500">
                       {item.price} TND
                      </p>
                      <p className="text-gray-500">
                        Quantity: 1
                      </p>
                    </div>
                  </div>
                ))}
                <div className="mt-4 flex justify-end">

                <button
                    type="button"
                    onClick={clearCart}
                    className="px-4 py-2 bg-red-900 text-white  font-bold rounded-md hover:bg-gray-800 focus:outline-none"
                  >
                    Empty
                  </button>


                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-gray-900 text-white font-bold rounded-md hover:bg-gray-800 focus:outline-none"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
