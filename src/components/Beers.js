import React from 'react'
import axios from 'axios'
import Card from './Card'

class Beers extends React.Component {
  
  state = { 
    beers: [] 
  }

  async componentDidMount()  {
    console.log('ComponentDidMount in Index has run')
    try {
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      this.setState({ beers: response.data })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.beers.map(beer =>( 
              <Card key={beer.id} {...beer}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Beers