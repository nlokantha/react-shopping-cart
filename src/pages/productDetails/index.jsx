import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productDetails, setProductDetails,handleAddToCart } = useContext(ShoppingCartContext);
  console.log(productDetails);

  async function fetchProductDetails() {
    const apiresponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiresponse.json();
    console.log(result);
    if (result) {
      setProductDetails(result);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // function handleGoToCart(){
  //   navigate("/cart")

  // }

  return (
    <div className="p-6 lg:max-w-7xl max-w-4xl">
      <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div className="px-4 py-10 rounded-xl shadow-lg relative">
            <img
              className="w-4/5 rounded object-cover"
              src={productDetails?.thumbnail}
              alt={productDetails?.title}
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
            {productDetails?.images && productDetails?.images.length > 0
              ? productDetails?.images.map((item, index) => (
                  <div key={index} className="rounded-xl p-4 shadow-md">
                    <img src={item} className="w-24 cursor-pointer" />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2>{productDetails?.title}</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-xl font-bold">${productDetails?.price}</p>
          </div>
          <div>
            <button onClick={()=>handleAddToCart(productDetails)} className="min-w-[200px] px-4 py-3 border text-sm text-white mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
