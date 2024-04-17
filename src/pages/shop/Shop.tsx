import React from 'react'
import ShopBanner from '../../components/shop/banner/ShopBanner'
import Filter from '../../components/shop/filter/Filter'
import ProductList from '../../components/shop/product-list/ProductList'
import GoToTop from '../../utils/GotoTop'

export default function Shop() {
  return (
    <>
      <ShopBanner />
      <Filter />
      <ProductList />
      <GoToTop />
    </>

  )
}
