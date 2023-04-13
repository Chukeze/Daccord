import {
  restaurant,
  fastdining,
  fastfood,
  grocery,
} from '../../../../../../assets/images/icons/icons'
import CategoryCSS from '../../../category/Category.module.css'
export const MealFinder = ({handleButtonClick, chosen}) => {
  return (
    <>
      <h1>Meal Finder</h1>
      <ul>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 0 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(0)}
        >
          <button>
            <img src={restaurant} alt="" className={CategoryCSS.icon} />
            Restaurants
          </button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 1 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(1)}
        >
          <button>
            <img src={fastfood} alt="Restaurant" className={CategoryCSS.icon} />
            Fast Food
          </button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 2 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(2)}
        >
          <button>
            <img src={fastdining} alt="" className={CategoryCSS.icon} />
            Fast Dining
          </button>
        </li>
        <li
          className={`${CategoryCSS.categorylist} ${
            chosen === 3 ? `${CategoryCSS.selected}` : ''
          } `}
          onClick={() => handleButtonClick(3)}
        >
          <button>
            <img src={grocery} alt="" className={CategoryCSS.icon} />
            Groceries
          </button>
        </li>
      </ul>
    </>
  )
}
