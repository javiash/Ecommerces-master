import React from 'react';

import { Button, Card } from 'react-bootstrap';


class ABookContainer extends React.Component {



	render() {
		return (

			<div>
				<div> <h1>titulo del libro</h1> </div>


				<div className='bookContainer'>
					<div>
						<Card style={{ width: '20rem' }}>
							<div>
								<Card.Img variant="top" src="/Images/Carusel 1.jpg" />
							</div>
						</Card>
					</div>

					<div>
						<Card style={{ width: '30rem' }}>

							<Card.Body>
								<Card.Title>Data of the book</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
    						</Card.Text>
							</Card.Body>
						</Card>
					</div>

					<div>
						<Card style={{ width: '20rem' }}>

							<Card.Body>
								<Card.Title>shopping cart</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the bulk of
									the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>

					</div>
				</div>
			</div>
		)
	}

}
export default ABookContainer;



















