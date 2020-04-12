import React from 'react'
import axios from 'axios'

class Show extends React.Component {

  state = { 
    beer: null 
  }

  async componentDidMount() {
    const beerId = this.props.match.params.id

    try {
      const res = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`)
      this.setState({ beer: res.data[0] })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { beer } = this.state
    console.log(beer)
    return (
        <>
          <div className="show columns is-spaced">
            { beer &&  
            <div className="column">
              <p className="notification is-primary subtitle is-2">{beer.name}</p>
              <div className="columns is-mobile">
                <div className="column">
                  <p className="notification is-primary subtitle is-3">You have selected...</p>
                  <figure className="image">
                    <img src={beer.image_url} alt={beer.name} />
                  </figure>
                </div>
                <div className="column">
                  <p className="notification is-primary subtitle is-3">About</p>
                  <h4 className="title is-4">What we think</h4>
                  <p>{beer.tagline}</p>
                  <hr />
                  <h4 className="title is-4">Description</h4>
                  <p>{beer.description}</p>
                  <hr />
                  <h4 className="title is-4">ABV</h4>
                  <p>{beer.abv}%</p>
                  <hr />
                  <h4 className="title is-4">Food Pairing</h4>
                  <p>{beer.food_pairing}</p>
                  <hr />
                </div>
              </div>
            </div>
            }
          </div>
      </>
    )
  }
}


export default Show


// {text.map(word => {
//   return (
//     <p>{word}</p>