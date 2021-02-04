import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   //creating the unordered list
    let responseHTML = '<ul>';
   //iterate over the list
    this.props.menu.forEach( (item) => {
  // declared a list element 
      var element = '<li>';
  //taking each item in the menu and adding to the list before closing
      element = element + item + '</li>';
      //putting the indivdual elements into the unordered list container
      responseHTML = responseHTML + element;
    });
    //finishing syntex and closing unordered list
    responseHTML = responseHTML + '</ul>';
  
    return responseHTML;
  }
}

export default Sidebar;
