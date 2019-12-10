import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Card, CardDeck} from 'react-bootstrap';

class Landing extends Component {
  render () {
    return (
      <div className="landing">
        <div className="landing-inner text-dark">
          <div className="container">
            {/* <div className="row"> */}
            <div className="col-md-12 text-center">
              <h5>
                Welcome to AfriMuisc, we are constantly updating our library
                with a host of Native and International songs.{' '}
                <Link to="/search">search now</Link>{' '}
                <p>
                  Our community provides translations as well as insights behind
                  lyrics. Haven't joined our community yet?{' '}
                  <Link to="/register">click here</Link>{' '}
                </p>{' '}
              </h5>

              <CardDeck>
                <Card
                  bg="dark"
                  text="white"
                  tag="a"
                  onClick={<Link> </Link>}
                  style={{cursor: 'pointer'}}
                >
                  <Card.Img variant="top" src={require ('../../img/1.png')} />
                  <Card.Body>
                    <Card.Title>Latest Additions</Card.Title>
                    <Card.Text>Check out new songs!</Card.Text>
                    <Card.Link href="#">register</Card.Link>
                  </Card.Body>
                </Card>
                <Card bg="dark" text="white">
                  <Card.Img variant="top" src={require ('../../img/2.png')} />
                  <Card.Body>
                    <Card.Title>Trending Now!</Card.Title>
                    <Card.Text>
                      Most requested songs in the last week.
                    </Card.Text>
                    <Card.Link href="#">trending</Card.Link>
                  </Card.Body>
                </Card>
                <Card bg="dark" text="white">
                  <Card.Img variant="top" src={require ('../../img/3.png')} />
                  <Card.Body>
                    <Card.Title>Feeling Lucky</Card.Title>
                    <Card.Text>Discover a new song today!</Card.Text>
                    <Card.Link href="#">lucky</Card.Link>
                  </Card.Body>
                </Card>
              </CardDeck>

              {/* <Card style={{width: '18rem'}}>
              <Card.Img variant="top" src={require ('../../img/1.png')} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card> */}

              {/* <Card style={{width: '18rem'}}>
              <Card.Img variant="top" src="../../img/1.png/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
            </Card> */}

              <hr />
              {/* <Link to="/register" className="btn btn-lg btn-info mr-2">
                      Sign Up
                    </Link>
                    <Link to="/login" className="btn btn-lg btn-light">
                      Login
                    </Link> */}
            </div>
          </div>
        </div>
      </div>
    );

    // </div>
  }
}

export default connect () (Landing);
