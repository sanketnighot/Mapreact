import React, { useState, useEffect } from "react";
import {Stage, Layer, Rect } from "react-konva";
// import useImage from "use-image";
// **
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {setMap, selectedTile} from '../redux/actions/mapActions';
// **

const MapCanvas = () => {
	const [curMap, setCurrMap] = useState([])

	const dispatch = useDispatch();
	const fetchMap = async () => {
		const response = await axios.get("http://localhost:8000/map/getMap").catch((err) => {
			console.log(err);
		});
		await dispatch(setMap(response.data));
		setCurrMap(response.data);
	}
	useEffect( ()=> {
		const interval = setInterval(() => {
			fetchMap();
			}, 5000);
		return () => clearInterval(interval);
	},[]);
	const dbMapData = useSelector((state) => state.map.map);
	// **
	const [eid, setId] = useState(0);
	const [currData, setCurrData] = useState([]);
	// const [image] = useImage("Final.png");
	const [stage, setStage] = useState({
		scale: 1,
		x: 0,
		y: 0,
	});
	
  	const handleWheel = (e) => {
    e.evt.preventDefault();
    const scaleBy = 1.02;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStage({
      scale: newScale,
      x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
      y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale,
    });
  	};

	const fetchCurrData = async (getId) => {
		const response = await fetch(`http://localhost:8000/map/getTileById?id=${getId}`)
			.then((res) => res.json())
			.then(async (data) => {
				setCurrData(data);
				await dispatch(selectedTile(data));
			});
	
		
		}

  	const getColor = (land, size, id, status) => {
		// if (id === eid) {
		// 	return "#008080";
		// }
		if (status === "MINTED") {
			return "#00e600";
		} else if (status === "BOOKED") {
			return "#b3b300";
		} else if (status === "NOT_FOR_SALE") {
			return "#737373";
		}
		if (land === "LOL" || size === 3) {
			return "#321d70";
		} else if (land === "CITY"){
			return "#d82eee";
		} else if (land === "NEIGHBOUR") {
			return "#a365ef";
		} else if (land === "PREMIUM LAND") {
			return "#f8cdfc";
		} else {
			return "#8a1fae";
		}
	}
	const width = 15;
	const Map =  curMap.map(
		(data) => {
		//if (data.image === "NONE") {
			return(
				
				<>
				<Rect 	x={(data.x * width)+5} 
						y={(-data.y * width)+5} 
						width={width*data.size} 
						height={width*data.size} 
						fill= {getColor(data.landType, data.size, data._id, data.status)}
						shadowBlur={(eid === data._id) ? 2 : 0} 
						stroke={(eid === data._id) ? '#81f78e' : 'black'} 
						zIndex={(eid === data._id) ? 5000 : -500} 
						strokeWidth={(eid === data._id) ? 1 : 0.2} 
						onClick={ async ()=>{
							setId(data._id);
							const currId = data._id;
							fetchCurrData(currId);
							//updateData();
							}} 
						onTap={async()=>{
							setId(data._id);
							const currId = data._id;
							fetchCurrData(currId);
						
							}}/>
				</>
			);
    //} 
	// else {
    //   return (
    //     <>
    //       <AddImage
    //         x={data.x * width + 5}
    //         y={data.y * width + 5}
    //         width={width}
    //         height={width}
    //         shadowBlur={eid === data.id ? 2 : 0}
    //         stroke={eid === data.id ? "green" : "black"}
    //         zIndex={eid === data.id ? 500 : 0}
    //         strokeWidth={eid === data.id ? 0.75 : 0.2}
    //         onClick={() => {
    //           setId(data.id);
    //         }}
    //         onTap={() => {
    //           setId(data.id);
    //         }}
    //         img={data.image}
    //       />
    //       <Rect
    //         x={data.x * width + 5}
    //         y={data.y * width + 5}
    //         width={width}
    //         height={width}
    //         fill={data.type === "basic" ? "transparent" : "transparent"}
    //         shadowBlur={eid === data.id ? 2 : 0}
    //         stroke={eid === data.id ? "green" : "transparent"}
    //         zIndex={eid === data.id ? 50 : 1000}
    //         strokeWidth={eid === data.id ? 0.75 : 0.2}
    //         onClick={() => {
    //           setId(data.id);
    //         }}
    //         onTap={() => {
    //           setId(data.id);
    //         }}
    //       />
    //     </>
    //   );
    // }
  });

  // **

  // **

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onWheel={handleWheel}
        scaleX={stage.scale}
        scaleY={stage.scale}
        x={stage.x}
        y={stage.y}
        draggable={true}
        style={{backgroundColor:"#63579c"}}>
        <Layer>
          {Map}

          {/* ** */}

          {/* ** */}
        </Layer>
      </Stage>
      {/* <div className="container" style={{display:"flex"}}>
            <div style={{marginLeft:"5%", display: "inlineBlock"}}> 
			{(eid !== "") ? 
				<>
                <h2>Name: {currData.name}</h2> <br/>
				x: <b>{currData.x} </b> ,
				y: <b>{currData.y} </b><br/>
				size: <b>{currData.size} </b> <br/>
				id: <b>{currData.tokenId} </b> <br/>
				land type: <b>{currData.landType} </b> <br/>
				price: <b>{currData.price} ETH </b> <br/>
				status: <b>{currData.status} </b>
				<input name="input" type="text" value={dataInput} onChange={(e) => {updateTxt(e)}} placeholder="Land Type"/> 
				<button onClick={()=>{updateData()}}>Submit</button><br/>
				</>:
			 <h1>Click/Tap the Tile to get Data</h1>}
            </div>
			<div style={{margin:"2%"}}> 
				<ContractConn 	
					data = {currData}
				/>
			</div>
			</div> */}
    </>
  );
};

export default MapCanvas;
