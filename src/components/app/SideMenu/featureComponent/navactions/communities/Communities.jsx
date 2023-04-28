import CommunitiesCSS from './Communities.module.css'
import CategoryCSS from '../../../category/Category.module.css'
import {
  home,
  music,
  education,
  entertainment,
  studenthub,
  game,
  tech,
} from '../../../../../../assets/images/icons/icons'

import { Content } from '../../../../content/Content'
import { useState } from 'react'
/*export const Communities = ({
  chosen,
  filter,
  handleButtonClick,
  handlePageSelect,
  showView
}) => {*/
export const Communities = ({
  chosen,
  filter,
  handleButtonClick,
  setLoading,
  display,
}) => {
  return (
    <>
      <h1>Communities</h1>
      <ul>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 0 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => {
            handleButtonClick(0)
            //handlePageSelect(0)
            //showView(true)
            setLoading(false)
            display(92)
            console.log('hit communities nav action display home community')
          }}
        >
          <img src={home} alt="" id={CommunitiesCSS.home} />
          <button>Home</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 1 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(1)}
        >
          <img src={music} alt="" className={CategoryCSS.icon} />
          <button>Music</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 2 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(2)}
        >
          <img src={education} alt="" className={CategoryCSS.icon} />
          <button>Education</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 3 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(3)}
        >
          <img src={game} alt="" className={CategoryCSS.icon} />
          <button>Gaming</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 4 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(4)}
        >
          <img src={tech} alt="" className={CategoryCSS.icon} />
          <button>Science & Tech</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 5 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(5)}
        >
          <img src={entertainment} alt="" className={CategoryCSS.icon} />
          <button>Entertainment</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 6 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(6)}
        >
          <img src={studenthub} alt="" className={CategoryCSS.icon} />
          <button>Student Hub</button>
        </li>
      </ul>
    </>
  )
}
