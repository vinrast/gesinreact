import React from 'react'
import Exercise from '../components/Exercise'
import Welcome from '../components/Welcome'
import Button from '../components/Button'

class ExercisesList extends React.Component{
  state={
    data:[]
  }

  async componentDidMount() {
    await this.fetchExercises()
  }

  fetchExercises = async () =>{
    let res = await fetch('http://localhost:8000/api/exercises')
    let data = await res.json()
    this.setState({
      data
    })
    //console.log(res_form)
  }

  render(){
    return (
      <div>
          <Welcome
            user="Vincen"
          />
          <Exercise
            data= { this.state.data }
          />
        <Button/>
      </div>
    )
  }
}

export default ExercisesList
