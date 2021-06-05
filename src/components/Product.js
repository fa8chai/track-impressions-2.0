import { useEffect, useState } from 'react';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useInView } from 'react-intersection-observer';
import { setItem } from '../slices/appSlice';
import { useDispatch } from 'react-redux';

function Product({ id, title, price, description, category, image }) {
    const dispatch = useDispatch();
    const [imp, setImp] = useState(0);

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
      });

      useEffect(() => {
        if(inView) {
            dispatch(setItem({ id, title, price, description, category, image }))
            setImp(1);
        }
        
      }, [inView])


    return (
        <div ref={ref} className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{imp}</p>
            <Image className='cursor-pointer' src={image} height={200} width={200} objectFit='contain' />
            <h4 className='my-3'>{title}</h4>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency
                    quantity={price}
                />
            </div>
            
    </div>
    )
}

export default Product
