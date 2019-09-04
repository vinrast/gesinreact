import React from 'react'
import '../styles/Card.css'
import CircleImg from '../images/circles.png'

class Card extends React.Component {
  render() {
    return (
      <div className="card mx-auto Fitness-Card"
        style={{
          backgroundImage:`url(${ CircleImg }), linear-gradient(to right, ${this.props.ColorLeft}, ${this.props.ColorRight})` 
        }}>
        <div className="card-body">
          <div className="row center">
            <div className="col-4">
              <img src={this.props.img} className="float-right" width="100" height="100"/>
            </div>
            <div className="col-8 Fitness-Card-Info">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
