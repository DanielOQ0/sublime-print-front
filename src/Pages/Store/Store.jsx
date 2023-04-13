import { Fragment, useState, React, useEffect } from 'react'
import './Store.css'
import { Dialog, Disclosure, Menu, Transition , Popover } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import detailsAction from "../../Store/Details/actions";
import Details from '../../Components/Details/Details';
import { motion } from 'framer-motion';
import axios from 'axios'


const { captureDetails } = detailsAction;

  //Framer motion
  const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.4,
          staggerChildren: 0.2
        }
      }
  };
  const containerFast = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };
    
  const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
  };
  //Filtros
  const sortOptions = [
    { name: 'Best Rating', href: '#', current: true },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
  ]
  let filters = []
  //cantidad de productos en pantalla
  const items = [
    {quantity:4},
    {quantity:6},
    {quantity:8},
    {quantity:10}
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

//Variable de producto
let products=[]
let product ={}
let page=1
let quantity=6
let qPage;
const pageClassDisactive = "text-sm font-medium leading-none text-gray-600 border-t border-transparent cursor-default pt-3 mr-4 px-2"
const pageClassActive = "text-sm font-medium leading-none text-indigo-700 border-t border-indigo-400 cursor-default pt-3 mr-4 px-2"
let pagination;
let categories=[]
let sort="rating"

export default function Store() {

    const [render,setRender] = useState(false)
    const [filter,setFilter] = useState(false)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const dispatch = useDispatch()
    let openDetails = useSelector(store=>store.details.details)
    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    //Effects
    useEffect(()=>{//traer categorias
      axios.get('http://localhost:8080/api/categories',headers)
      .then((res)=>{
        let cat={
          id: 'category',
          name: 'Category',
          options: [
          ],
        }
        res.data.Categories.map((e)=>{ cat.options.push({ value: e._id, label: e.name, checked: false }) })
        
        if(filters.length<1){
          filters.push(cat)
        }
      }
      ).catch((error)=>console.log(error))
    },[])

    useEffect(()=>{//Traer productos con filtros
      let url='http://localhost:8080/api/products?page='+page+'&quantity='+quantity+'&category='+categories.join()+'&sort='+sort
      axios.get(url,headers)
      .then((res)=>{
        products=res.data.products
        qPage=Math.ceil(res.data.count/quantity)
        pagination=[]
        for(let i = 0; i < qPage; i++) {
          i+1===page?
          pagination.push({class:pageClassActive,value:i+1}):
          pagination.push({class:pageClassDisactive,value:i+1})
        }
        setRender(!render)
      })
      .catch((error)=>console.log(error))
    },[filter])

    ///Funciones
    function handleProduct(e){
        product = products.find(each=>{ return each._id===e.target.id})
        if(product){
            dispatch(captureDetails({details:true,product:product}))
        }
    }
    function handleQuantity(e){
      quantity=parseInt(e.target.id)
      setFilter(!filter)
    }
    function handlePrevious(){
      if(page===1){
        page=qPage
      }else{
        page--
      }
      setFilter(!filter)
    }
    function handleNext(){
      if(page===qPage){
        page=1
      }else{
        page++
      }
      setFilter(!filter)
    }
    function handleCategory(e){ 
      if(e.target.checked){
        categories.push(e.target.value)
      }else{
        categories = categories.filter((each) => each !== e.target.value)
      }
      page=1;
      setFilter(!filter)
    }
    function handleSort(e){
      sortOptions.forEach((each, index)=>{
        each.name===e.target.firstChild.data?sortOptions[index].current=true:sortOptions[index].current=false
      })
      switch (e.target.firstChild.data) {
        case "Best Rating":
         sort="rating"
        break;
        case "Newest":
          sort="newest"
        break;
        case "Price: Low to High":
          sort="low"
        break;
        case "Price: High to Low":
          sort="high"
        break; 
        default:
          break;
      }
      setFilter(!filter)
    }
    
  return (
    <>
      <div className="bg-gray-100">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="bg-gray-100 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Store</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <span
                              id={option.href}
                              onClick={handleSort}
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900 cursor-pointer cursor-pointer' : 'text-gray-500 cursor-pointer',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </span>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Popover className="relative">
                <Popover.Button className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-0"
                  enterTo="opacity-100 translate-y-1"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-1"
                  leaveTo="opacity-0 translate-y-0"
                >
                  <Popover.Panel className="absolute right-3 top-0 z-10 mt-3 overflow-hidden rounded-3xl bg-white shadow-lg rounded-tr-none">
                    <div className="p-4">
                      {items.map((item,index) => (
                        <div
                          key={index}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div onClick={handleQuantity} id={item.quantity} className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white cursor-pointer">
                            {item.quantity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <motion.ul 
                variants={container}
                initial="hidden"
                animate="visible"
                role="list" 
                className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <motion.li 
                    variants={item}
                    key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </motion.li>
                  ))}
                </motion.ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <motion.div 
                          variants={containerFast}
                          initial="hidden"
                          animate="visible"
                          className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <motion.div variants={item} key={option.value} className="flex items-center">
                                <input
                                  onChange={handleCategory}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </motion.div>
                            ))}
                          </motion.div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
              {/* Product grid */}
              <div className="lg:col-span-3">
                <motion.ul 
                onClick={handleProduct} 
                className='containerProducts'
                variants={container}
                initial="hidden"
                animate="visible"
                >
                    {products?.map((product) => (
                        <motion.li 
                        variants={item}
                        key={product._id} 
                        className='containerProductCard'>
                            <ProductCard product={product}/>
                        </motion.li>
                    ))}
                </motion.ul>
                {/*navigate*/}
                <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                  <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                      <div onClick={handlePrevious} className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                      <ArrowLeftIcon className='w-5 h-5'/>
                          <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                      </div>
                      <div className="sm:flex hidden">
                        {pagination?.map((each)=>(
                          <p key={each.value} className={each.class}>{each.value}</p>
                        ))}
                      </div>
                      <div onClick={handleNext} className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                          <p className="text-sm font-medium leading-none mr-3">Next</p>
                          <ArrowRightIcon className='w-5 h-5'/>
                      </div>
                  </div>
                </div>
                {openDetails?<Details product={product}/>:null}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>   
    </>
  )
}