import axios from "axios";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function DeatilApplication() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("a");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://internshala-backend-1.onrender.com/api/application/${id}`
      );
      setData([response.data]);
    };
    fetchData();
  }, [id]);

  const handleTrackLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const locationResponse = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const locationData = locationResponse.data.address;

            // Add lat and lon to the location object
            setLocation({
              ...locationData,
              lat: latitude,
              lon: longitude,
            });
          } catch (error) {
            setError("Unable to fetch location details.");
          }
        },
        () => {
          setError("Location permission denied.");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const customIcon = new L.Icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
  });

  return (
    <div>
      {data.map((data) => (
        <section
          className="text-gray-600 body-font overflow-hidden"
          key={data.id}
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover rounded"
                src={data.user.photo}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Company name
                </h2>
                <h1 className="text-gray-900 font-bold title-font mb-1 -mt-8">
                  {data.company}
                </h1>
                <h2>Cover Letter</h2>
                <p className="leading-relaxed font-bold -mt-8">
                  {data.coverLetter}
                </p>
                <div className="flex mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                  <span className="mr-3">Application Date</span>
                  <br />
                  <p className="font-bold">
                    {new Date(data?.createAt).toLocaleDateString()}
                  </p>
                </div>
                <h4 className="mt-9">Applied By</h4>
                <p className="font-bold -mt-8">{data.user.name}</p>

                <button
                  onClick={handleTrackLocation}
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
                >
                  Track Location
                </button>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                {location && (
                  <div className="mt-8">
                    <p className="font-bold">
                      City: {location.city || location.town}
                    </p>
                    <p className="font-bold">State: {location.state}</p>
                    <p className="font-bold">Country: {location.country}</p>

                    <MapContainer
                      center={[location.lat, location.lon]}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: "400px", width: "100%" }}
                    >
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                      <Marker
                        position={[location.lat, location.lon]}
                        icon={customIcon}
                      >
                        <Popup>Your Location</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default DeatilApplication;
