import SidebarCSS from './Sidebar.module.css'
import {
  logo,
  logoimg1,
  logoimg2,
  logoimg3,
  iconadd,
  iconexplore,
} from '../../../../assets/images/icons/icons'
import { useState } from 'react'
export const Sidebar = () => {
  const [selected, setSelected] = useState(null)
  const handleItemClick = (index) => {
    setSelected(index)
  }
  return (
    <article className={SidebarCSS.Sidebar}>
      <div className={SidebarCSS.logo}>
        <img src={logo} alt="Daccord" />
      </div>
      <span className={SidebarCSS.bar}>
        <nav>
          <ul className={SidebarCSS.bar__nav__items}>
            {/**
             *  UpToSpeed: If you see () in any explanation it mean in the context of. meaning if the explanation was about 
             *            A function or an element  then our explanation is just referencing that in the context of that function
             *  Goal: Add a selected class to what button gets click and then load up it's respective content in the 
             * 
             * Code Explanation: handleItemClick function get invoked when the respective li(navaction items) is clicked and then on clicking 
             *                    inside the function it run the updating of the state. In the respective child component that is rendered when
             *                   the item is clicked, we use the selected state to conditionally render the menu items 
             * 
             * Future Improvement: Pass this to be handle by a State manager like redux. Also using a context object to handle passing thhematic 
             * concept on loading necessary data through the useContext hook and then wrap around a provider to pass values
             */}
            <li
              className={`
            ${SidebarCSS.navactions}
            ${selected === 0 ? `${SidebarCSS.selected}` : ''}
            `}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(0)
              }}
            >
              <a href="">
                <img src={logoimg1} alt="" className={SidebarCSS.icon} />
              </a>
            </li>
            <li
              className={`
            ${SidebarCSS.navactions}
            ${selected === 1 ? `${SidebarCSS.selected}` : ''}
            `}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(1)
              }}
            >
              <a href="">
                <img src={logoimg2} alt="Food" className={SidebarCSS.icon} />
              </a>
            </li>
            <li
              className={`
            ${SidebarCSS.navactions}
            ${selected === 2 ? `${SidebarCSS.selected}` : ''}
            `}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(2)
              }}
            >
              <a href="">
                <img src={logoimg3} alt="Activities" className={SidebarCSS.icon} />
              </a>
            </li>
            <li
              className={`
            ${SidebarCSS.navactions}
            ${selected === 3 ? `${SidebarCSS.selected}` : ''}
            `}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(3)
              }}
            >
              <a href="">
                <img src={iconexplore} alt="Communities" className={SidebarCSS.icon} />
              </a>
            </li>
            <li
              className={`
            ${SidebarCSS.navactions}
            ${selected === 4 ? `${SidebarCSS.selected}` : ''}
            `}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(4)
              }}
            >
              <a href="">
                <img src={iconadd} alt="" className={SidebarCSS.icon} />
              </a>
            </li>
          </ul>
        </nav>
      </span>
    </article>
  )
}
