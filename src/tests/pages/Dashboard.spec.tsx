import React from 'react';
import Dashboard from '../../pages/Dashboard';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => {
    return {
        Link: ({ children }: { children: React.ReactNode }) => children,
    }
})

describe('Dashboard page', () => {
    it('it should to render page', () => {
        const { debug } = render(<Dashboard />)
    
        debug()
    })
});