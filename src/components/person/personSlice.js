import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const personAdapter = createEntityAdapter();

const initialState = personAdapter.getInitialState({
    activePerson: 1,
    filterPerson: ''
});

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        personChanged: (state, action) => { state.activePerson = action.payload; },
        filterPerson: (state, action) => { state.filterPerson = action.payload; }
    }
});

const { actions, reducer } = personSlice;

export default reducer;

export const {
    filterPerson,
    personChanged
} = actions;