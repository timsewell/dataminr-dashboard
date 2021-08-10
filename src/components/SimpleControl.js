import '../scss/SimpleControl.scss';
import { useState, useEffect, useContext } from 'react';
import classnames from 'classnames';
import { DMContext} from '../DMContext';
import NumberDropdown from './NumberDropdown';

const SimpleControl = props => {
    const [switchState, setSwitchState] = useState(false);

    const { state, dispatch } = useContext(DMContext);

    const {
        grouped,
        type,
        children,
        id,
        dropdown,
        indicator,
    } = props;

    const switchClassNames = classnames({
        'dataminr-dashboard__simple-control__switch': true,
        'dataminr-dashboard__simple-control__switch--on': switchState,
        'dataminr-dashboard__simple-control__switch--indent': indicator,
    });

    const wrapperClassNames = classnames({
        'dataminr-dashboard__simple-control col-xs-12': true,
        'dataminr-dashboard__simple-control--on': switchState,
        'dataminr-dashboard__simple-control--grouped': grouped,
        'col-sm-6 col-md-6 col-lg-4': type === 'simple',
        'dataminr-dashboard__simple-control--child': props.child,
        'dataminr-dashboard__simple-control--condensed': props.condensed,
        'dataminr-dashboard__simple-control--expanded': children && switchState,
    });

    const bodyClassNames = classnames({
        'dataminr-dashboard__simple-control__body': true,
        'dataminr-dashboard__simple-control__body--grouped': grouped,
    });

    const indicatorClassNames = classnames({
        'dataminr-dashboard__simple-control__indicator': true,
        'dataminr-dashboard__simple-control__indicator--open': switchState,
    });

    const onClick = () => {
        dispatch({
            action: 'UPDATE_DASHBOARD',
            id: id,
            switchState: !switchState,
        });
        setSwitchState(!switchState);
    }

    useEffect(() => {
        setSwitchState(state[id].value);
    }, []);

    return <div className={wrapperClassNames}>
        <div className={bodyClassNames}>
            <div className='dataminr-dashboard__simple-control__label'>
                {props.label}
            </div>
            {dropdown && <NumberDropdown {...dropdown} id={id} />}
            <div
                className={switchClassNames}
                onClick={onClick}
            />
            {indicator && <div className={indicatorClassNames} />}
        </div>
        {children && switchState &&
            children.map(aChild => (
                <SimpleControl
                    key={aChild.id}
                    child={true}
                    type={type}
                    {...aChild}
                />
            ))
        }
    </div>
}

export default SimpleControl;