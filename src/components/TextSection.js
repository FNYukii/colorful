import '../styles/textSection.css'

function TextSection(props) {

  let imageContainer = '';
  if (props.isLarge) {
    imageContainer = 'large-container';
  } else {
    imageContainer = 'small-container';
  }
  
  return (
    <div className="section">
      <div className={imageContainer}>
        <img src={props.photo} className="trigger-to-popup-modal" alt=''/>
      </div>
      <div className="small-container">
        <h2>{props.title}</h2>
        <p style={{whiteSpace: 'pre-line'}}>{props.text}</p>
      </div>
    </div>
  )
}

export default TextSection;