import { SideMenu } from '../../components/app/SideMenu/SideMenu'
import { Content } from '../../components/app/content/Content'
import { Inspector } from '../../components/app/inspector/Inspector'
import './daccord.css'
import { useState } from 'react'
export const Daccord = () => {
  //const [selectedPageIndex, setSelectedPageIndex] = useState([])
  //const [isRevealed, setIsRevealed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [viewing, setViewing] = useState([])
  const [value, setValue] = useState(0)

  const view = []
  const views = () => {
    const _viewArray = document.querySelectorAll('content')
    view.push(..._viewArray)
    setViewing(view);
  }
  viewing[value]
  const display = (index) => {
    
    if (loading === false) {
      setValue(index)
    }
    setLoading(false)
  }

  /*const showView = (statuses) => {
    if(isRevealed === false) {
      setIsRevealed(statuses);
      return
    }
    setIsRevealed(false)
  }
  const handlePageSelect = (pageIndex) => {
    if(isRevealed === true){
      setSelectedPageIndex(pageIndex)
    }
  }
  console.log(isRevealed)
  console.log(`the page selected is ${selectedPageIndex}`)*/
  return (
    <div className="app">
      {/*<SideMenu handlePageSelect={handlePageSelect} showView={showView} />
      <Content selectedPageIndex={selectedPageIndex} isRevealed={isRevealed} />*/}
      <SideMenu display={display} setLoading={setLoading} />
      <Content loading={loading} />
      <Inspector />
    </div>
  )
}
