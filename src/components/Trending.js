import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";


export default function Trending() {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">        
                        <Card className="text-white bg-dark movieImage">
                        <Image src={duneImage} alt="Card image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1">
                                    <Card.Title className="text-center">DUNE</Card.Title>
                                        <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">        
                        <Card className="text-white bg-dark movieImage">
                        <Image src={everythingImage} alt="Card image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1">
                                    <Card.Title className="text-center">EVERYTHING</Card.Title>
                                        <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">        
                        <Card className="text-white bg-dark movieImage">
                        <Image src={infiniteImage} alt="Card image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1">
                                    <Card.Title className="text-center">INFINITE</Card.Title>
                                        <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">        
                        <Card className="text-white bg-dark movieImage">
                        <Image src={jokerImage} alt="Card image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1">
                                    <Card.Title className="text-center">JOKER</Card.Title>
                                        <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col><Col md={4} className="movieWrapper">        
                        <Card className="text-white bg-dark movieImage">
                        <Image src={lightyearImage} alt="Card image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1">
                                    <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                                        <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col><Col md={4} className="movieWrapper">        
                        <Card className="text-white bg-dark movieImage">
                        <Image src={morbiusImage} alt="Card image" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1">
                                    <Card.Title className="text-center">MORBIUS</Card.Title>
                                        <Card.Text className="text-left">
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}