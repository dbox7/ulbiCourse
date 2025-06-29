import { CustomButton } from "./CustomButton"
import {render, screen} from '@testing-library/react'

describe('Button test', () => {
  test('Button render', () => {
    render(<CustomButton >Test</CustomButton>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})