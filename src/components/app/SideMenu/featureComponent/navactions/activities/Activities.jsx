import {
  activities,
  members,
  membersactivity,
} from '../../../../../../assets/images/icons/icons'
import CategoryCSS from '../../../category/Category.module.css'
export const Activities = ({handleButtonClick, chosen}) => {
  return (
    <>
      <h1>Activities Menu</h1>
      <ul>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 0 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(0)}
        >
          <img
            src={activities}
            alt="app activities"
            className={CategoryCSS.icon}
          />
          <button>General</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 1 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(1)}
        >
          <img
            src={membersactivity}
            alt="Member activities"
            className={CategoryCSS.icon}
          />
          <button>Activity</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 2 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(2)}
        >
          <img src={members} alt="members" className={CategoryCSS.icon} />
          <button>Members</button>
        </li>
      </ul>
    </>
  )
}
