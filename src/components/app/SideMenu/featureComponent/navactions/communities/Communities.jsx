import CommunitiesCSS from './Communities.module.css';
import {
  home,
  music,
  education,
  entertainment,
  studenthub,
  game,
  tech,
} from '../../../../../../assets/images/icons/icons'
export const Communities = () => {
  return (
    <ul>
      <li className={CommunitiesCSS.categorylist}>
        <img src={home} alt="" id={CommunitiesCSS.home} />
        <a href="">Home</a>
      </li>
      <li className={CommunitiesCSS.categorylist}>
        <img src={music} alt="" className={CommunitiesCSS.icon} />
        <a href="">Music</a>
      </li>
      <li className={CommunitiesCSS.categorylist}>
        <img src={education} alt="" className={CommunitiesCSS.icon} />
        <a href="">Education</a>
      </li>
      <li className={CommunitiesCSS.categorylist}>
        <img src={game} alt="" className={CommunitiesCSS.icon} />
        <a href="">Gaming</a>
      </li>
      <li className={CommunitiesCSS.categorylist}>
        <img src={tech} alt="" className={CommunitiesCSS.icon} />
        <a href="">Science & Tech</a>
      </li>
      <li className={CommunitiesCSS.categorylist}>
        <img src={entertainment} alt="" className={CommunitiesCSS.icon} />
        <a href="">Entertainment</a>
      </li>
      <li className={CommunitiesCSS.categorylist}>
        <img src={studenthub} alt="" className={CommunitiesCSS.icon} />
        <a href="">Student Hub</a>
      </li>
    </ul>
  )
}