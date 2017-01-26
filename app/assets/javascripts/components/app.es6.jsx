class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: [] }
    this.getMovies = this.getMovies.bind(this)
  }

  componentDidMount(){
  }

  getMovies(){
    $.ajax({
      url: 'http://www.omdbapi.com/?s=hachi'
    })
     .done(movies =>{
       this.setState({movies: movies.Search})
      //  console.log(this.state.movies)
     })
  }

  render(){
    console.log(this.state.movies)
    return(
      <div id='app'>
        <h1>OMGdb</h1>
        <p>Just another imbd clone... search your movie title below...</p>
        <Search getMovies={this.getMovies}/>
        <ResultContainer movieResults={this.state.movies}/>
      </div>
    )
  }
}
