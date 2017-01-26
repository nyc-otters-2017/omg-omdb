class Search extends React.Component {
  constructor() {
    super()
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.getMovies()
  }

  render(){
    return(
      <form action="" onSubmit={this.handleSubmit.bind(this)}>
        <input id="search-bar" type="text" name="title" />
        <input type="submit" value="searchTitle"/>
      </form>
    )
  }
}
