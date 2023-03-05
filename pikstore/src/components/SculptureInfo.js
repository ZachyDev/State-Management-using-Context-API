import React, {useContext,useState} from 'react'
import { DataContext } from '../context/Data'
function SculptureInfo() {
    // call useContext
    const {sculptures} = useContext(DataContext)

    // initialize state
    const [index,setIndex] = useState(0);
    const [showMore,setShowMore] = useState(false);

    // handle next button
    const handleNext = () => {
        setIndex(index => index+1);
    }
    // handle show more button
    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    let sculpture = sculptures[index]
  return (
    <div>
        <button onClick={handleNext}>Next</button>
        <h4>{sculpture.name} by {sculpture.artist}</h4>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <button onClick={handleShowMore}>{showMore ? 'Hide' : 'Show'} Details</button>
        {showMore && sculpture.description}
        <h5>Page {index + 1 } of {sculptures.length}</h5>
    </div>
  )
}

export default SculptureInfo