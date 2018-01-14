import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  //Render: componentWillMount() -> render() -> componentDidMount()
  //Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callAPI();
    this.setState({
      movies
    });
  };

  _callAPI = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
          rating={movie.rating}
        />
      );
    });

    return movies;
  };

  _renderLoading = () => {
    return (
      <img
        src="https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724"
        alt="loading"
      />
    );
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : this._renderLoading()}
      </div>
    );
  }
}

export default App;
