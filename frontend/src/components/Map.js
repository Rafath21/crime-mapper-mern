import React from "react";
import styled from "styled-components";
import { useState, useEffect} from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../App.css";
import { Districts } from "./util";
const Map = (props) => {
  let handlefunc = props.handlefunc;
  let data = props.data;
  const style = {
    color: "black",
    background: "black",
  };
  let myIcon = L.icon({
    iconUrl: "locationIcon.png",
    iconSize: [30, 40],
  });
  let [position, setPosition] = useState([18.1124, 79.0193]);
  let [murdersCount, setmurdersCount] = useState(0);
  let [theftsCount, settheftsCount] = useState(0);
  let [riotingsCount, setriotingsCount] = useState(0);
  let [BurglaryCount, setBurglaryCount] = useState(0);
  let [kidnappingCount, setkidnappingCount] = useState(0);
  let [domesticAbuseCount, setdomesticAbuseCount] = useState(0);
  let [assaultCount, setassaultCount] = useState(0);
  let [map, setMap] = useState(null);
  useEffect(() => {
    if (data != undefined) {
      let arr = [];
      let loc = data.location.coordinates;
      arr[0] = loc[1];
      arr[1] = loc[0];
      map.flyTo(arr);
      setmurdersCount(data.murders.length);
      setriotingsCount(data.riotings.length);
      settheftsCount(data.thefts.length);
      setBurglaryCount(data.burglary.length);
      setkidnappingCount(data.kidnapping.length);
      setdomesticAbuseCount(data.domesticAbuse.length);
      setassaultCount(data.assault.length);
    }
  }, [data]);
  return (
    <MapSection>
      <MapContainer
        center={position}
        zoom={10}
        maxZoom={9}
        minZoom={7}
        style={style}
        whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Districts.map((e, index) => {
          let lat = e.location[1];
          let long = e.location[0];
          return (
            <Marker
              eventHandlers={{
                click: (event) => {
                  handlefunc(e.name);
                },
              }}
              key={index}
              position={[lat, long]}
              icon={myIcon}
            >
              <Popup>
                <Info>
                  <Title>{e.name}</Title>
                  <InnerInfo1>
                    <Label>Murders</Label>
                    <Count>{murdersCount}</Count>
                  </InnerInfo1>
                  <InnerInfo>
                    <Label>Thefts</Label>
                    <Count>{theftsCount}</Count>
                  </InnerInfo>
                  <InnerInfo>
                    <Label>Riotings</Label>
                    <Count>{riotingsCount}</Count>
                  </InnerInfo>

                  <InnerInfo>
                    <Label>Burglaries</Label>
                    <Count>{BurglaryCount}</Count>
                  </InnerInfo>

                  <InnerInfo>
                    <Label>Kidnappings</Label>
                    <Count>{kidnappingCount}</Count>
                  </InnerInfo>

                  <InnerInfo>
                    <Label>Assaults</Label>
                    <Count>{assaultCount}</Count>
                  </InnerInfo>

                  <InnerInfo>
                    <Label>Domestic Abuse</Label>
                    <Count>{domesticAbuseCount}</Count>
                  </InnerInfo>
                </Info>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </MapSection>
  );
};
const MapSection = styled.div`
  height: 80vh;
  width: 75%;
  margin-left: 11px;
  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
    height: 70vh;
  }
`;
const Info = styled.div`
  width: 150px;
  height: 180px;
  background: #0f1724;
  color: #ffff;
  border: none;
`;
const InnerInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-between;
`;
const InnerInfo1 = styled.div`
  margin-top: -24px;
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-between;
`;
const Label = styled.p``;
const Count = styled.p``;
const Title = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

export default Map;
