import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Location = () => {
  const address = '123 School Street, City, Country';
  const phone = '+123 456 789';
  const email = 'info@example.com';

  return (
    <div className="bg-[#FAF9F6] border border-stone-300 p-5 sm:p-6 w-full">
      <div className="border border-stone-300" style={{ height: '380px' }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>A pretty CSS3 popup.</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="mt-5 pt-4 border-t border-stone-300 space-y-1.5 text-left">
        <p className="ty-body text-stone-700"><span className="font-semibold text-stone-900">Address:</span> {address}</p>
        <p className="ty-body text-stone-700"><span className="font-semibold text-stone-900">Phone:</span> {phone}</p>
        <p className="ty-body text-stone-700"><span className="font-semibold text-stone-900">Email:</span> {email}</p>
      </div>
    </div>
  );
};

export default Location;
