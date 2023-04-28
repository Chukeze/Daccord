import { game, grocery } from "../../../assets/images/icons/icons"
import './Members.css'
export const Member = () => {
  return (
    <li className='member'>
        <div className="member__image"><img src={game} alt="member" /></div>
        <div className="member__name">
            <h2>name</h2>
            <p>2 mins ago</p>
        </div>
    </li>
  )
}