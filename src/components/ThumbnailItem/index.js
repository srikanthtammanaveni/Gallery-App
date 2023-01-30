// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, updateImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? `img active` : `thumbnail`
  const onUpdate = () => {
    updateImage(id)
  }

  return (
    <li key={imageDetails.id} className="thumbnail-item">
      <button className="button" onClick={onUpdate}>
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
