let state = {
    count : 0,
}

let previousState = state;


// mutating state //

function increased() {
    state.count = state.count + 1

    // state = {count: state.count + 1};
}

increased()


console.log(state);
increased()

console.log(state);
increased()

console.log(state);
