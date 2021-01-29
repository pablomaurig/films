import React from 'react';
import styled from 'styled-components';

class Movies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            loading: true
        };
    }

    componentDidMount(){
        const fetchMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=32f4fa6af796c740c424ec6816c23dcd');
            const data = await response.json();
            console.log(data)
            this.setState({
                movies: data.results,
                loading: false
            })
        }
        fetchMovies();
    }
    
    render(){
        return <div>
            {this.state.loading
                ? `loading`
                : <Container>{this.state.movies.map((movie) => <Movie key={movie.id}>
                        <img src={`http://image.tmdb.org/t/p/w780${movie.backdrop_path}`} />
                        <div className="inner">
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date}</p>
                        </div>
                    </Movie>)}</Container>
            }
        </div>
    }
}

const Movie = styled.div`
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    margin: 0 10px 20px;
    width: calc(50% - 20px);
    img{
        width: 100%;
        margin: 0;
        border-radius: 16px 16px 0 0;
    }
    .inner{
        padding: 16px 26px 26px;
        h2{
            margin: 0 0 .5rem;
        }
        p{
            margin: 0;
        }
    }
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
`

export default Movies;