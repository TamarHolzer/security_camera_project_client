import React, { useState } from 'react';
import '../App.css';
import imageSrc from '../pics/מצב-קיים.jpg';//ur image file in the src folder or provide a correct path
import axios from 'axios';
function Xy_click() {
  const [coordinates, setCoordinates] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [height,setHeiht]=useState()

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCoordinates([...coordinates,{ x, y }]);
  };

  const sendList=()=>{
    // פונקצית שרת 
    axios.post("http://127.0.0.1:5000 ",{
      coordinates:coordinates,
      height:height
    }).then((res)=>{

      

    }).catch((err)=>{

    })

  }

  const addRoom=()=>{
      setRooms(...rooms,coordinates)
      setCoordinates()
  }

  return (
    <div className="App">
      <button onClick={sendList} name='sendButton'  style={{backgroundColor:'red'}}>שליחה</button>
      <button onClick={addRoom} name='addRoomButton' style={{backgroundColor:'red'}}>add room</button>
      
      <h1>Click on the image</h1>
      <div className="image-container" onClick={handleClick}>
        <img src={imageSrc} alt="clickable" className="clickable-image" />
      </div>
      {coordinates.x !== null && (
        <p>
          Coordinates: (X: {coordinates.x}, Y: {coordinates.y})
        </p>
      )}
    </div>
  );
}

export default Xy_click;


