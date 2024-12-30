import React from 'react';
import {beforeEach, afterEach, describe, it, test, expect,}  from '@jest/globals';
import { render } from '@testing-library/react-native';
import HomeScreen from '../components/HomeScreen';
import { jest } from '@jest/globals';


 

describe('App', () => {
    it('should render correctly', () => {
        const wrapper = render(<HomeScreen />); // This will throw an error if the component does not render correctly
        wrapper.getByTestId('home-screen')
    });
});

describe('Title section', () => {
    beforeEach(() => {
        jest.useFakeTimers({ legacyFakeTimers: false });
        jest.setSystemTime(946684800000); // 2000-01-01 00:00:00
    });



    afterEach(() => { jest.
        useRealTimers(); 

    });

    test('should contain current date', () => {
        const wrapper = render(<HomeScreen />);
        expect(wrapper.getByText('Jan 01, 2000')).toBeTruthy();

    });

});