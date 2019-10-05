import React from 'react'


import classes from './App.css'
import Cardlist from './components/CardList/CardList'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer'


const words = [
  [ 'русский', 'английский', 'кто-то', 'someone' ],
  [ 'английский', 'русский', 'collide', 'сталкиваться' ],
  [ 'английский', 'русский', 'convince', 'убеждать' ],
  [ 'английский', 'русский', 'propagate', 'размножать' ],
  [ 'английский', 'русский', 'sophisticated', 'утонченный' ],
  [ 'английский', 'русский', 'unleashing', 'развязывание' ],
  [ 'английский', 'русский', 'canvas', 'холст' ],
  [ 'английский', 'русский', 'slice', 'ломтик' ],
  [ 'английский', 'русский', 'tenant.', 'арендатор.' ],
  [ 'русский', 'английский', 'кто-то', 'someone' ],
  [ 'английский', 'русский', 'collide', 'сталкиваться' ],
  [ 'английский', 'русский', 'convince', 'убеждать' ],
  [ 'английский', 'русский', 'propagate', 'размножать' ],
  [ 'английский', 'русский', 'sophisticated', 'утонченный' ],
  [ 'английский', 'русский', 'unleashing', 'развязывание' ],
]

class App extends React.Component {

  state = {
    words: words, 
    showSideDrawer: false
}


handleForce = data => {
  console.log(data);
  this.setState({words: data})
};

sideDrawerClosedHandler = () => {
  this.setState({showSideDrawer: false})
}

sideDrawerToggleHandler = () => {
  this.setState((prevState) => {
    return { showSideDrawer: !prevState.showSideDrawer}
  })
}



render() {
  return (
    <div className={classes.App}>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <SideDrawer 
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler}
       
      />
      <Cardlist words={this.state.words} className={classes.Content}/>
  </div>
  )
}
}

export default App;
