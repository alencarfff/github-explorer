import React from 'react';
import Repository from '../../pages/RepositoryPage';
import { render } from '@testing-library/react';

jest.mock('react-router-dom', () => {
    return {
        useRouteMatch: jest.fn(),
        Link: ({ children }: { children: React.ReactNode }) => children,
    }
})

describe('Repository page', () => {
    it('it should to render page', () => {
        const { debug } = render(<Repository />)
    
        debug()
    })
});