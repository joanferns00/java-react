import React, {Component} from 'react';
import {render} from 'react-dom';
import ListElement from './components/ListElement';

import '../css/style.css';
import keenImage from '../assets/img1.png';
import arrData from '../data/products.json'

export default class Hello extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue : '', 
      displayData: [],
      highlightIndex: 1
     };
  }

  /**
  Function to handle the change in input value
  **/
  handleInputChange(e){
    //Update the state of the input value
    this.setState({inputValue: e.target.value});

    //Update the result array
    this.setState({displayData : e.target.value === ' ' || e.target.value === '' ? [] : this.filterResults(e.target.value)})
    
  }

  handleClick(index, event){
    console.log(index);
  }

  handleKeyPressChange(event){

    if(event.keyCode === 38){
      console.log('keyup');
      //Highlight the first li element
      this.setState({highlightIndex: this.state.highlightIndex-1})

    }
    if(event.keyCode === 40){
      console.log('keydown');
      this.setState({highlightIndex: this.state.highlightIndex+1})

    }  
  }

  /**
  Function to filter the results
  **/
  filterResults(value){
      return arrData.products.filter((currentValue, index, arr) => currentValue['name'].indexOf(value)!==-1)
  }

  /**
  Function to render the list
  **/
  /*    onMouseLeave={this.toggleHover.bind(this)}
    onMouseEnter={this.toggleHover.bind(this)}*/
  /*renderList(){
    const listItems = this.state.displayData.map((item, index, arr) =>
    <li style={{listStyleType: 'none', paddingTop: 5, paddingBottom: 5, margin: 0, borderWidth: 1, borderColor: 'red', borderStyle: 'solid',
    backgroundColor: this.state.linkHover ? 'blue' : 'red', cursor: 'pointer'}} 
    key={index}
    onClick={this.handleClick.bind(this, index)}
    ><a href="#">{item['name']}</a></li>);
    return (<ul style={{ position: 'relative', top: 0, padding: 0, margin: 0}}>{listItems}</ul>);
  }*/

  renderList(){
    //If the highlightIndex === index, add a class name to change the text color.
    const listItems = this.state.displayData.map((item, index, arr) => <ListElement 
      key={index} 
      value={item['name']} 
      highlightValue={this.state.highlightIndex}/>);
    return (<div>
      <p>Search Suggestions</p>
      <ul>{listItems}</ul></div>);    
  }

  /**
  Components render function
  **/
  render(){
    return (<div>
              <input type='text' 
              value={this.state.inputValue} 
              placeholder='Enter a value' 
              onChange={this.handleInputChange.bind(this)}
              onKeyDown={this.handleKeyPressChange.bind(this)}/>
              {this.renderList()}
            </div>)
  }
}

  render(<Hello/>, document.getElementById('app'));
/*      <p>Hello from React123!</p>
              
              <img src={keenImage} alt="Commander Keen"/>*/