import CategoryCSS from './Category.module.css'
import {
  explore,
} from '../../../../assets/images/icons/icons'
import { Communities } from '../featureComponent/navactions/communities/Communities'

export const Category = () => {
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
        <Communities/>
      </>
    </nav>
  )
}
