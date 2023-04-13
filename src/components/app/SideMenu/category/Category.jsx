import CategoryCSS from './Category.module.css'
import { explore } from '../../../../assets/images/icons/icons'
import { Communities } from '../featureComponent/navactions/communities/Communities'
import { MealFinder } from '../featureComponent/navactions/mealFinder/MealFinder'
import { Games } from '../featureComponent/navactions/games/Games'
import { Activities } from '../featureComponent/navactions/activities/Activities'
import { Favorites } from '../featureComponent/navactions/favorites/Favorites'
import { useState } from 'react'

export const Category = ({ selected }) => {
  const [filter, setFilter] = useState()
  const [chosen, setChosen] = useState(0)
  const handleButtonClick = (index) => {
    setChosen(index)
    setFilter()
  }
  return (
    <nav className={CategoryCSS.category}>
      <div className={CategoryCSS.navheader}>
        <img
          src={explore}
          alt="logoalt"
          className={CategoryCSS.icon}
          id={CategoryCSS.explore}
        />
        <h1>Explore</h1>
      </div>
      <>
        {selected === 0 ? (
          <Games
            filter={filter}
            chosen={chosen}
            handleButtonClick={handleButtonClick}
          />
        ) : null}
        {selected === 1 ? (
          <MealFinder
            filter={filter}
            chosen={chosen}
            handleButtonClick={handleButtonClick}
          />
        ) : null}
        {selected === 2 ? (
          <Activities
            filter={filter}
            chosen={chosen}
            handleButtonClick={handleButtonClick}
          />
        ) : null}
        {selected === 3 ? (
          <Communities
            filter={filter}
            chosen={chosen}
            handleButtonClick={handleButtonClick}
          />
        ) : null}
        {selected === 4 ? <Favorites /> : null}
      </>
    </nav>
  )
}
