import { Button } from '../src/components/Button'
import {render, screen} from '@testing-library/react'

describe('Button component', () =>{
  it('should render children correctly', () => {
    render(<Button>Colaborar</Button>)

    expect(screen.getByText('Colaborar')).toBeInTheDocument();
  })
})