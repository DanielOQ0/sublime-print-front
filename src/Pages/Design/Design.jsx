import React, { useRef } from 'react'
import './Design.css'
import { Disclosure } from '@headlessui/react'
import { ArrowUpTrayIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';
import { Layer, Stage } from 'react-konva';
import { useState } from 'react';
import CanvaImage from '../../Components/CanvaImage/CanvaImage';
import CanvaText from '../../Components/CanvaText/CanvaText';
import { toast } from 'react-hot-toast';

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
  {
    x: 10,
    y: 10,
    width: 150,
    id: 'text',
    fontSize : 20,
    align : 'start',
    text : "Draggable Text asdasd as das fa fsa aff ",
    fill : '#c3eb34',
  },
];

export default function Design() {

  const [AddImagesCanva, setAddImagesCanva] = useState(initialImages);
  const [AddTextsCanva, setAddTextsCanva] = useState(initialTexts);
  const [section, setSection] = useState(initialSection);
  const [sectionImages, setSectionImages] = useState(initialSectionImages);
  const [selectedId, selectShape] = useState();
  const stageRef = useRef()
  let borderStage = selectedId? '1px solid grey':'none'

  console.log(selectedId);

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
    const uri = stageRef.current.toDataURL();
    downloadURI(uri,"Custom")
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
    console.log(imgSelected);
    if(imgSelected){
      let aux = AddImagesCanva.slice()
      aux.push(
        {
          x: 10,
          y: 10,
          width: 100,
          height: 100,
          id: imgSelected.value,
          url: imgSelected.image
        }
      )
      setAddImagesCanva(aux)
    }else{
      toast.error('You must select an image')
    }
  }
  function handleDeleteSelected(){
    if(selectedId.startsWith('i')){
      let aux = AddImagesCanva.slice()
      let filterAux = aux.filter((img)=>img.id!==selectedId)
      setAddImagesCanva(filterAux)
    }
    if(selectedId.startsWith('t')){
      
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
      
      <section className='container-tools-design canva-deselect'>
        <button className='w-10 h-10 bh-white-200 canva-deselect' type='button' onClick={(e)=>{
          selectShape(null)
          handleExport(e)}}/>
        <div className='container-properties'>
          <div className='canva-deselect'>
            {section.map((section) => (
              <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6 canva-deselect">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500 canva-deselect">
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
          <div className='canva-deselect'>
              <Disclosure as="div" className="border-b border-gray-200 py-6 canva-deselect">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500 canva-deselect">
                        <span className="font-medium text-gray-900 canva-deselect">Add images</span>
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
                      <div className='pt-5 w-full h-10 flex flex-raw flex-wrap justify-around items-center gap-5 hover:text-'>
                        <label htmlFor="input-file-canva-image"><ArrowUpTrayIcon className='h-10 w-10 hover:text-indigo-600 cursor-pointer'/></label>
                        <input type="file" id='input-file-canva-image' onChange={handleUploadImage} accept="image/*" className='hidden' />
                        <button onClick={handleAddImages} type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                          Add to design
                        </button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
          </div>
        </div>
        <div className='container-tools-design-bottom'>
          <span >
            <TrashIcon onClick={handleDeleteSelected} className='h-10 w-10 hover:text-red-600 cursor-pointer'/>
          </span>
        </div>
      </section>
    </div>
  )
}
