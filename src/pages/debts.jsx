import React, { Fragment } from 'react'
import Cart from '../components/cart/cart'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'

const Debts = ({debts , handleSearch , search, deleteHendle, show , handleClose , handleShow , debt , handleDebt , handleSubmit}) => {
  const SearchDebts = debts.filter((el)=>el.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <Fragment>
      <div className="container">
        <InputGroup className="mb-3">
          <Form.Control
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
          />
          <InputGroup.Text id="basic-addon2">
            <button className='btn btn-primary' onClick={handleShow}>Add debt</button>
          </InputGroup.Text>
        </InputGroup>
      </div>
      <section className='mt-5'>
        <div className="container">
          {
            SearchDebts.map((el,i)=>(
              <Cart deleteHendle={deleteHendle} key={i} {...el} />
            ))
          }
        </div>
      </section>
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={handleDebt} value={debt.name} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="debt">
              <Form.Label>Debt</Form.Label>
              <Form.Control onChange={handleDebt} value={debt.debt} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control onChange={handleDebt} value={debt.phone} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descraption">
              <Form.Label>Desctraption</Form.Label>
              <Form.Control onChange={handleDebt} value={debt.descraption} type="text" />
            </Form.Group>
            <Button className='me-3' variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
    </Fragment>
  )
}

export default Debts