import { render } from '@testing-library/react';
import React from 'react';
import { DMProvider } from '../DMContext';
import App from '../components/App';
import schemaMock from '../__mocks__/schema.mock';

const mockState = {
    state: schemaMock,
    dispatch: jest.fn()
};

describe('<App>', () => {
    it('renders the correct number of visible controls', () => {
        let el;

        const container = render(
            <DMProvider value={mockState}>
                <App />
            </DMProvider>);

        el = container.baseElement;

        const controls = el
            .getElementsByClassName('dataminr-dashboard__simple-control');

        const length = Object.keys(schemaMock).length - Object
            .keys(schemaMock['8'].children).length;

        expect(controls.length).toEqual(length);
    });
});

