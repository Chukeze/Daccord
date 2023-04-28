
import { MembersList } from "./MembersList"
import './Members.css'
export const Members = () => {
  return (
    <article>
        <div className="members__heading">
            <h1>New Members</h1>
            <p>See All</p>
        </div>
        <MembersList />
    </article>
  )
}