"use client";
import React, { FC } from 'react';
// Import only the icons you actually use to enable tree-shaking
//each icon bghinaha we sould add it here to use it in any component
import { 
  Home, 
  User, 
  Search, 
  Settings, 
  Bell, 
  Menu, 
  FolderClosed, 
  Kanban, 
  LogOut 
} from 'lucide-react';

const iconMap = {
  Home,
  User,
  Search,
  Settings,
  Bell,
  Menu,
  FolderClosed,
  Kanban,
  LogOut,
};


interface IconProps {
  /**
   * Only include keys for your imported icons
   */
  name: keyof typeof iconMap;
  size?: number;
  color?: string;
  className?: string;
}


const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color = 'black',
  className = '',
}) => {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;