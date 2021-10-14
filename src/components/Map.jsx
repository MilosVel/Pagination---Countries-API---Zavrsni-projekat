import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ lat, lng }) => {
    const [center, setCenter] = useState({
        lat: 59.95,
        lng: 30.33
    })
    const [zoom, setZoom] = useState(11)

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '400px', width: '500px' }}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyACtBAugNnjYUxzK3uwxX_RflDOHP6J6II' }}
                defaultCenter={{ lat, lng }}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    );
}

export default Map;




// https://www.npmjs.com/package/google-map-react







///////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';

// const Map = ({ lat, lng }) => {
//     // const [center,setCenter] = useState({
//     //     lat: 59.95,
//     //     lng: 30.33
//     //   })
//     const [zoom, setZoom] = useState(11)

//     return (
//         // Important! Always set the container height explicitly
//         <div style={{ height: '400px', width: '500px' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyACtBAugNnjYUxzK3uwxX_RflDOHP6J6II' }}
//                 defaultCenter={{ lat, lng }}
//                 defaultZoom={zoom}
//             >
//             </GoogleMapReact>
//         </div>
//     );
// }

// export default Map;




// // https://www.npmjs.com/package/google-map-react



