import React from 'react'

export default function productDetail() {
  return (
    <div className="m-auto flex w-full max-w-7xl flex-wrap items-center justify-center pt-20 pb-40">
            <div className="flex w-full justify-center p-4 lg:w-1/2">
                <img className="shadow-md" src="https://image.spreadshirtmedia.net/content/f_auto,q_60,w_1000/CMS/Startpage/SEO/HP_SEO_bubble_4teamshirts" />
            </div>
            <div className="flex w-full flex-col justify-evenly p-4 lg:w-1/2">
                <div>
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl font-bold">Boy's T-shirt</h1>
                        <p className="text-gray-600">TeamShirts Group t-shirt printing</p>
                    </div>
                    <div className="flex flex-col gap-2 py-4 text-xl">
                        <h2 className='text-red-500'>
                            <span className='text-gray-600'>
                                Stock:
                            </span>
                        </h2>
                       
                            <h2 className="text-gray-600">
                                <span className= 'text-gray-600'>
                                Personalize:
                                </span>
                            </h2>
                  
                
                            <h2 className="text-gray-600">
                                <span
                                    className='text-gray-600'>
                                     Color:
                                </span>
                            </h2>
                       
                    
                            <h2 className= 'text-gray-600'>
                                Stock:
                            </h2>
                       
                     
                            <h2
                                className='text-gray-600'>
                                Stock:
                            </h2>
                    </div>
                    <h1 className="py-4 text-4xl font-bold">$3639</h1>
                </div>
             
                    <div className="flex flex-col gap-4">
                       <button className="py-4 text-4xl font-bold">Add Cart</button>
                    </div>
            
                    <div>
                        <h1 className="py-4 text-2xl text-gray-600">
                        The classic for young and old: Our favorite item of clothing is also very popular with children and teenagers. An essential basic piece for the playground, school and for sports.
                        </h1>
                    </div>
            
            </div>
        </div>
  )
}

