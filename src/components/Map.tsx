import GoogleMapReact from 'google-map-react';

export function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 7.1187844,
      lng: -73.1118111
    },
    zoom: 19
  };

  return (
    <div className="h-full w-full rounded-2xl relative overflow-hidden">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}