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

  render(){
    return(
      <form action="" onSubmit={this.handleSubmit.bind(this)}>
        <input ref='searchBar' id="search-bar" type="text" name="title" />
        <input type="submit" value="searchTitle"/>
      </form>
    )
  }
}
