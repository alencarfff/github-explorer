import React from 'react';
import Dashboard from '../../pages/DashboardPage';
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

    it('it should to load a repositories list', () => {
        const {  } = render(<Dashboard />)
        
        
    })
}); 