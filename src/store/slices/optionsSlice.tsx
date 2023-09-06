import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BODY } from '../../utils/constants';

interface IState {
    HoveredBody: BODY | null
    isBodyPartsShown: boolean
    selectedOptions: {
        [key: string]: string;
    },
}
const initialState: IState = {
    HoveredBody: null,
    isBodyPartsShown: false,
    selectedOptions: {
        bodyPart: ''
    },
}
const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setIsHovered(state: IState, action: PayloadAction<BODY | null>) {
            state.HoveredBody = action.payload
        },
        onOptionClick(state: IState, action: PayloadAction<{ title: string, name: keyof typeof state.selectedOptions }>) {
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
        toggleIsBodyPartShown(state: IState) {
            state.isBodyPartsShown = !state.isBodyPartsShown
        },
    },
},
);

export { optionsSlice }




