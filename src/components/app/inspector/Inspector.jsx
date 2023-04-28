import { Members } from './Members'
import InspectorCSS from './Inspector.module.css'
import {
  user,
  mail,
  notification,
  setting,
  chat,
} from '../../../assets/images/icons/icons'
export const Inspector = () => {
  return (
    <article className={InspectorCSS.inspector}>
      <nav className={InspectorCSS.inspector__ulitity}>
        <ul>
          <li>
            <a>
              <img src={notification} alt="notification" />
            </a>
          </li>
          <li>
            <a>
              <img src={chat} alt="Messenger" />
            </a>
          </li>
          <li>
            <a>
              <img src={mail} alt="Mail" />
            </a>
          </li>
          <li>
            <a>
              <img src={setting} alt="Settings" />
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <div className={InspectorCSS.image_bg}>
          <img src={user} alt="" className={InspectorCSS.image} />
        </div>
        <div className={InspectorCSS.user_info}>
          <h2 className={InspectorCSS.name}>Stephanie Marks</h2>
          <p className={InspectorCSS.tag}>@stephmarks</p>
        </div>
      </div>
      <Members />
    </article>
  )
}
