class Result extends React.Component {
  constructor() {
    super()
  }

  render(){
    let {Poster, Title, Type, Year, imdbID} = this.props.movieInfo
    return(
      <li>
        <strong>Title: {Title}</strong>
        <p>Year: {Year}</p>
        <p>imdbID: {imdbID}</p>
        <img src={Poster} alt='No Pic' />
        <a href={`/movies/${imdbID}`}>Movie Link</a>
      </li>
    )
  }
}
