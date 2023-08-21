import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import { PlusSmIcon as PlusSmIconSolid } from '@heroicons/react/solid'

import { Card,Table,TableHead,TableRow,TableHeaderCell,TableBody,TableCell,Text,Title,Badge,Button,} from "@tremor/react";
import {api_nestjs} from "../../utils/client"

import {useQuery,} from 'react-query'
import CreateModal from './create-meal'
import UpdateModal from './update-meal'
import Example from './delete-meal'


import LoaderWithOverlay from "../../components/common/overlay-loader"




const Meals = () => {

  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)


  const [selectedMeal, setSelectedMeal] = useState({})


  function editMeal(meal){

    setSelectedMeal(meal)
    setOpen1(!open1)
  }

  function deletemeal(meal){

    setSelectedMeal(meal)
    setOpen2(!open2)
  }


  const { data, isLoading, isFetching, refetch, isError} = useQuery('get-meals', () =>  
  
  api_nestjs.get("/meals",  { headers : {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }}),
  { 
    onSuccess : (data) => {

     console.log(data)

    },
    
  }
);
const { data: categoriesData, isLoading: categoriesLoading, isError: categoriesError } = useQuery('get-categories', () =>
api_nestjs.get("/categories", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}),
{
  onSuccess: (data) => {
    //console.log(data)
  },
}
);





  return (
  <>
    {open  && (<CreateModal refresh={refetch} setOpen={setOpen} open={open} />)}
   
    {open1  && (<UpdateModal refresh={refetch} meal={selectedMeal} setOpen1={setOpen1} open1={open1} />)}

    {open2  && (<Example refresh={refetch} meal={selectedMeal} setOpen2={setOpen2} open2={open2} />)}

   



    {isLoading || isFetching && (<LoaderWithOverlay/>)}
       
      
    
    


    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg leading-6 font-medium text-gray-900"> Meals List </h3>

      <select
  id="category"
  name="category"
 
  autoComplete="category-name"
  className="hidden focus:ring-indigo-500 px-4 py-2 focus:border-indigo-500 w-40 rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300"
  defaultValue="all"
>
  <option value="all">All</option>
  {categoriesData && categoriesData.map((cat,index) => (
    <option value={cat.idCategory} key={index}>{cat.strCategory}</option>
  ))}
</select>


      <div className="mt-3 sm:mt-0 sm:ml-4">
        <label htmlFor="mobile-search-candidate" className="sr-only">
          Search
        </label>
        <label htmlFor="desktop-search-candidate" className="sr-only">
          Search
        </label>
        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="mobile-search-candidate"
              id="mobile-search-candidate"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300"
              placeholder="Search"
            />
            <input
              type="text"
              name="desktop-search-candidate"
              id="desktop-search-candidate"
              className="hidden focus:ring-indigo-500 px-4 py-2 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300"
              placeholder="Search candidates"
            />
          </div>
          <button
        type="button"
        onClick={()=> setOpen(!open)}
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add
        <PlusSmIconSolid className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>

        </div>
      </div>
    </div>
  <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Meal
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.map((meal) => (
                  <tr key={meal.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={meal.strMealThumb} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{meal.strMeal}</div>
                          <div className="text-sm text-gray-500">{meal.category.strCategory}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{meal.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        onClick={()=> deletemeal(meal)}

        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Delete
      </button>

      
      <button
        type="button"
        onClick={()=> editMeal(meal)}


        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Edit
      </button>
      
    </span>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default Meals;
