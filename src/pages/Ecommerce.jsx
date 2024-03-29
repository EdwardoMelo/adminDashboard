import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine }from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12 '>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
          <div className=' dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3'>
              <div className='flex justify-between items-center'>
                  <div>
                    <p className='font-bold text-gray-400'>Earnings </p>
                    <p className='text-2xl'>63,444.78</p>
                  </div>
              </div>
              <div className='mt-6 '>
                      <Button 
                      color="white"
                      bgColor="blue"
                      text="Download"
                      size="md"
                      borderRadius="10px"/>

                  </div>   
          </div>
          <div className='flex m-3 flex-wrap justify-center gap-1 items-center '>
              {earningData.map((item) => (
                <div 
                  key={item.title}
                  className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 rounded-2xl '
                 > 
                 <button type="button" style={{color: item.iconColor, backgroundColor: item.iconBg}} 
                 className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl '> 
                        { item.icon } 
                 </button>
                 <p className='mt-3'>
                    <span className='text-xl font-semibold'>
                      { item.amount  }
                    </span>
                    <span className={ `text-sm text-${item.pcColor} ml-2`}>
                        { item.percentage }
                    </span>
                    <p className='text-sm text-gray-400 mt-1'>
                      {item.title}
                    </p>
                 </p>
                  </div>
              )) }
          </div>
        </div>
        <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  m-3 p-4 rounded-2xl md:w-780'>
                <div className='flex justify-between '>
                  <p className='font-semibold text-xl  '>Atualização diária</p>
                  <div className='flex item-center gap-4'>
                    <p className='flex items-center text-gray-600 gap-2 '>
                       <span>
                        <GoDotFill />
                       </span>
                       <span>
                        Custos
                       </span>
                    </p>
                    <p className='flex items-center text-green-400 gap-2 '>
                       <span>
                        <GoDotFill />
                       </span>
                       <span>
                        Lucro
                       </span>
                    </p>
                  </div>
                </div>
                <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                  <div className='border-r-1 m-4 pr-10'>
                    <div className=''>
                        <p>
                          <span className='text-3xl font-semibold'>$93.438,45</span>
                          <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%
                          </span>
                        </p>
                         <p className='text-gray-500 mt-1 '>Lucro   </p>
                    </div>
                    <div className=' mt-8'>
                        <p>
                          <span className='text-3xl font-semibold'>$22.438,45</span>
                         
                        </p>
                         <p className='text-gray-500 mt-1 '>Custos   </p>
                    </div>
                    <div className='mt-5 '>
                        <SparkLine
                        currentColor="blue"
                        id="line-sparkline"
                        type="Line"
                        height="80px"
                        width="250px"
                        data={SparklineAreaData}
                        />
                    </div>
                    <div className='mt-10'>
                          <Button
                          color="color"
                          text="Download Relatório"
                          borderRadius="10px"
                          />

                    </div>
                  </div>
                  <div>
                      <Stacked width="320px" height="360px"/>
                  </div>
                </div>
          </div>

        </div>
    </div>
  )
}

export default Ecommerce