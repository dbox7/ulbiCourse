import { FC, PropsWithChildren, useState } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";

import cls from './Sidebar.module.scss';

interface SidebarProps extends PropsWithChildren {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(prev => !prev)
  }

  return ( 
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={handleCollapse}>Скрыть</button>
    </div>
  );
}