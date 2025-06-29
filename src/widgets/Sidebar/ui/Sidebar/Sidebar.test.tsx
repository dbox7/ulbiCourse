import {fireEvent, screen} from '@testing-library/react'
import { Sidebar } from './Sidebar'
import RenderWithTranslation from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation'
import cls from './Sidebar.module.scss'

describe('Sidebar test', () => {
  test('Sidebar render', () => {
    RenderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    RenderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('SidebarToggle');
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('Sidebar')).toHaveClass(cls.collapsed)
  })
})