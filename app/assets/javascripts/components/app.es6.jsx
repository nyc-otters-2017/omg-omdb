class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: [] }
  }

  componentDidMount(){

  }

  getMovies(){
    $.ajax({
      url: 'http://www.omdbapi.com/?s=hachi'
    })
     .done(response =>{
       console.log(response)
     })
    console.log('hello')
  }

  render(){
    return(
      <div id='app'>
        <h1>OMGdb</h1>
        <p>Just another imbd clone... search your movie title below...</p>
        <Search getMovies={this.getMovies}/>
        <ResultContainer />
      </div>
    )
  }
}
