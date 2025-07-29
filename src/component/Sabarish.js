import React from "react"
class Sabarish extends React.Component{
    constructor(props, bag){
        super()
            this.state={
                name:"pranish",
                age:"20"
            }

            this.setState={
                name:"sabarish"
            }
        
    }
    render(){
        return(
            <>
            <h1>{this.setState.name}</h1>
            <p>{this.props.name1}</p>
            </>
        )
    }
}
export default Sabarish