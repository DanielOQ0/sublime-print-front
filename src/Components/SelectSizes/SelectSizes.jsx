import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function SelectSizes({setSizes}) {


    const handleChange = (e) => {
        setSizes( e.map(({ label, ...rest }) => rest));
    }

    const sizes = [
        { value : 'Small', label: 'Small', 'inStock': true},
        { value : 'Medium', label: 'Medium', 'inStock': true},
        { value : 'Large', label: 'Large', 'inStock': true},
        { value : 'X-Large', label: 'X-Large', 'inStock': true}
    ]

    return (
        <Select
        onChange={handleChange}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={sizes}
        />
    );
}
