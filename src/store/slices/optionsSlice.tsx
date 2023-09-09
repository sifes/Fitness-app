import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BODY } from '../../utils/constants';

interface IState {
    HoveredBody: BODY | null
    isOptionsShown: boolean
    selectedOptions: {
        [key: string]: string; // because i need it for slider value
    },
}
const initialState: IState = {
    HoveredBody: null,
    isOptionsShown: false,
    selectedOptions: {
        bodyPart: '',
        equipment: ''
    },
}
const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setIsHovered(state: IState, action: PayloadAction<BODY | null>) {
            state.HoveredBody = action.payload
        },
        setOptions(state: IState, action: PayloadAction<{ title: string, name: keyof typeof state.selectedOptions }>) {
            switch (action.payload.name) {
                case 'bodyPart':
                    if (state.selectedOptions.bodyPart === action.payload.title) {
                        state.selectedOptions.bodyPart = ''
                    } else {
                        state.selectedOptions.bodyPart = action.payload.title
                    }
                    break;
                default:
                    return state
            }
        },
        setEquipment(state: IState, action: PayloadAction<string>) {
            state.selectedOptions.equipment = action.payload
        },
        toggleIsBodyPartShown(state: IState) {
            state.isOptionsShown = !state.isOptionsShown
        },
    },
},
);

export { optionsSlice }




