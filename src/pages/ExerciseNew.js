import React from 'react'
import Card from '../components/Card'
import ExerciseForm from '../components/ExerciseForm'

class ExerciseNew extends React.Component{
  state = {
    form:{
      title:"",
      description:"",
      ColorLeft:"",
      ColorRight:"",
      img:""
    }
  }

  handleChange = e =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value
      }
    })
  }

  render(){
       return (
         <div className="row">
           <div className="col-sm">
             <Card
               { ...this.state.form }
               />
           </div>
           <div className="col-sm">
             <ExerciseForm
               onChange={ this.handleChange }
               form={ this.state.form }
            />
           </div>
         </div>
       )
   }
}

export default ExerciseNew
