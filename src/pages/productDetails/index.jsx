import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../context"

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { productDetails, setProductDetails } = useContext(ShoppingCartContext)
  console.log(productDetails)

  async function fetchProductDetails() {
    const apiresponse = await fetch(`https://dummyjson.com/products/${id}`)
    const result = await apiresponse.json()
    console.log(result)
    if (result) {
      setProductDetails(result)
    }
  }

  useEffect(() => {
    fetchProductDetails()
  }, [id])

  return <div>{productDetails?.title}</div>
}
