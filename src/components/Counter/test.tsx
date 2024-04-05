import { act } from 'react-dom/test-utils'

import Counter from '.'
import { render, screen } from '../../utils/test-utils'

describe('Counter', () => {
  it('should render correctly', () => {
    act(() => {
      render(<Counter label="Contador em" primary />)
    })

    const counter = screen.getByTestId('counter-view')
    const button = screen.getByRole('button', { name: /Contador em/i })

    expect(counter).toHaveTextContent('0')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(counter).toHaveTextContent('1')

    screen.logTestingPlaygroundURL()
  })
})
