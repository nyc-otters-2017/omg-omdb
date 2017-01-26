class ResultContainer extends React.Component {

  render(){
    return (
      <section id="results">
        <ul>
          {
            this.props.movieResults.map((movie, i)=>{
              return <Result key={i} movieInfo={movie}/>
            })
          }
        </ul>
      </section>
    )
  }
}
