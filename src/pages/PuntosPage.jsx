import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Coordenadas exactas del campus UNAC
const CENTER_UNAC = [6.240976794492619, -75.60937820077187];

// Límites para evitar que el usuario se pierda navegando fuera de la zona de la UNAC
const BOUNDS_UNAC = [
  [6.2360, -75.6140],
  [6.2460, -75.6040]
];

const createIcon = (color) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

const getMarkerIcon = (type) => {
  switch (type) {
    case 'Orgánicos': return createIcon('green');
    case 'Inorgánicos Reciclables': return createIcon('blue');
    case 'Peligrosos/RAEE': return createIcon('red');
    default: return createIcon('black');
  }
};

export default function PuntosPage() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');
  const [mapType, setMapType] = useState('satelite'); // 'normal' o 'satelite'

  useEffect(() => {
    fetch('/api/disposal-points')
      .then((res) => res.json())
      .then((data) => {
        setPoints(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error cargando puntos:', err);
        setLoading(false);
      });
  }, []);

  const filteredPoints = filter === 'Todos' 
    ? points 
    : points.filter(p => p.type === filter);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Cargando mapa interactivo UNAC...</p>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
      <h2 style={{ color: '#1b4332' }}>Puntos de Disposición - Campus UNAC</h2>
      <p style={{ color: '#555' }}>Explora el mapa para ubicar las estaciones de reciclaje, canecas orgánicas y contenedores RAEE.</p>

      {/* Selector de Tipo de Mapa y Filtros de Categorías */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['Todos', 'Orgánicos', 'Inorgánicos Reciclables', 'Peligrosos/RAEE', 'No Aprovechables'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                background: filter === cat ? '#1b4332' : '#e0e0e0',
                color: filter === cat ? '#fff' : '#333',
                fontWeight: 'bold',
                fontSize: '0.85rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Botón para alternar Mapa Normal / Satélite */}
        <button
          onClick={() => setMapType(mapType === 'normal' ? 'satelite' : 'normal')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '2px solid #1b4332',
            background: '#fff',
            color: '#1b4332',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {mapType === 'normal' ? '🛰️ Vista Satélite' : '🗺️ Vista Mapa'}
        </button>
      </div>

      {/* Contenedor Ampliado del Mapa */}
      <div style={{ 
        height: '650px', 
        width: '100%', 
        borderRadius: '16px', 
        overflow: 'hidden', 
        border: '3px solid #2d6a4f',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
      }}>
        <MapContainer 
          center={CENTER_UNAC} 
          zoom={18} 
          minZoom={16}
          maxZoom={21}
          maxBounds={BOUNDS_UNAC}
          maxBoundsViscosity={1.0}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            key={mapType}
            attribution={
              mapType === 'normal'
                ? '&copy; OpenStreetMap'
                : 'Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics'
            }
            url={
              mapType === 'normal'
                ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            }
            maxZoom={21}
            maxNativeZoom={mapType === 'normal' ? 19 : 18}
          />

          {filteredPoints.map((point) => (
            <Marker
              key={point._id}
              position={[point.location.lat, point.location.lng]}
              icon={getMarkerIcon(point.type)}
            >
              <Popup>
                <div style={{ padding: '0.2rem' }}>
                  <h4 style={{ margin: '0 0 0.4rem 0', color: '#1b4332' }}>{point.name}</h4>
                  <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.85rem' }}><strong>Tipo:</strong> {point.type}</p>
                  <p style={{ margin: '0 0 0.4rem 0', fontSize: '0.85rem' }}>{point.description}</p>
                  <small style={{ color: '#666' }}>🕒 {point.schedule}</small>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}