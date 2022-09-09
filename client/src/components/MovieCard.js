import React, { useContext } from 'react';

// import bootstrap-react components
import { Accordion, AccordionContext, Button, Card, ResponsiveEmbed, Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

// import utils
import Auth from '../utils/auth';
import { useFantinderContext } from "../utils/GlobalState";

const MovieCard = (props) => {
    const [state, ] = useFantinderContext();
    const { likedMovies, dislikedMovies } = state;
    const {
        movie,
        displayTrailer,
        likeMovieHandler,
        dislikeMovieHandler,
        skipMovieHandler,
        displaySkip
    } = props;

    function ContextAwareToggle({ eventKey, callback }) {
        const currentEventKey = useContext(AccordionContext);
    
        const decoratedOnClick = useAccordionToggle(
            eventKey,
            () => callback && callback(eventKey),
        );
    
        const isCurrentEventKey = currentEventKey === eventKey;
      
        return (
            <Button
                variant="link"
                className={`link ${isCurrentEventKey ? 'text-muted' : '' }`}
                onClick={decoratedOnClick}
            >
                {isCurrentEventKey
                ?   <span className="small">Collapse <i className="fas fa-chevron-up"></i></span>
                :   <span className="small">Click for details <i className="fas fa-chevron-down"></i></span>
                }
            </Button>
        );
    }      

    return (
        movie
        ?   <Accordion>
            <Card>
                {displayTrailer && movie.trailer
                    ? <ResponsiveEmbed aspectRatio="16by9">
                        <iframe
                            title={movie._id}
                            width="560"
                            height="315"
                            src={movie.trailer}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </ResponsiveEmbed>
                    : (movie.poster && <Card.Img src={movie.poster} alt={`The cover for ${movie.title}`} variant='top' />)
                }
                <Card.Body>
                    <Card.Title>
                        {movie.title}
                    </Card.Title>
                    <Row>
                        <Col sm={6}>
                            { movie.rating >= 0
                            ?   <StarRatings
                                    rating={movie.rating/2}
                                    numberOfStars={5}
                                    name={`${movie._id}-rating`}
                                    starDimension="20px"
                                    starSpacing="1px"
                                />
                            :   null
                            }
                            <Card.Text className="small">
                            ({movie.voteCount?.toLocaleString()} ratings)
                            </Card.Text>
                        </Col>
                        <Col className="text-right">
                            <ContextAwareToggle eventKey={movie._id} />
                        </Col>
                    </Row>
                </Card.Body>
                    <Accordion.Collapse eventKey={movie._id}>
                        <Card.Body>
                            <Card.Text>Plot Summary</Card.Text>
                            <Card.Text className='small'>{movie.overview}</Card.Text>
                            <Card.Text className='small'>Release Date: {movie.releaseDate}</Card.Text>
                            <Card.Text className='small'>
                                {`${movie.likedUsers.length} ${movie.likedUsers.length === 1 ? 'user' : 'users'} liked this movie`}
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>

                {Auth.loggedIn()
                ?   <Card.Footer className="d-flex justify-content-between">
                        <Button
                            className="movie-card-button"
                            disabled={dislikedMovies?.some(dislikedMovie => dislikedMovie._id === movie._id)}
                            variant={dislikedMovies?.some(dislikedMovie => dislikedMovie._id === movie._id) ? "outline-secondary" : "outline-danger"}
                            onClick={() => dislikeMovieHandler(movie)}>
                                {dislikedMovies?.some(dislikedMovie => dislikedMovie._id === movie._id)
                                ? <span>Disliked!</span>
                                : <i className='far fa-thumbs-down fa-2x' />}
                        </Button>
                        <Button
                            className="movie-card-button"
                            disabled={likedMovies?.some(likedMovie => likedMovie._id === movie._id)}
                            variant={likedMovies?.some(likedMovie => likedMovie._id === movie._id) ? "outline-secondary" : "outline-success"}
                            onClick={() => likeMovieHandler(movie)}>
                                {likedMovies?.some(likedMovie => likedMovie._id === movie._id)
                                ? <span>Liked!</span>
                                : <i className='far fa-thumbs-up fa-2x' />}
                        </Button>
                    </Card.Footer>
                :   displaySkip &&
                        <Card.Footer className="text-center">
                            <Button
                                className="movie-card-button"
                                size="lg"
                                onClick={skipMovieHandler}>
                                    Next Movie
                            </Button>
                        </Card.Footer>
                }
                </Card>
            </Accordion>
        :   null
    )
}

export default MovieCard;