import { useReducer, createContext } from 'react';
import schema from './constants/schema';

const allControls = {};

export const DMContext = createContext();

const extractControls = aSection => {
    const controls = aSection.controls;

    if (controls) {
        controls.forEach(aControl => {
            const children = aControl.children;

            if (children) {
                extractControls({ controls: children });
            }
            allControls[aControl.id] = aControl;
        });
    }
}

schema.sections.forEach(extractControls);

// IRL would be an API call, of course.
let storedState = JSON.parse(localStorage.getItem('storedDashboard'));

const initialState = { ...allControls, ...storedState };

const reducer = (state, aAction) => {
    let ret;
    console.log(aAction)
    switch (aAction.type) {
        case 'UPDATE_DASHBOARD_DROPDOWN':
            console.log(aAction)
            ret = {
                ...state,
                [aAction.id]: {
                    ...state[aAction.id],
                    dropdown: {
                        ...state[aAction.id].dropdown,
                        value: aAction.value,
                    }
                }
            };
            break;
        default:
            ret = {
                ...state,
                [aAction.id]: {
                    ...state[aAction.id],
                    value: aAction.switchState
                }
            };
    }
    storedState = ret;

    // IRL would be an API call, of course.
    localStorage.setItem('storedDashboard', JSON.stringify(ret));
    return ret;
};

export const DMProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <DMContext.Provider value={value}>
            {props.children}
        </DMContext.Provider>
    );

}