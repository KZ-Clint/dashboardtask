import styles from '../../styles/Productitem/Subtitlesection.module.css';


export default function Subtitlesection () {

  

  return (
    <>
      <div className={styles.subtitle_section_wrapper} >
          <div>
              <h3> Description </h3>
              <h3> Additional Information </h3>
              <h3> Reviews {'(0)'} </h3>
          </div>
      </div>
    </>
  )
}