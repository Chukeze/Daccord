import { useState } from 'react'

import { Action } from './action/Action'
import { Category } from './category/Category'
import { Sidebar } from './sidebar/Sidebar'
import Menu from './SideMenu.module.css'
//export const SideMenu = (handlePageSelect, showView }) => {
export const SideMenu = ({display, setLoading}) => {
  const [selected, setSelected] = useState([])
  const handleItemClick = (index) => {
    setSelected(index)
  }
  return (
    <header className={Menu.menu}>
      <Sidebar handleItemClick={handleItemClick} selected={selected} />
      {/*<Sidebar handleItemClick={handleItemClick} selected={selected} display={display}/> */}
      {/*<Category selected={selected} handlePageSelect={handlePageSelect} showView={showView} />*/}
      <Category selected={selected} display={display} setLoading={setLoading} />
      <Action />
    </header>
  )
}
