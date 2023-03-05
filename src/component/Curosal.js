import React from 'react'

const Curosal = (props) => {
  return (
    <div>
        <div class="carousel-item">
  <img src={props.imageUrl} alt={props.alt}/>
  <div class="carousel-caption d-none d-md-block">
    <h5>{props.title}</h5>
    <p>{props.description}</p>
  </div>
</div>
    </div>
  )
}

export default Curosal