import React from 'react'
class BodyCo extends React.Component{
constructor(props){
    // constructor is place to initialise the state also best place to create state
    //right place to create state
    
    super(props)//always first line of class base component
    this.state ={
        count: 0,
        count2: 2,
    }
}
componentDidMount(){
   //best place to call api
   //the componenet how render will be --1)constructor 2)render 3)component did mount will call 
   //This will call after component render 
}
componentDidUpdate(prevProps,prevState){
    //it will call when we change something from page like once component unmounted then this will call
    // like using setState or New props or forceUpadte()
    //in useEffect we have dependencies array like this here in didUpdate we need to write
}

    render(){
        const {count}=this.state
        return(
            <div>
                <h2>Class base component {"  "}</h2>
                <h2>{this.props.name}</h2>
                <h2>Count:{count}</h2>
                <h2>Count2:{this.state.count2}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:count+1,
                        count2:4,
                    })
                }}> SetCount</button>
            </div>
        )
    }
} 
export default  BodyCo

class Name extends React.Component{
    render(){
        return(
            <>
            </>
        )
    }
}