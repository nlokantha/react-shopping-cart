import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import ProductTile from "../../components/productTile"

export default function ProductListPage() {
  const { listOfProduct } = useContext(ShoppingCartContext)

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-950 sm:text-4xl">
            Our Featured Product
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {listOfProduct && listOfProduct.length > 0
            ? listOfProduct.map((item, index) => (
                <ProductTile key={index} item={item} />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}
