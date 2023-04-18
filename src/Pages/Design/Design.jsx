import React, { useRef } from 'react'
import './Design.css'
import { Disclosure } from '@headlessui/react'
import { ArrowDownTrayIcon, ArrowRightCircleIcon, ArrowUpTrayIcon, Bars3BottomLeftIcon, Bars3Icon, Bars4Icon, DocumentMinusIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';
import { Layer, Stage } from 'react-konva';
import { useState } from 'react';
import CanvaImage from '../../Components/CanvaImage/CanvaImage';
import CanvaText from '../../Components/CanvaText/CanvaText';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import priceActions from "../../Store/ChangePrice/actions"
import { useDispatch } from 'react-redux';

const { changePrice } = priceActions

//framer motion
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

//Sections
let initialSection = [
  {
    id: 'colors',
    name: 'Shirt colors : ',
    labelChecked: 'white',
    shirtImage: require('../../Media/custom-shirt-white.png'),
    options: [
      { value: "0", label: "White", checked: true, class: 'bubble-lavel', image : require('../../Media/custom-color-white.png'), bgImage: require('../../Media/custom-shirt-white.png')},
      { value: "1", label: "Black", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-black.png'), bgImage: require('../../Media/custom-shirt-black.png')},
      { value: "2", label: "Gray", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-gray.png'), bgImage: require('../../Media/custom-shirt-gray.png')},
      { value: "4", label: "Anthracite", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-anthracite.png'), bgImage: require('../../Media/custom-shirt-anthracite.png')},
      { value: "5", label: "Blue", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-blue.png'), bgImage: require('../../Media/custom-shirt-blue.png')},
      { value: "6", label: "Brown", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-brown.png'), bgImage: require('../../Media/custom-shirt-brown.png')},
      { value: "7", label: "Green", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-green.png'), bgImage: require('../../Media/custom-shirt-green.png')},
      { value: "8", label: "Orange", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-orange.png'), bgImage: require('../../Media/custom-shirt-orange.png')},
      { value: "9", label: "Red", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-red.png'), bgImage: require('../../Media/custom-shirt-red.png')},
      { value: "10", label: "Skyblue", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-skyblue.png'), bgImage: require('../../Media/custom-shirt-skyblue.png')},
      { value: "11", label: "Yellow", checked: false, class: 'bubble-lavel', image : require('../../Media/custom-color-yellow.png'), bgImage: require('../../Media/custom-shirt-yellow.png')},
    ],
  },
]
let initialSectionImages = [
]
//
//Images
const initialImages = [
];
const initialTexts = [
];

export default function Design() {

  const [isLoading, setIsLoading] = useState(false);
  const [AddImagesCanva, setAddImagesCanva] = useState(initialImages);
  const [AddTextsCanva, setAddTextsCanva] = useState(initialTexts);
  const [section, setSection] = useState(initialSection);
  const [sectionImages, setSectionImages] = useState(initialSectionImages);
  const [selectedId, selectShape] = useState();
  const [selectedText, setSelectedText] = useState('');
  const [selectedTextAlign, setSelectedTextAlign] = useState({
    start:false,
    center:true,
    justify:false
  })
  const [selectedTextColor, setSelectedTextColor] = useState('#000000')
  const [selectedTextFont, setSelectedTextFont] = useState('Courier New')
  const [textFontOptions, setTextFontOptionst] = useState([
    {font: "Courier New" , selected:true},
    {font: "Franklin Gothic Medium" , selected:false},
    {font: "Times New Roman" , selected:false},
    {font: "Gill Sans" , selected:false}
  ])

  const stageRef = useRef()
  const sizeRef = useRef()
  const quantityRef = useRef()
  const dispatch = useDispatch()
  let borderStage = selectedId? '1px dashed blue':'none'

  function handleChange(e){
    section.forEach((sec,ii)=>{
      sec.options.forEach((option,i)=>{
        if(option.value===e.target.value){
          const aux = section.slice()
          aux[ii].options[i].checked = true
          aux[ii].labelChecked = aux[ii].options[i].label
          aux[ii].shirtImage = aux[ii].options[i].bgImage
          setSection(aux)
        }else{
          const aux = section.slice()
          aux[ii].options[i].checked = false
          setSection(aux)
        }
      })
    })
  }
  function handleExport(){
    if(AddImagesCanva.length!=0||AddTextsCanva.length!=0){
    const uri = stageRef.current.toDataURL();
    downloadURI(uri,"Custom")
  }else{
    toast('Oops! create your design first!', {
      icon: '👇🤩', duration: 2000,
    });
  }
  }
  function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  function checkDeselect(e){
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null)
    }
  };
  function handleDeselect(e){
    if(e.target.classList.value.includes('canva-deselect')){
      selectShape(null)
    }
  }
  function handleUploadImage(e){
    const objectURL = URL.createObjectURL(e.target.files[0]);
    const aux = sectionImages.slice()
    aux.push(
      {
        value: `i${sectionImages.length}`,
        image: objectURL,
        checked: false,
        class: 'image-label',
      }
    )
    setSectionImages(aux)
  }
  function handleChangeImage(e){
    sectionImages.forEach((img,i)=>{
      if(img.value===e.target.value){
        const aux = sectionImages.slice()
        aux[i].checked = true
        setSectionImages(aux)
      }else{
        const aux = sectionImages.slice()
        aux[i].checked = false
        setSectionImages(aux)
      }
    })
  }
  function handleAddImages(){
    let imgSelected = sectionImages.filter((img)=>img.checked)[0]
    let repeatValue
    if(imgSelected){
      let aux = AddImagesCanva.slice()
      if(aux.filter((img)=>img.id.includes(imgSelected.value)).length!=0){
        let auxValue = aux.filter((img)=>img.id.includes(imgSelected.value)).length
        repeatValue = imgSelected.value +auxValue
      }
      aux.push(
        {
          x: 10,
          y: 10,
          width: 100,
          height: 100,
          id: repeatValue?repeatValue:imgSelected.value,
          url: imgSelected.image
        }
      )
      setAddImagesCanva(aux)
    }else{
      toast.error('You must select an image')
    }
  }
  function handleDeleteSelected(){
    if(!selectedId){
      toast('Select the element to delete!', {
        icon:'⚠️', duration: 2000,
      });
    }
    if(selectedId?.startsWith('i')){
      let aux = AddImagesCanva.slice()
      let filterAux = aux.filter((img)=>img.id!==selectedId)
      setAddImagesCanva(filterAux)
    }
    if(selectedId?.startsWith('t')){
      let aux = AddTextsCanva.slice()
      let filterAux = aux.filter((img)=>img.id!==selectedId)
      setAddTextsCanva(filterAux)
    }
  }
  function handleChangeText(e){
    setSelectedText(e.target.value)
  }
  function handleTextAlign(e){
    let aux = JSON.parse(JSON.stringify(selectedTextAlign))
    aux.start = false
    aux.center = false
    aux.justify = false
    aux[e.target.value] = true
    setSelectedTextAlign(aux)
  }
  function handleChangeTextColor(e){
    setSelectedTextColor(e.target.value)
  }
  function handleChangeTextFont(e){
    setSelectedTextFont(e.target.value)
    let aux = textFontOptions.slice()
    aux.forEach((option)=>{
      if(option.font===e.target.value){
        option.selected=true
      }else{
        option.selected=false
      }
    })
  }
  function handleAddText(){
    if(selectedText!=''){
      let aux = AddTextsCanva.slice()
      aux.push(
        {
          x: 10,
          y: 10,
          id: `t${AddTextsCanva.length}`,
          align : selectedTextAlign,
          text : selectedText,
          fill : selectedTextColor,
          fontFamily : selectedTextFont,
        }
      )
      setAddTextsCanva(aux)
    }else{
      toast.error('Text is Empty')
    }
  }
  function handleDeletAll(){
    if(AddImagesCanva.length!=0||AddTextsCanva.length!=0){
      Swal.fire({
      title: 'Are you sure to clean desing?',
      showDenyButton: true,
      confirmButtonText: 'Clean',
      denyButtonText: `Don't clean`,
      }).then((result) => {
        if (result.isConfirmed) {
          setAddImagesCanva([])
          setAddTextsCanva([])
          toast('Successful cleaning!', {
            icon:'🚮', duration: 2000,
          });
        } 
      })
    }else{
      toast('Layout is empty!', {
        icon:'🚨', duration: 2000,
      });
    }
    
  }
  async function handleAddBag(){
    setIsLoading(true)
    let token = localStorage.getItem("token")
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    if(AddImagesCanva.length!=0||AddTextsCanva.length!=0){
      if(quantityRef.current===undefined||quantityRef.current===null){
        toast.error('Select shirt features')
        setIsLoading(false)
      }else{
        if(quantityRef.current.value!=undefined||quantityRef.current.value>0){
          let url = 'http://localhost:8080/api/products/custom/643dcb32deaba3a1439bd83e'
          let data = {
            url: stageRef.current.toDataURL(),
            price: 40,
            stock: quantityRef.current.value,
          }
          try {
            const res = await axios.post(url, data, headers);
            let product_id = res.data.product._id
            let url2 ='http://localhost:8080/api/cart/'+product_id
            let body = {color:section[0].labelChecked, size:sizeRef.current.value, quantity: quantityRef.current.value}
            const res2 = await axios.post(url2,body,headers)
            toast.success('Product added to bag')
            dispatch(changePrice())
            setIsLoading(false)
          } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
            setIsLoading(false)
          }
        }
      }
    }else{
      toast('Oops! create your design first!', {
        icon: '👇🤩', duration: 2000,
      });
      setIsLoading(false)
    }
    
  }
   
  
  return (
    <div onClick={handleDeselect} className='container-design canva-deselect'>
      <section onClick={handleDeselect} className='container-canva canva-deselect'>
        <div className='container-product-canva canva-deselect' style={{backgroundImage : `url(${section[0].shirtImage})`}} >
          <Stage 
          ref={stageRef} 
          width={260} 
          height={400}
          style={{ border: borderStage, width :"fit-content", height :"fit-content" }}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          >
            <Layer>
              {AddImagesCanva.map((rect, i) => {
                return (
                  <CanvaImage
                    url={rect.url}
                    key={i}
                    shapeProps={rect}
                    isSelected={rect.id === selectedId}
                    onSelect={() => {
                      selectShape(rect.id);
                    }}
                    onChange={(newAttrs) => {
                      const rects = AddImagesCanva.slice();
                      rects[i] = newAttrs;
                      setAddImagesCanva(rects);
                    }}
                  />
                );
              })}
              {AddTextsCanva.map((rect, i) => {
                return (
                  <CanvaText
                    key={i}
                    shapeProps={rect}
                    isSelected={rect.id === selectedId}
                    onSelect={() => {
                      selectShape(rect.id);
                    }}
                    onChange={(newAttrs) => {
                      const rects = AddTextsCanva.slice();
                      rects[i] = newAttrs;
                      setAddTextsCanva(rects);
                    }}
                  />
                );
              })}
            </Layer>
          </Stage>
        </div>
      </section>
      {/* seccion herramientas */}
      <section className='container-tools-design canva-deselect'>
        {/* contenedor herramientas de edicion */}
        <span className='container-tools-design-top'>
          <DocumentMinusIcon onClick={handleDeletAll} className='h-10 w-10 hover:text-red-600 cursor-pointer'/>
        </span>
        <div className='container-properties'>
          {/* Seleccion colores  */}
          <div className='canva-deselect'>
            {section.map((section) => (
              <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6 canva-deselect">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between text-sm text-gray-400 hover:text-gray-500 canva-deselect">
                        <span className="font-medium text-gray-900 canva-deselect">{section.name}{section.labelChecked}</span>
                        <span className="ml-6 flex items-center canva-deselect">
                          {open ? (
                            <MinusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6 canva-deselect">
                      <motion.div 
                      variants={containerFast}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-raw flex-wrap space-x-1 canva-deselect">
                        {section.options.map((option, optionIdx) => (
                          <motion.div variants={item} key={option.value} className={option.checked?"container-label-selected":"container-label-deselected"}>
                            <input
                              onChange={handleChange}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="radio"
                              defaultChecked={option.checked}
                              className="hidden canva-deselect"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className={`canva-deselect ${option.class}`}
                              style={{backgroundImage : `url(${option.image})`}}
                            >
                            </label>
                          </motion.div>
                        ))}
                      </motion.div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
          {/* Seleccion Imagenes */}
          <div className='canva-deselect'>
              <Disclosure as="div" className="border-b border-gray-200 py-6 canva-deselect">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between text-sm text-gray-400 hover:text-gray-500 canva-deselect">
                        <span className="font-medium text-gray-900 canva-deselect">Add Images</span>
                        <span className="ml-6 flex items-center canva-deselect">
                          {open ? (
                            <MinusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6 canva-deselect">
                      <motion.div 
                      variants={containerFast}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-raw flex-wrap space-x-1 canva-deselect">
                        {sectionImages.map((option, optionIdx) => (
                          <motion.div variants={item} key={option.value} className={option.checked?"container-image-selected":"container-image-deselected"}>
                            <input
                              onChange={handleChangeImage}
                              id={`filter-${optionIdx}`}
                              defaultValue={option.value}
                              name={'images-canva'}
                              type="radio"
                              defaultChecked={option.checked}
                              className="hidden canva-deselect"
                            />
                            <label
                              htmlFor={`filter-${optionIdx}`}
                              className={`canva-deselect ${option.class}`}
                              style={{backgroundImage : `url(${option.image})`}}
                            >
                            </label>
                          </motion.div>
                        ))}
                      </motion.div>
                      <div className='pt-2 w-full h-10 flex flex-raw flex-wrap justify-around items-center gap-5 hover:text-'>
                        <label htmlFor="input-file-canva-image"><ArrowUpTrayIcon className='h-10 w-10 hover:text-indigo-600 cursor-pointer'/></label>
                        <input type="file" id='input-file-canva-image' onChange={handleUploadImage} accept="image/*" className='hidden' />
                        <button onClick={handleAddImages} type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                          Add Image
                        </button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
          </div>
          {/* Seleccion textos */}
          <div className='canva-deselect'>
              <Disclosure as="div" className="border-b border-gray-200 py-6 canva-deselect">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between text-sm text-gray-400 hover:text-gray-500 canva-deselect">
                        <span className="font-medium text-gray-900 canva-deselect">Add Texts</span>
                        <span className="ml-6 flex items-center canva-deselect">
                          {open ? (
                            <MinusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6 canva-deselect">
                      <div className='w-full flex flex-raw flex-wrap justify-around items-center gap-5 hover:text-'>
                        <input onChange={handleChangeText} defaultValue={selectedText} style={{color : `${selectedTextColor}`, fontFamily : `${selectedTextFont}`}} type="text" sty className='py-3 px-4 w-40 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-500 dark:border-gray-700' />
                        <button onClick={handleAddText} type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                          Add Text
                        </button>
                      </div>
                      <div className='flex flex-raw items-center justify-around py-3'>
                        <div className='flex flex-raw gap-1 items-center '>
                          <div className={`h-7 w-7 flex items-center justify-center ${selectedTextAlign.start?"border-solid border-2 border-indigo-300":""}`}>
                            <label htmlFor="start-align"><Bars3BottomLeftIcon className='w-6 h-6'/></label>
                            <input onChange={handleTextAlign} type="radio" id='start-align' name='text-align-radio' className='hidden' defaultValue='start'/>
                          </div>
                          <div className={`h-7 w-7 flex items-center justify-center ${selectedTextAlign.center?"border-solid border-2 border-indigo-300":""}`}>
                            <label htmlFor="center-align"><Bars3Icon className='w-6 h-6'/></label>
                            <input onChange={handleTextAlign} type="radio" id='center-align' name='text-align-radio' className='hidden' defaultValue='center'/>
                          </div>
                          <div className={`h-7 w-7 flex items-center justify-center ${selectedTextAlign.justify?"border-solid border-2 border-indigo-300":""}`}>
                            <label htmlFor="justify-align"><Bars4Icon className='w-6 h-6'/></label>
                            <input onChange={handleTextAlign} type="radio" id='justify-align' name='text-align-radio' className='hidden' defaultValue='justify'/>
                          </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <input type="color" defaultValue={selectedTextColor} onChange={handleChangeTextColor} />
                        </div>
                        <div>
                          <select onChange={handleChangeTextFont} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            {
                              textFontOptions.map((option,index)=>{
                                return <option key={index} selected={option.selected} value={option.font}>{option.font}</option>
                              })
                            }
                          </select>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
          </div>
          {/* Shirt Features */}
          <div className='canva-deselect'>
              <Disclosure as="div" className="border-b border-gray-200 py-6 canva-deselect">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between text-sm text-gray-400 hover:text-gray-500 canva-deselect">
                        <span className="font-medium text-gray-900 canva-deselect">Shirt Features</span>
                        <span className="ml-6 flex items-center canva-deselect">
                          {open ? (
                            <MinusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5 canva-deselect" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6 canva-deselect">
                      <div className='flex flex-raw items-center justify-around py-3'>
                        <div className='flex flex-col'>
                          <p>Size</p>
                          <select ref={sizeRef} className='w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                              <option value="XS">XS</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                              <option value="L">L</option>
                              <option value="XL">XL</option>
                              <option value="XXL">XXL</option>
                              <option value="XXXL">XXXL</option>
                          </select>
                        </div>
                        <div className='flex flex-col'>
                          <p>Quantity to order</p>
                          <input ref={quantityRef} type="number" defaultValue={0} min="0" pattern="^[0-9]+" max={10} className='py-3 px-4 w-40 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-400 dark:border-gray-700' />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
          </div>
        </div>
        {/* herramientas del diseño */}
        <div className='container-tools-design-bottom'>
          <span className='canva-deselect' >
            <ArrowDownTrayIcon
            className='h-10 w-10 hover:text-indigo-600 cursor-pointer'
            onClick={(e)=>{
              selectShape(null)
              handleExport(e)}}/>
          </span>
          <span>
            <TrashIcon onClick={handleDeleteSelected} className='h-10 w-10 hover:text-red-600 cursor-pointer'/>
          </span>
          <span onClick={handleAddBag} className='flex items-center border w-50 text-xl hover:text-indigo-600 cursor-pointer'>
            {isLoading? <LoadingSpinner size={"small"}/>: <p>Add to bag</p>}
              <ArrowRightCircleIcon className='h-10 w-10'/>
          </span>
        </div>
      </section>
    </div>
  )
}
