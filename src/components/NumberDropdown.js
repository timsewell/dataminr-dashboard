import { useState, useEffect, useContext } from 'react';
import { DMContext } from '../DMContext';
import '../scss/NumberDropdown.scss';
import classnames from 'classnames';

const NumberDropDown = props => {
    const [selected, setSelected] = useState(0);

    const [open, setOpen] = useState(false);

    const { state, dispatch } = useContext(DMContext);

    const onDropdownClick = () => {
        setOpen(!open);
    }

    const onOptionClick = (aValue, aEvent) => {
        aEvent.stopPropagation();
        dispatch({
            type: 'UPDATE_DASHBOARD_DROPDOWN',
            id: props.id,
            value: aValue,
        });
        setSelected(aValue);
        setOpen(false);
    }

    const dropdownClassNames = classnames({
        'dataminr-dashboard__dropdown': true,
        'dataminr-dashboard__dropdown--open': open,
    });

    useEffect(() => {
        setSelected(state[props.id].dropdown.value)
    }, []);

    return (
        <div
            className={dropdownClassNames}
            onClick={onDropdownClick}
        >
            {open && (
                <ul className='dataminr-dashboard__dropdown__options'>
                    {props.options.map(aOption => {
                        const classNames = classnames({
                            'dataminr-dashboard__dropdown__option': true,
                            'dataminr-dashboard__dropdown__option--selected':
                                selected === aOption,
                        });
                        return (
                            <li
                                className={classNames}
                                key={aOption}
                                data-option={aOption}
                                onClick={onOptionClick.bind({}, aOption)}
                            >
                                {aOption}
                            </li>
                        )
                    })}
                </ul>
            )}
            {!open &&
            <div
                className='dataminr-dashboard__dropdown__option
                dataminr-dashboard__dropdown__option--selected'
            >
                {selected}
            </div>}
        </div>
    )
}

export default NumberDropDown;