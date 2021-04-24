let state = {
    burgers: 0,
    fries: 0
};

function reducer(state, action){
    switch (action.type){
        case 'increment1':
            return {burgers: state.burgers + 1, fries: state.fries};
        case 'increment2':
            return {burgers: state.burgers, fries: state.fries + 1};
        case 'decrement1':
            return {burgers: state.burgers -1, fries: state.fries}
        case 'decrement2':
                return {burgers: state.burgers, fries: state.fries -1};
        default:
            throw new Error();

    }
}
export {state,reducer};
