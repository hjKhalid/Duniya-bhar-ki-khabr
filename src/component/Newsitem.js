import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
   let {title,description,imageurl,Link}=this.props;
    return (
      <>
        <div className='container my-3'>
          <div className="card" style={{width:"18rem"}} >
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className='card-title'>{title}</h5>
              <p className="card-text">{description}</p>
              <a href={Link} className='btn sm btn-primary'> read more</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Newsitem