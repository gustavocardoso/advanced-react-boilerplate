import { render, screen } from '@testing-library/react'

import Screen from '.'

describe('<Screen />', () => {
  it('should render the heading', () => {
    const { container } = render(<Screen />)

    expect(screen.getByRole('heading', { name: /Screen/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
