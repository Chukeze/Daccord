import CommunityCSS from './Community.module.css'
import { cards } from '../../../../../data'
import { totalmembericon } from '../../../../assets/images/icons/icons'

export const Community = ({ isReveal,loading }) => {
      if (loading) {
        return (
          <section>
            {' '}
            <h2>Loading...</h2>
          </section>
        )
      }
  return (
    <section className="content" id="community">
      {/*{isReveal ? (

        <>
          <div className={CommunityCSS.banner}>
            <p>Find Your Community On D'accord</p>
          </div>
          <div className={CommunityCSS.featuredcommunity}>
            <header>
              <h1>Featured Community</h1>
              <p>See All</p>
            </header>
            <div className={CommunityCSS.featuredcommunity__content}>
              {cards &&
                cards.map((card) => {
                  return card.id === 'feature' ? (
                    <article
                      className={`${CommunityCSS.card}`}
                      style={{
                        backgroundImage: `url(${card.backgroundimage})`,
                        backgroundSize: 'cover',
                      }}
                      key={card.name}
                      id={CommunityCSS.featured}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${card.curtainimage})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          height: '75%',
                          width: '100%',
                          borderRadius: '25px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '0',
                        }}
                      >
                        <h2>{card.name}</h2>
                        <p></p>
                        <div>
                          <div className={CommunityCSS.total}>
                            <img
                              src=""
                              alt=""
                              className={CommunityCSS.onlinemembers}
                            />
                            <p>{card.online} Online</p>
                          </div>
                          <div className={CommunityCSS.total}>
                            <img
                              className={`${CommunityCSS.membericon}`}
                              src={totalmembericon}
                              alt="members"
                            />
                            <p>{card.members} Members</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ) : (
                    <></>
                  )
                })}
            </div>
          </div>
          <div className={CommunityCSS.featuredcommunity}>
            <header>
              <h1>Popular Right Now</h1>
              <p>See All</p>
            </header>
            <div className={CommunityCSS.featuredcommunity__content}>
              {cards &&
                cards.map((card) => {
                  return card.id === 'popular' ? (
                    <article
                      className={`${CommunityCSS.gameplay}  ${CommunityCSS.card}`}
                      id={CommunityCSS.popular}
                      style={{
                        backgroundImage: `url(${card.backgroundimage})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                      }}
                      key={card.name}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${card.curtainimage})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          height: '100%',
                          width: '68.5%',
                          borderRadius: '25px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '0',
                        }}
                      >
                        <h2>{card.name}</h2>
                        <p>{card.info}</p>
                        <div>
                          <div className={CommunityCSS.total}>
                            <img
                              src={totalmembericon}
                              alt=""
                              className={`${CommunityCSS.membericon}`}
                            />
                            <p>{card.members} Members</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ) : (
                    <></>
                  )
                })}
            </div>
          </div>
          <div className={CommunityCSS.featuredcommunity}>
            <header>
              <h1>Recently Added</h1>
              <p>See All</p>
            </header>
            <div className={CommunityCSS.recentlyadded__content}>
              {cards &&
                cards.map((card) => {
                  return card.id === 'recent' ? (
                    <article
                      className={`${CommunityCSS.gameplay}  ${CommunityCSS.card}`}
                      style={{
                        backgroundImage: `${card.backgroundimage}`,
                        backgroundSize: 'cover',
                      }}
                      key={card.name}
                      id={CommunityCSS.recent}
                    >
                      <div>
                        <h2>{card.name}</h2>
                        <p>{card.info}</p>
                        <div>
                          <div className={CommunityCSS.total}>
                            <img
                              src={totalmembericon}
                              alt=""
                              className={`${CommunityCSS.membericon}`}
                            />
                            <p>{card.members} Members</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ) : (
                    <></>
                  )
                })}
            </div>
          </div>
        </>
              ) : null}*/}
     { loading===false ?  (<>
        <div className={CommunityCSS.banner}>
          <p>Find Your Community On D'accord</p>
        </div>
        <div className={CommunityCSS.featuredcommunity}>
          <header>
            <h1>Featured Community</h1>
            <p>See All</p>
          </header>
          <div className={CommunityCSS.featuredcommunity__content}>
            {cards &&
              cards.map((card) => {
                return card.id === 'feature' ? (
                  <article
                    className={`${CommunityCSS.card}`}
                    style={{
                      backgroundImage: `url(${card.backgroundimage})`,
                      backgroundSize: 'cover',
                    }}
                    key={card.name}
                    id={CommunityCSS.featured}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${card.curtainimage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '75%',
                        width: '100%',
                        borderRadius: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0',
                      }}
                    >
                      <h2>{card.name}</h2>
                      <p></p>
                      <div>
                        <div className={CommunityCSS.total}>
                          <img
                            src=""
                            alt=""
                            className={CommunityCSS.onlinemembers}
                          />
                          <p>{card.online} Online</p>
                        </div>
                        <div className={CommunityCSS.total}>
                          <img
                            className={`${CommunityCSS.membericon}`}
                            src={totalmembericon}
                            alt="members"
                          />
                          <p>{card.members} Members</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  <></>
                )
              })}
          </div>
        </div>
        <div className={CommunityCSS.featuredcommunity}>
          <header>
            <h1>Popular Right Now</h1>
            <p>See All</p>
          </header>
          <div className={CommunityCSS.featuredcommunity__content}>
            {cards &&
              cards.map((card) => {
                return card.id === 'popular' ? (
                  <article
                    className={`${CommunityCSS.gameplay}  ${CommunityCSS.card}`}
                    id={CommunityCSS.popular}
                    style={{
                      backgroundImage: `url(${card.backgroundimage})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                    }}
                    key={card.name}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${card.curtainimage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '100%',
                        width: '68.5%',
                        borderRadius: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0',
                      }}
                    >
                      <h2>{card.name}</h2>
                      <p>{card.info}</p>
                      <div>
                        <div className={CommunityCSS.total}>
                          <img
                            src={totalmembericon}
                            alt=""
                            className={`${CommunityCSS.membericon}`}
                          />
                          <p>{card.members} Members</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  <></>
                )
              })}
          </div>
        </div>
        <div className={CommunityCSS.featuredcommunity}>
          <header>
            <h1>Recently Added</h1>
            <p>See All</p>
          </header>
          <div className={CommunityCSS.recentlyadded__content}>
            {cards &&
              cards.map((card) => {
                return card.id === 'recent' ? (
                  <article
                    className={`${CommunityCSS.gameplay}  ${CommunityCSS.card}`}
                    style={{
                      backgroundImage: `${card.backgroundimage}`,
                      backgroundSize: 'cover',
                    }}
                    key={card.name}
                    id={CommunityCSS.recent}
                  >
                    <div>
                      <h2>{card.name}</h2>
                      <p>{card.info}</p>
                      <div>
                        <div className={CommunityCSS.total}>
                          <img
                            src={totalmembericon}
                            alt=""
                            className={`${CommunityCSS.membericon}`}
                          />
                          <p>{card.members} Members</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  <></>
                )
              })}
          </div>
        </div>
      </> ) : null}
    </section>
  )
}
