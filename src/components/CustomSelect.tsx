import React from 'react'
import { IOption } from '../types';
import Select, { GroupBase, OptionProps, StylesConfig } from 'react-select';
import { equipment } from '../utils/constants';


const CustomOption: React.FC<OptionProps<IOption>> = ({ innerProps, label, data }) => {
    return (
        <div className='select-option' {...innerProps}>
            <span>{label}</span>
        </div>
    );
};
const OptionsSelect: React.FC = () => {

    function handleChange() {

    }
    const customStyles: StylesConfig<any, boolean, GroupBase<IOption>> = {
        control: (base) => ({
            ...base,
            backgroundColor: 'black',
            color: 'white',
        }),
        singleValue: (base) => ({
            ...base,
            color: 'white',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: 'black',
            color: 'white',
            padding: '16px'
        }),
        input: (base) => ({
            ...base,
            color: 'white',
        })

    };
    return (
        <Select
            options={equipment}
            components={{
                Option: CustomOption,
            }}
            styles={customStyles}
            onChange={handleChange}
        // value={value}
        />
    )
}

export default OptionsSelect