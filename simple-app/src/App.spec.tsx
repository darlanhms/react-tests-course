import {render, screen} from '@testing-library/react'
import App from './App'

describe('Test App', () => {
    it('should render App with a link', () => {
        render(<App/>);

        const linkElement = screen.getByTestId('learn-link') as HTMLLinkElement;
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.href).toMatch('reactjs.org');
    })
})