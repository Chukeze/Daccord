import {
  badge,
  user,
  mic,
  deafen,
  addinguser,
} from '../../../../assets/images/icons/icons'
import ActionCSS from './Action.module.css'
export const Action = () => {
  return (
    <>
      <div className={ActionCSS.currentAction}></div>
      <div className={ActionCSS.actionbar}>
        <div className={ActionCSS.badge}>
          <img src={badge} alt="" />
          <h3 id={ActionCSS.level}></h3>
        </div>
        <div className={ActionCSS.user}>
          <img src={user} alt="user" />
          <h3 id={ActionCSS.name}></h3>
        </div>
        <div className="actions">
          <button>
            <img src={mic} alt="mic" />
          </button>
          <button>
            <img src={deafen} alt="headphone" />
          </button>
          <button>
            <img src={addinguser} alt="add friends" />
          </button>
        </div>
      </div>
    </>
  )
}
