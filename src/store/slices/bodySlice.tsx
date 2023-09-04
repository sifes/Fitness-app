import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BODY } from '../../utils/constants';

interface IState {
    lowerLegsIsHovered: boolean,
    upperLegsIsHovered: boolean,
    chestIsHovered: boolean,
    backIsHovered: boolean,
    neckIsHovered: boolean,
    absIsHovered: boolean,
    shouldersIsHovered: boolean,
    lowerArmsIsHovered: boolean,
    upperArmsIsHovered: boolean,
}
const initialState: IState = {
    lowerLegsIsHovered: false,
    upperLegsIsHovered: false,
    chestIsHovered: false,
    backIsHovered: false,
    neckIsHovered: false,
    absIsHovered: false,
    shouldersIsHovered: false,
    lowerArmsIsHovered: false,
    upperArmsIsHovered: false,
}
const bodySlice = createSlice({
    name: 'body',
    initialState,
    reducers: {
        setIsHovered(state: IState, action: PayloadAction<string>) {
            switch (action.payload) {
                case BODY.LOWERLEGS:
                    state.lowerLegsIsHovered = !state.lowerLegsIsHovered
                    break;
                default:
                    break;
            }
        },
    },
});

export { bodySlice }




