import { createContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [listOfProduct, setListOfProduct] = useState([])
  const [productDetails, setProductDetails] = useState(null)

  async function fetchListOfProducts() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/products")
      const result = await apiResponse.json()
      if (result && result?.products) {
        setListOfProduct(result.products)
      }
    } catch (error) {}
  }
  useEffect(() => {
    fetchListOfProducts()
  }, [])

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProduct,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
