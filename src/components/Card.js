import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, name, image_url, tagline }) => (
  
  <div key={id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/beer/${id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={image_url} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="title is-6">{tagline}</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default Card