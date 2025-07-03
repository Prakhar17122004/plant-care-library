import React, { useEffect, useState } from 'react'
import PlantCard from './components/Plantcard'
import SearchAndFilter from './components/SearchAndFilter'
import PlantDetailModal from './components/PlantDetailModal'
import './App.css'

function App() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')
  const [selectedPlant, setSelectedPlant] = useState(null)

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => setPlants(data))
  }, [])

  const filteredPlants = plants.filter(plant =>
    plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter ? plant.careLevel === filter : true)
  )

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">🌿 Plant Care Library 🌿</h1>
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="row">
        {filteredPlants.map(plant => (
          <div className="col-md-4 mb-3" key={plant.id}>
            <PlantCard plant={plant} onClick={() => setSelectedPlant(plant)} />
          </div>
        ))}
      </div>
      {selectedPlant && (
        <PlantDetailModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}
    </div>
  )
}

export default App
