import SimpleControl from './SimpleControl';
import classnames from 'classnames';
import schema from '../constants/schema';

const Container = () => {
    const renderSection = aSection => {
        const {
            title,
            controls,
            group,
            type,
            sectionId,
        } = aSection;

        const sectionClassNames = classnames ({
            'dataminr-dashboard__section col-xs-12': true,
            'dataminr-dashboard__section--grouped': group,
            'col-sm-12': type === 'simple',
            'col-sm-6 col-md-4': type === 'compound',
        });

        return (
            <div
                className={sectionClassNames}
                key={sectionId + '-' + title}
            >
                <h1>{title}</h1>
                <div className='row'>
                    {controls.map(aControl => (
                        <SimpleControl
                            section={sectionId}
                            type={type}
                            key={aControl.id}
                            {...aControl}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className='dataminr-dashboard__container col-xs-12'>
            {schema.sections.map(renderSection)}
        </div>
    )
}

export default Container;