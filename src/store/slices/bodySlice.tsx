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
                case BODY.LOWER_LEGS:
                    state.lowerLegsIsHovered = !state.lowerLegsIsHovered
                    break;
                case BODY.UPPER_LEGS:
                    state.upperLegsIsHovered = !state.upperLegsIsHovered
                    break;
                case BODY.CHEST:
                    state.chestIsHovered = !state.chestIsHovered
                    break;
                case BODY.BACK:
                    state.backIsHovered = !state.backIsHovered
                    break;
                case BODY.NECK:
                    state.neckIsHovered = !state.neckIsHovered
                    break;
                case BODY.ABS:
                    state.absIsHovered = !state.absIsHovered
                    break;
                case BODY.SHOULDERS:
                    state.shouldersIsHovered = !state.shouldersIsHovered
                    break;
                case BODY.LOWER_ARMS:
                    state.lowerArmsIsHovered = !state.lowerArmsIsHovered
                    break;
                case BODY.UPPER_ARMS:
                    state.upperArmsIsHovered = !state.upperArmsIsHovered
                    break;
                default:
                    break;
            }
        },
    },
});

export { bodySlice }




