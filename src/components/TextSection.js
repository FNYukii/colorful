import '../styles/textSection.css'

function TextSection(props) {

  function imageContainer() {
    let imageContainer = '';
    if (props.isLarge) {
      imageContainer = 'large-container';
    } else {
      imageContainer = 'small-container';
    }
    return imageContainer
  }

  function titleElement() {
    let titleElement 
    if (props.isLarge) {
      titleElement = <h1>{props.title}</h1>
    } else {
      titleElement = <h2>{props.title}</h2>
    }
    return titleElement
  }
  
  return (
    <div className="section">
      <div className={imageContainer()}>
        <img src={props.photo} className="trigger-to-popup-modal" alt=''/>
      </div>
      <div className="small-container">
        {titleElement()}
        <p style={{whiteSpace: 'pre-line'}}>{props.text}</p>
      </div>
    </div>
  )
}

export default TextSection;