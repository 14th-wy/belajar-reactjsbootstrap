import {Col, Container, Row, Button} from "react-bootstrap";


export default function intro() {
    return(
        <div className='intro'>
        <Container className="text-white d-flex text-center justify-content-center align-items-center">
          <Row>
            <Col>
            <div className='title'>NONTON GRATIS</div>
            <div className='title'>GAK PAKE KARCIS</div>
            <div className='introButton mt-4 text-center'>
                <Button variant="dark">Lihat Semua Movies</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}