import {screen} from '@testing-library/react'
import RenderWithTranslation from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation'
import { Navbar } from './Navbar'
import { MemoryRouter } from 'react-router-dom'

describe('Navbar test', () => {
  test('Navbar render', () => {
    RenderWithTranslation(<MemoryRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}><Navbar /></MemoryRouter>)
    expect(screen.getByTestId('Navbar')).toBeInTheDocument()
  })
})