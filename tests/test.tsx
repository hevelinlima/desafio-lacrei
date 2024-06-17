import Home from '@/pages'
import {render, screen} from '@testing-library/react'

describe('<Home  />', () =>{
  it('should render index page', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Olá, você está na Lacrei Saúde/i }))
      .toBeInTheDocument()
  })
})