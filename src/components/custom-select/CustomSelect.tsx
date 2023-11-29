import React from 'react'
import { IOption } from '../../types';
import Select, { GroupBase, OptionProps, StylesConfig } from 'react-select';
import { equipment } from '../../utils/constants';
import { useActions } from '../../hooks/useActions';


const CustomOption: React.FC<OptionProps<IOption>> = ({ innerProps, label }) => {
    return (
        <div className='select-option' {...innerProps}>
            <span>{label}</span>
        </div>
    );
};
const OptionsSelect: React.FC = () => {
    const { setEquipment } = useActions()

    const customStyles: StylesConfig<any, boolean, GroupBase<IOption>> = {
        control: (base) => ({
            ...base,
            backgroundColor: 'black',
            color: 'white',
            maxWidth: '600px',
        }),
        singleValue: (base) => ({
            ...base,
            color: 'white',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: 'black',
            color: 'white',
            padding: '16px',
        }),
        input: (base) => ({
            ...base,
            color: 'white',
        })

    };
    return (
        <Select className='options__select'
            options={equipment}
            components={{
                Option: CustomOption,
            }}
            styles={customStyles}
            onChange={(newValue) => {
                if (newValue) setEquipment(newValue.value)
                else setEquipment('')
            }}
            isClearable
            placeholder={'equipment'}
        />
    )
}

export default OptionsSelect