import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {  XIcon } from '@heroicons/react/outline'
import {api_nestjs} from "../utils/client"
import {
  useQuery,useMutation
} from 'react-query'
import toast from 'react-hot-toast'

export default function RegisterModal({setOpen,open}) {


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md	 sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
            
                <div className="mt-3 text-center sm:mt-0  sm:text-left sm:mx-auto sm:w-full sm:max-w-md">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Login
                  </Dialog.Title>
                  <div className="mt-2">
                    
                    
                        <Form setOpen={setOpen} />

                  </div>
                </div>
              </div>
           
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}



function Form({setOpen}){

  const {
    error,
    isError,
    isLoading,
    isSuccess,
    mutate,
  } = useMutation(async (params) => await api_nestjs.post("/clients/create", params),
      {  
        onSuccess : (data) => {
           // toast.success('Meal added successfully')
            setOpen(false)
            toast.success("user added successfully",{duration: 6000})
        }
      }
  );

    function handleSubmit(event){

        event.preventDefault();


        let { firstname, lastname , email , password , phone  } = event.target.elements

        let body = {

          firstname : firstname.value,
          lastname : lastname.value,
          email: email.value,
          password : password.value,
          phone : phone.value
        }

        mutate(body)

    }


    return (

    
         
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 shadow sm:rounded-lg">


          {isError && (      <span className="flex p-2 m-4 justify-center items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
        {error}
        <button
          type="button"
          className="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-400 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
        >
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      </span>)}

            <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
            <div>
  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
    First Name
  </label>
  <div className="mt-1">
    <input
      id="first-name"
      name="firstname"
      type="text"
      autoComplete="given-name"
      required
      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</div>

<div>
  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
    Last Name
  </label>
  <div className="mt-1">
    <input
      id="last-name"
      name="lastname"
      type="text"
      autoComplete="family-name"
      required
      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
    Phone Number
  </label>
  <div className="mt-1">
    <input
      id="phone"
      name="phone"
      type="tel"
      autoComplete="tel"
      required
      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
</div>


              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

               
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

      
          </div>
        </div>
         


   
      )
        

}