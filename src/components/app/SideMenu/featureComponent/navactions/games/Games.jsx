import {
  classicgames,
  actiongames,
  adventuregames,
} from '../../../../../../assets/images/icons/icons'
import CategoryCSS from '../../../category/Category.module.css'
export const Games = ({handleButtonClick, chosen, filter}) => {
  return (
    <>
      <h1>Games</h1>
      <ul>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 0 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(0)}
        >
          <img src={classicgames} alt="" className={CategoryCSS.icon} />
          <button>Classic Game</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 1 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(1)}
        >
          <img src={actiongames} alt="" className={CategoryCSS.icon} />
          <button>Action</button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 2 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(2)}
        >
          <img src={adventuregames} alt="" className={CategoryCSS.icon} />
          <button>Adventure</button>
        </li>
      </ul>
    </>
  )
}
