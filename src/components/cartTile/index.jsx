import React, { Fragment } from 'react'

export default function CartTile({item}) {
  return (
    <Fragment>
        <div className='grid grid-cols-3 gap-5 items-start'>
        <div className='col-span-2 flex gap-2 items-start'>
            <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-500 p-1 rounded-sm'>
                <img src={item?.thumbnail} alt={item?.title} className='w-full h-full object-contain' />
            </div>
            <div>
                <h3 className='text-base font-bold text-gray-900'>{item?.title}</h3>
                <button className='text-sm px-4 py-3 bg-black text-white'>REMOVE</button>
            </div>
        </div>
        <div className='ml-auto'>
            <h3>$ {item?.totalPrice.toFixed(2)}</h3>
            <div className='text-white space-x-2'>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    </div>
    <hr className='border-gray-500' />
    </Fragment>
  )
}
