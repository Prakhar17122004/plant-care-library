import React from 'react'
import Card from 'react-bootstrap/Card'

function PlantCard({ plant, onClick }) {
  return (
    <Card onClick={onClick} className="plant-card" style={{ cursor: 'pointer' }}>
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={plant.image}
          alt={plant.commonName}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <Card.Body>
        <Card.Title>{plant.commonName}</Card.Title>
        <Card.Text><em>{plant.scientificName}</em></Card.Text>
        <span className="badge bg-success">{plant.careLevel}</span>
      </Card.Body>
    </Card>
  )
}

export default PlantCard
