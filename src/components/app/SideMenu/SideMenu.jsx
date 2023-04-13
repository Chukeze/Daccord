import { useState } from 'react'

import { Action } from "./action/Action";
import { Category } from "./category/Category"
import { Sidebar } from "./sidebar/Sidebar"
import Menu from './SideMenu.module.css';
export const SideMenu = () => {
    const [selected, setSelected] = useState(null)
    const handleItemClick = (index) => {
      setSelected(index)
    }
  return (
    <header>
        <Sidebar handleItemClick={handleItemClick} selected={selected}/>
        <Category selected={selected}/>
        <Action/>
    </header>
  )
}