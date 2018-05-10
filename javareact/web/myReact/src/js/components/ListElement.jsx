import React, {Component} from 'react';
import {render} from 'react-dom';

export default class ListElement extends Component{
  constructor(props){
    super(props);
    this.state = {
      linkHover: false
    };
  }

  /**
  Function to toggle the state of the link 
  **/
  toggleHover(e){
    this.setState({linkHover: !this.state.linkHover})
  }  


  render(){
   // return (<li key={this.props.index}><a href="#">{this.props.itemName}</a></li>)
   return (<li style={{listStyleType: 'none', paddingTop: 5, paddingBottom: 5, margin: 0, borderWidth: 1, borderColor: 'red', borderStyle: 'solid',
    backgroundColor: this.state.linkHover ? 'blue' : 'red', cursor: 'pointer'}} 
    onMouseLeave={this.toggleHover.bind(this)}
    onMouseEnter={this.toggleHover.bind(this)}
    ><a href="#">{this.props.value}</a></li>)
  }

}