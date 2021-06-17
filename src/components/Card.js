import React from 'react'

const Card = (props) => {
    
    return (
      <div
        style={{
          ...styles.card,
          ...styles[props.size],
          backgroundColor: props.color,
        }}
      >
        <img
          className="card-img-top"
          alt={props.alt}
          data-src={props.data}
          src={
            "https://i.pinimg.com/originals/cd/0c/13/cd0c13629f217c1ab72c61d0664b3f99.jpg"
          }
          style={styles.Image}
        />
      </div>
    );
}

export default Card


const styles = {
  Image:{
    height:'100%',
    width:'100%'
  },
  card: {
    margin: "15px 5px",
    padding: 0,
    borderRadius: "16px",
    overflow:'hidden'
    
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};