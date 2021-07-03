import React, { Component } from 'react'
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io'
import './styles.css'
const styles={
  transition:'all 1s ease-out',
  height:'100vh',
  width:'50vw',
  // overflow:'clip'
}
export class VerticalCarousel extends Component {
  state={
    count:0,
    translateY:0,
    upward:false
  }
 handlePrevious=()=>{
//   if(this.state.count>this.props.images.length){
//     //max limit reached can't go next set to initial
//  }else{
  if(this.state.count< this.props.images.length-1){
    //max limit reached can't go next set to initial
    
    this.setState({
      count:this.state.count+1,
      translateY:-100*(this.state.count+1),
      upward:false
    })
  
  }else{
    //can do decrement
    this.setState({
      count:0,
      translateY:0,
      upward:false
    })
  }
 }
 handleNext=()=>{
   let h=100;
   if(this.state.count >=this.props.images.length-1){
    //max limit reached can't go next set to initial
    this.setState({
      count:0,
      translateY:0,
      upward:false
    })
   
  
  }else{
    //can do decrement
    this.setState({
      count:this.state.count+1,
      translateY:-100*(this.state.count+1),
      upward:false
    })
  }

  // this.setState({count:this.state.count*100>== this.props.images.length*100?100:this.state.count-100} 
 }
  render() {
    return (
      <div style={{height:'100vh', width:'50vw', overflow:'hidden'}}>
        <div  
        className="vertical-carousel-btn-up"
         onClick={()=>this.handlePrevious()}>
          <IoMdArrowDropup size={25} color={'white'}/>
        
          </div>
       
        <div style={{...styles,transform:'translateY('+this.state.translateY +'vh)'}}>
        <img style={{height:'100vh',width:'100%'}} src={this.props.images[0].original}/>
        <img style={{height:'100vh',width:'100%'}} src={this.props.images[1].original}/>
        <img style={{height:'100vh', width:'100%'}} src={this.props.images[2].original}/>
        </div>
        <div 
        className="vertical-carousel-btn-down"
        onClick={()=>this.handleNext()}>
          <IoMdArrowDropdown size={25} color={'white'}/>
        </div>
      </div>
    )
  }
}

export default VerticalCarousel
