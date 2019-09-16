import React from 'react'


import './App.css'
import Cardlist from './components/CardList/CardList'
import Pagination from './components/Pagination/Pagination'
import Navbar from './components/Navbar/Navbar'

const words = [
  [ 'русский', 'английский', 'кто-то', 'someone' ],
  [ 'английский', 'русский', 'collide', 'сталкиваться' ],
  [ 'английский', 'русский', 'convince', 'убеждать' ],
  [ 'английский', 'русский', 'propagate', 'размножать' ],
  [ 'английский', 'русский', 'sophisticated', 'утонченный' ],
  [ 'английский', 'русский', 'unleashing', 'развязывание' ],
  [ 'английский', 'русский', 'canvas', 'холст' ],
  [ 'английский', 'русский', 'slice', 'ломтик' ],
  [ 'английский', 'русский', 'tenant.', 'арендатор.' ]
]

class App extends React.Component {

  state = {
    words: [], 
    currentPage: 1,
    wordsPerPage: 24
    
}


handleForce = data => {
  console.log(data);
  this.setState({words: data})
};

paginate = pageNumber => this.setState({currentPage: pageNumber})



render() {
  const { currentPage, wordsPerPage, words } = this.state;
  const indexOfLastPost = currentPage * wordsPerPage;
  const indexOfFirstPost = indexOfLastPost - wordsPerPage;
  const currentWords = words.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="App">
        <Navbar  onFileLoaded={this.handleForce}/>
        <div className="container">
        {/* <CSVReader
          cssClass="react-csv-input"
          label="Select CSV"
          onFileLoaded={this.handleForce}
        /> */}
      </div>
      <Cardlist words={currentWords}/>
      <Pagination wordsPerPage={wordsPerPage} totalWords={words.length} paginate={this.paginate}/>
      
    
  </div>
  )
}
}

export default App;
