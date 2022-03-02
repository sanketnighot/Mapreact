import React from "react";
import "./Map.css";
import { connect } from "react-redux";
import white from "./assets/images/white.png";
import rectangle73 from "./assets/images/Rectangle 73.png";
import rectangle74 from "./assets/images/Rectangle 74.png";
import MapCanvas from "./MapCanvas";

const Map = (props) => {
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
                <a href="#">map
                {props.myname}
                </a>
                <button
                  onClick={() => {
                    props.changeName("suresh");
                  }}
                >
                  change
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="left-side-menu">
        <div className="container-fluid">
          <div className="row">
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
                  <h3>sizes</h3>
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
            <div className="col-sm-7 col-lg-7 nopadding">
              <div className="map">
                <MapCanvas />
              </div>
            </div>
            <div className="col-sm-3 col-lg-3 nopadding">
              <div className="right-side-menu">
                <div className="land-look">
                  <img src={rectangle73} alt="" />
                </div>
                <div className="h-land"></div>
                <div className="you-tube">
                  <img src={rectangle74} alt="" />
                </div>
                <div className="y-text">
                  <h4>
                    Post Malone, Swae Lee - Sunflower (Spider-Man: Into the
                    Spider-Verse)
                  </h4>
                </div>
                <div className="y-disclaimer">
                  <p>
                    Licensed to YouTube by UMG (on behalf of Republic Records);
                    CMRRA, LatinAutorPerf, UNIAO BRASILEIRA DE EDITORAS DE
                    MUSICA - UBEM, Sony ATV Publishing, LatinAutor - SonyATV,
                    UMPI, SOLAR Music Rights Management, BMI - Broadcast Music
                    Inc., Kobalt Music Publishing, PEDL, LatinAutor - Warner
                    Chappell, UMPG Publishing, AMRA, LatinAutor - UMPG,
                    LatinAutor, Warner Chappell, and 12 music rights societies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapSateToProp = (state) => {
  return {
    myname:state.name,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeName:(name) => {
      dispatch({ type: 'CHANGE_NAME',payload: name });
    },
  };
};
export default connect(mapSateToProp,mapDispatchToProps)(Map);
