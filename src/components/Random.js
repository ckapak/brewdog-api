import React from 'react'
import axios from 'axios'

class Random extends React.Component {

  state = { 
    randomBeer: null
  }

  async getRandomBeer() {
    try {
      const res = await axios.get('https://api.punkapi.com/v2/beers/random')
      this.setState({ beer: res.data[0] })
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="container has-text-centered">
        <h1 className="title is-1">Feeling lucky, punk?</h1>
        <p className="subtitle is-3">Stuck for choice? Press the beer randomiser button below.</p>
        <button className="button is-dark is-large" onClick={() => this.getRandomBeer()}>Beer randomiser</button>
        { this.state.beer &&
          <p className="title is-1">{this.state.beer.name}</p>
        }
      </div>   
    )

  }
}

export default Random