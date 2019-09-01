import React from 'react'
import Card from '../components/Card'

class Exercise extends React.Component {
  render(){
    return(
      <div>
        { this.props.data.map((exercise) => {
            return(
              <Card
                key={ exercise.id }
                title={ exercise.title }
                description={ exercise.description }
                img={ exercise.img }
                colorLeft={ exercise.leftColor }
                colorRight={ exercise.rightColor}/>
            )
          }
        )}
      </div>
    )
  }
}

export default Exercise
