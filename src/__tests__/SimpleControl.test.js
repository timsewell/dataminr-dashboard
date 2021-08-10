import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { DMProvider } from '../DMContext';
import schemaMock from '../__mocks__/schema.mock';
import SimpleControl from '../components/SimpleControl';

const mockState = {
    state: schemaMock,
    dispatch: jest.fn()
};

describe('<SimpleControl>', () => {
    it('renders correctly', () => {
        let el;

        const container = render(
            <DMProvider value={mockState}>
                <SimpleControl { ...schemaMock['1'] } />
            </DMProvider>);

        el = container.baseElement;

        const label = !!screen.getByText(schemaMock['1'].label);

        const openSwitch = el
            .getElementsByClassName('dataminr-dashboard__simple-control' +
                '__switch--on');

        const body = el
            .getElementsByClassName('dataminr-dashboard__simple-control__body');

        expect(body.length).toEqual(1);

        expect(label).toBe(true);

        expect(openSwitch.length).toEqual(1);
    });
});