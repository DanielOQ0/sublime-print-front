import React from 'react'
import './Design.css'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';

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

//filters
let filters = [
  {
    id: 'colors',
    name: 'Colors',
    options: [
      { value: "w", label: "white", checked: false },
      { value: "b", label: "black", checked: false },
      { value: "g", label: "gray", checked: false }
    ],
  },
  {
    id: 'colors',
    name: 'Colors',
    options: [
      { value: "w", label: "white", checked: false },
      { value: "b", label: "black", checked: false },
      { value: "g", label: "gray", checked: false }
    ],
  },
  {
    id: 'colors',
    name: 'Colors',
    options: [
      { value: "w", label: "white", checked: false },
      { value: "b", label: "black", checked: false },
      { value: "g", label: "gray", checked: false }
    ],
  }
]

export default function Design() {

  function handleChange(){
    
  }

  return (
    <div className='container-design'>
      <section className='container-canva'>
        <canvas >

        </canvas>
      </section>
      <section className='container-tools-design'>
        <div className='container-properties'>
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
                            onChange={handleChange}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="radio"
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
        </div>
      </section>
    </div>
  )
}
