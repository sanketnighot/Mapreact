import React from "react";
import "./Map.css";
import white from "./assets/images/white.png";
import rectangle73 from "./assets/images/Rectangle 73.png";
import MapCanvas from "./MapCanvas";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import etprice from "./assets/images/ether.png";
import { setMap, selectedTile } from "../redux/actions/mapActions";
import ContractConn from "./ContractConn";

const leftHide = () => {
  const hide = document.getElementById("r-menu");
  if (hide.style.display == "none") {
    hide.style.display = "block";
    hide.style.transition = "10s ease-in-out";
  } else {
    hide.style.display = "block";
  }
  console.log(hide);
};

// window.onload=()=>{
//   const hide = document.getElementById("r-menu");
//   if (hide.style.display == "none") {
//     hide.style.display = "block";
//   } else {
//     hide.style.display = "none";
//   }
//   console.log(hide);
// }

const Map = () => {
  const tile = useSelector((state) => state.tile);

  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="navbar">
              <div className="m-logo">
                <img src={white} alt="" />
              </div>
              <div className="h-map">
                <a href="#">map</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="left-side-menu">
            <div className="col-sm-2 col-lg-2 nopadding z-index-up .mr-0">
              <div className="card-wrapper .mr-0">
                <a href="#">clear</a>
                <div className="card-container">
                  <ul className>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id="sale"
                        name="sale"
                        value="sale"
                      />
                      <div className="colour-box box1"></div>
                      <p>sale(2000+)</p>
                    </li>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id="auction"
                        name="auction"
                        value="auction"
                      />
                      <div className="colour-box box2"></div>
                      <p>Auction(2000+)</p>
                    </li>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id="opensea"
                        name="opensea"
                        value="opensea"
                      />
                      <div className="colour-box box3"></div>
                      <p>Opensea(2000+)</p>
                    </li>
                  </ul>
                </div>
                <div className="card-container">
                  <ul className>
                    <li className="sale">
                      <input type="checkbox" id="lol" name="lol" value="lol" />
                      <div className="colour-box box1"></div>
                      <p>LOL</p>
                    </li>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id="city"
                        name="city"
                        value="city"
                      />
                      <div className="colour-box box1"></div>
                      <p>CITY</p>
                    </li>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id="estate"
                        name="estate"
                        value="estate"
                      />
                      <div className="colour-box box1"></div>
                      <p>ESTATE</p>
                    </li>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id="neighbour"
                        name="neighbour"
                        value="neighbour"
                      />
                      <div className="colour-box box1"></div>
                      <p>NEIGHBOUR</p>
                    </li>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id=" premium"
                        name="premium"
                        value="premium"
                      />
                      <div className="colour-box box2"></div>
                      <p>PREMIUM</p>
                    </li>
                    <li className="sale">
                      <input
                        type="checkbox"
                        id="land"
                        name="land"
                        value="land"
                      />
                      <div className="colour-box box3"></div>
                      <p>LAND</p>
                    </li>
                  </ul>
                </div>
                <div className="card-container">
                  <h3>Coordinates</h3>
                  <div className="card-input">
                    <h3>Min (X,Y)</h3>
                    <input type="text" label="min(X,Y)" placeholder=" 92-12" />
                  </div>
                  <div className="card-input">
                    <h3>Min (X,Y)</h3>
                    <input type="text" label="min(X,Y)" placeholder=" 92-12" />
                  </div>
                  <div className=" btn-apply">
                    <button className="btn-primary text-center apply-btn">
                      <p>apply</p>
                    </button>
                  </div>
                </div>
                <div className="card-container">
                  <h3>sizes </h3>
                  <ul>
                    <li className="size-li">
                      <input type="checkbox" /> <p>1x1</p>
                    </li>
                    <li className="size-li">
                      <input type="checkbox" />
                      <p>3x3</p>
                    </li>
                    <li className="size-li">
                      <input type="checkbox" />
                      <p>9x9</p>
                    </li>
                  </ul>
                </div>
                <div className="opensea">
                  <p>Find Land on Openseas</p>
                  <i className="fas fa-external-link-alt" />
                </div>
              </div>
            </div>

            {/* **************** */}
            <div className="map" onClick={leftHide}>
              <MapCanvas />
            </div>

            {/* **************** */}

            <div className="right-side-menu" id="r-menu">
              <div className="wrapper-r-m">
              <div className="land-look">
                <img src={rectangle73} alt="" />
              </div>
              <div className="y-text">
                <ContractConn data={tile} />
              </div>
              <div className="w-l">
                <div className="l-detail">
                  <p>{tile.name}</p>
                </div>
                <div className="m-l-d">
                  <div className="l-detail2">
                    <img src={etprice} alt="ether" />
                  </div>
                  <div className="eth-p">
                    <p>{tile.price}</p>
                  </div>
                </div>
              </div>
              <div className="para-land">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="assets-d">
                <div className="asets-d1"></div>
                <div className="asets-d1"></div>
                <div className="asets-d1"></div>
              </div>
              <div className="adlol">
                <div className="land-d"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Map;
