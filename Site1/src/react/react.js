import ReactDOM from 'react-dom';
import { createStore, Reducer } from 'redux';
import { App } from './router';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const changeLang = 'changeLang';

function stateCondition() {

    const url = window.location.href
    let initialState = {
        boolean: ''
    }

    if (!url.includes('/en')) {
        initialState = {
            boolean: false
        }
        return initialState
    }

    else {
        initialState = {
            boolean: true
        }
        return initialState
    }

}

export const updateLang = (ownstate) => ({
    type: changeLang,
    ownstate
})

const rootReducer = (state = stateCondition(), action) => {
    switch (action.type) {
        case changeLang:
            return {
                ...state,
                boolean: action.ownstate
            }
        default:
            return state
    }
}

export const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);