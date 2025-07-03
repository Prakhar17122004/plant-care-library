import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function PlantDetailModal({ plant, onClose }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{plant.commonName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={plant.image} alt={plant.commonName} className="img-fluid mb-3" />
        <h6><em>{plant.scientificName}</em></h6>
        <p>{plant.description}</p>
        <span className="badge bg-success">{plant.careLevel}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PlantDetailModal
