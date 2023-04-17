import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()


export default function SelectColors({setColors}) {

    const colors = [
        { value: 'amarillo', label: 'amarillo'},
        { value: 'azul', label: 'azul'},
        { value: 'rojo', label: 'rojo'},
        { value: 'blanco', label: 'blanco'},
        { value: 'negro', label: 'negro'},
        { value: 'verde', label: 'verde'},
        { value: 'mordado', label: 'mordado'},
    ]

    const handleColor = (e) =>{
        setColors(e.map(i => i.value))
    }

    return (
    <Select 
        onChange={handleColor}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={colors}
    />
    )
}
