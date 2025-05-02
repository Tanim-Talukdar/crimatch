import React from 'react'
import CartProduct from './CartProduct'
import CartBuy from './CartBuy'

export default function CartPage() {
  return (
    <div className="container  m-auto mt-5" style={{width: "100vw"}}>
        <CartProduct/>
        <CartBuy/>
    </div>
  )
}
