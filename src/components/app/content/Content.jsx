import { Community } from './views/Community'
import './Content.css'
import { Finder } from './views/Finder'
export const Content = ({ selectedPageIndex, isReveal, loading }) => {

  return (
    <section>
      <header id="searchHeader">
        <div className="search">
          <img src="" alt="" />
          <input type="search" placeholder="Explore" />
        </div>
      </header>
      <main id="contentcontainer">
        {/*{selectedPageIndex === 4 ? (
          <Finder isReveal={isReveal} />
        ): null}*/}
        <Community loading={loading}/>
        <Finder/>
        

        {/*{selectedPageIndex === 0 ? (
          <Community isReveal={isReveal} />
        ): null}*/}
      </main>
    </section>
  )
}
