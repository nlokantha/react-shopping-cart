import React from "react"
import { useNavigate } from "react-router-dom"

export default function ProductTile({ item }) {
  const navigate = useNavigate()
  function handleItem(id) {
    console.log(id)
    navigate(`/product-details/${id}`)
  }
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={item?.thumbnail}
          alt={item?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
      </div>
      <div className="flex justify-between items-start mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base overflow-hidden">
          <p className="w=[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            {item?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${item.price}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleItem(item?.id)}
        className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg">
        View Detail
      </button>
    </div>
  )
}
