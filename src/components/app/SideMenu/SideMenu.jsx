import { Action } from "./action/Action";
import { Category } from "./category/Category"
import { Sidebar } from "./sidebar/Sidebar"
import Menu from './SideMenu.module.css';
export const SideMenu = () => {
  return (
    <header>
        <Sidebar />
        <Category />
        <Action/>
    </header>
  )
}