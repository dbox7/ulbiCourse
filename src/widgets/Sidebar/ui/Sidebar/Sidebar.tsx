import { FC, PropsWithChildren, useState } from "react";
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss';
import { CustomButton } from "shared/ui/CustomButton";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps extends PropsWithChildren<{}> {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(prev => !prev)
  }

  return ( 
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])} data-testid='Sidebar'>
      <CustomButton onClick={handleCollapse} className={cls.collapseButton} data-testid='SidebarToggle'>Скрыть</CustomButton>
      <div className={cls.sidebarFooter}>
        <LangSwitcher />
      </div>
    </div>
  );
}