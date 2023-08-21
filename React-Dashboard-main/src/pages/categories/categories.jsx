import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text, Title, Badge, Button } from "@tremor/react";
import { api_nestjs } from "../../utils/client"
import { useQuery } from 'react-query';
import CreateModal from "./add-category"

const Categories = () => {


  const [open,setOpen] = useState(false);
 

  

  const { data, isLoading, isFetching, refetch, isError } = useQuery('get-categories', () =>
    api_nestjs.get("/categories", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    ,{
      onSuccess: (data) => {
        console.log(data)
      }
    });

  const handleMouseOver = (event) => {
    event.currentTarget.querySelector('.category-description').style.opacity = 1;
  };

  const handleMouseOut = (event) => {
    event.currentTarget.querySelector('.category-description').style.opacity = 0;
  };

  const handleAddCategory = () => {

    setOpen(!open)
    // Implement logic for adding a new category here
  };

  return (
    <>
        {open  && (<CreateModal refresh={refetch} setOpen={setOpen} open={open} />)}

    <div className="bg-gray-100">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Meal Categories</h3>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {data && data.map((category) => (
    <div
      key={category.idCategory}
      className="bg-white rounded-lg overflow-hidden shadow-md relative flex flex-col"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-48 object-cover"
      />
      <div className="flex-grow flex flex-col justify-center px-4 py-2">
        <h2 className="text-lg font-bold mb-2">{category.strCategory}</h2>
        <p className="text-gray-600 text-sm h-20 overflow-y-scroll">{category.strCategoryDescription}</p>
        <div className="mt-4 flex justify-between">
          <button
            className="text-sm font-medium text-gray-700 bg-gray-100 py-1 px-3 rounded hover:bg-gray-200"
            onClick={() => console.log(`Editing category ${category.strCategory}`)}
          >
            Edit
          </button>
          <button
            className="text-sm font-medium text-red-700 bg-red-100 py-1 px-3 rounded hover:bg-red-200"
            onClick={() => console.log(`Deleting category ${category.strCategory}`)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ))}
 <div className="bg-white rounded-lg overflow-hidden shadow-md relative flex flex-col">
  <div className="flex flex-col justify-center items-center h-full cursor-pointer"  onClick={handleAddCategory}>
    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
    <button
      className="text-lg font-bold text-gray-700 hover:text-gray-900"
     
    >
      Add Category
    </button>
  </div>
</div>
</div>

    </div>
    </>
  );
};

export default Categories;
