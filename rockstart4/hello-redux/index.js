var createStore = require('redux').createStore

var store = createStore(function(state = [], action ){

    if (action.type == "add") {
        return [ ...state, action.name]
    }else if (action.type == 'delete') {
        return state.filter(itemData => itemData != action.name)
    }

})

store.subscribe(function() {
    console.log(store.getState())
})

store.dispatch({type : 'add', name : 'Nyi',})
store.dispatch({type : 'add', name : 'Zaw',})
store.dispatch({type : 'add', name : 'Mg',})
store.dispatch({type : 'add', name : 'HEllo',age : '22'})
store.dispatch({type : 'delete', name : 'Zaw', age : '23'})
