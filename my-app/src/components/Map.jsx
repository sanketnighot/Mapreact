import React from "react";
import "./Map.css";
import white from './assets/images/white.png'
import rectangle73 from './assets/images/Rectangle 73.png'
import rectangle74 from './assets/images/Rectangle 74.png'
import abstract from './assets/images/abstract.png'
import MapCanvas from './MapCanvas'
const Map=()=>{
  return(
    <>
     <nav>
          <div className="container-fluid">
            <div className="row">
              <div className="navbar">
                <div className="m-logo">
                <img src={white} alt="" />
                </div>
                <div className="h-map"><a href="#">map</a></div>
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
                      <li className="sale active-sale">
                        <p>sale(2000+)</p>
                      </li>
                      <li className="sale">
                        <p>Auction (+900)</p>
                      </li>
                      <li className="sale">
                        <p>Sold (11)</p>
                      </li>
                    </ul>
                  </div>
                  <div className="card-container">
                    <ul className>
                      <li className="sale active-sale">
                        <p>Ultra Premium</p>
                      </li>
                      <li className="sale">
                        <p>Premium</p>
                      </li>
                      <li className="sale">
                        <p>Platinum</p>
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
                  </div>
                  <div className="card-container">
                    <h3>sizes</h3>
                    <ul>
                      <li className="size-li active-sale">
                        <p>1x1</p>
                      </li>
                      <li className="size-li">
                        <p>3x3</p>
                      </li>
                      <li className="size-li">
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
          <MapCanvas/>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3 nopadding">
                <div className="right-side-menu">
                  <div className="land-look">
             <img src={rectangle73} alt="" />
                  </div>
                  <div className="h-land">
                    <h4>Spidyverse</h4>
                    <p>9x9</p>
                  </div>
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
                      CMRRA, LatinAutorPerf, UNIAO BRASILEIRA DE EDITORAS DE MUSICA
                      - UBEM, Sony ATV Publishing, LatinAutor - SonyATV, UMPI, SOLAR
                      Music Rights Management, BMI - Broadcast Music Inc., Kobalt
                      Music Publishing, PEDL, LatinAutor - Warner Chappell, UMPG
                      Publishing, AMRA, LatinAutor - UMPG, LatinAutor, Warner
                      Chappell, and 12 music rights societies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  )
}
export default Map;
