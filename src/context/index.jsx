import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const [listOfProduct, setListOfProduct] = useState([])
  const [productDetails, setProductDetails] = useState(null)
  const [cartItems,setCartItems] = useState([])
  const navigate = useNavigate()

  function handleAddToCart(getProductDetails){
    console.log(getProductDetails)
    let exCartItems = [...cartItems]
    const findIndexOfCurrentItem = exCartItems.findIndex(cartItem => cartItem.id === getProductDetails.id)
    // console.log(findIndexOfCurrentItem)

    if(findIndexOfCurrentItem === -1){
      exCartItems.push({
        ...getProductDetails,
        quantity:1,
        totalPrice:getProductDetails?.price
      })
    }else{

    }
    setCartItems(exCartItems)
    localStorage.setItem("cartItems",JSON.stringify(exCartItems))
    navigate("/cart")
  }

  function handleRemoveFromCart(productDetails,isFullyRemove){
    let cpyexCartItems = [...cartItems]
    const findIndexOfCurrentItem = cpyexCartItems.findIndex(cartItem => cartItem.id === getProductDetails.id)

  }

  async function fetchListOfProducts() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/products")
      const result = await apiResponse.json()
      if (result && result?.products) {
        setListOfProduct(result.products)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchListOfProducts()
    setCartItems(JSON.parse(localStorage.getItem("cartItems")))
  }, [])

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProduct,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
