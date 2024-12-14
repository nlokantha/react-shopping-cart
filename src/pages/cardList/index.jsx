import React, { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { useNavigate } from "react-router-dom";
import CartTile from "../../components/cartTile";

export default function CartListPage() {
  const {cartItems} = useContext(ShoppingCartContext);
  const navigate = useNavigate()
  console.log(cartItems,"Cart Items")
  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">My Cart Items</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-4">
          {
            cartItems?.length ?
            cartItems.map((item,index) => <CartTile key={index} item={item}/>)
            : <h1>No Cart Items</h1>
          }

        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-xl font-extrabold text-gray-950">Order Summary</h3>
          <ul className="text-gray-400 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total<span></span>
              </p>
              <div className="mt-5 flex gap-2">
                <button className="text-sm px-4 py-3 bg-black text-white">Checkout</button>
                <button onClick={()=>navigate("/product-list")} className="text-sm px-4 py-3 bg-black text-white">Continue Shopping</button>
              </div>

          </ul>

        </div>

      </div>

    </div>
  )
}
