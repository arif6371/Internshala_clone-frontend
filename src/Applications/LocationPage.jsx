import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet's default icon not appearing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

function LocationPage() {
    const location = useLocation();
    const { lat, lng, city, state, country } = location.state || {};

    if (!lat || !lng) {
        return <p>Location data is not available.</p>;
    }

    return (
        <div className="container px-5 py-24 mx-auto">
            <h2 className="text-2xl font-bold mb-4">User's Location</h2>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Country: {country}</p>

            <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%", marginTop: "20px" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lng]}>
                    <Popup>User's Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default LocationPage;
