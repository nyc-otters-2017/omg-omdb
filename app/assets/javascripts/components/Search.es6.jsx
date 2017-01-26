class Search extends React.Component {
  constructor() {
    super()
  }

  handleSubmit(event){
    let searchBox = this.refs.searchBar
    event.preventDefault();
    this.props.getMovies(searchBox.value)
    searchBox.value = ''
  }

  handleChange(event){
    console.log(event)
    let searchBox = this.refs.searchBar
    this.props.getMovies(searchBox.value)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input ref='searchBar' id="search-bar" type="text" name="title" onChange={this.handleChange.bind(this)} />
        <input type="submit" value="searchTitle"/>
      </form>
    )
  }
}
