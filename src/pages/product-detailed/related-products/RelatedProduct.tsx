import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/products/product-card/ProductCard'
import { Product } from '../../../interfaces/product.interface';
import { useShopContext } from '../../../contexts/shop/ShopContext';
import { useQuery } from '@tanstack/react-query';
import { ApiFetcher } from '../../../api/api';
import Loading from '../../../components/products/Loading';

export default function RelatedProduct({category} :any) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["product", category[0].category],
    queryFn: () => ApiFetcher.getByCategories(category[0].category,1 ,12, "ASC"),
  });

  if (isLoading) {
    return <Loading />;
  }
  if(error) {
    console.log(error)
  }
  
  return (
    <section className='mt-20'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-medium'>Related Products</h1>
      </div>
      <div className='flex flex-row gap-10 justify-center item-center'>
        {data.slice(0, 4).map((prod :any)=>{
          return <ProductCard data={prod}/>
        })}
      </div>
    </section>
  )
}
