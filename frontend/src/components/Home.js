import React from "react";
import { useState } from "react";
import Map from "./Map";
import Graphs from "./Graphs";
import styled from "styled-components";
import "../App.css";
import { Districts } from "./util";
import axios from "axios";
import Loader from "react-loader-spinner";
const Home = () => {
  let [currDistrict, setCurrDistrict] = useState("");
  let [dataObj, setDataObj] = useState();
  let [loading, setLoading] = useState(false);
  const handleChange = async (district) => {
    let config = {
      "Content-type": "application/json",
    };
    try {
      let res = await axios({
        url: "/api/v1/getCrime",
        method: "POST",
        withCredentials:true,
        data: {
          dist: district,
        },
        config,
      });
      setDataObj(res.data);
      setLoading(false);
    } catch (err) {
      alert("something went wrong");
    }
  };
  return (
    <Main>
      <Header>
        <Heading className="title">CRIME MAPPER</Heading>
        <SearchBox>
          <Input
            placeholder="Enter the district name"
            onChange={(e) => {
              setCurrDistrict(e.target.value);
            }}
          ></Input>
          <Search>
            <i
              class="fas fa-search"
              onClick={(e) => {
                setLoading(true);
                e.preventDefault();
                handleChange(currDistrict);
              }}
            ></i>
          </Search>
        </SearchBox>
      </Header>
      <p className="note">
        Note: The figures shown on this website are purely fictional. The data
        has been randomly generated with the help of an automation software.
        This is just an idea being implemented with the aim to help Criminal
        Investigation Departments in Telengana or anywhere in the world.
      </p>
      <First>
        <SidebarSection>
          {Districts &&
            Districts.map((e, index) => {
              return (
                <District key={index}>
                  <p
                    onClick={() => {
                      handleChange(e.name);
                    }}
                  >
                    {e.name}
                  </p>
                </District>
              );
            })}
        </SidebarSection>
        {loading ? (
          <Loader
            type="Plane"
            height={10}
            width={10}
            color="#11ece5"
            className="loader"
          />
        ) : (
          ""
        )}
        <Map handlefunc={handleChange} data={dataObj}></Map>
      </First>
      {dataObj ? <Graphs data={dataObj}></Graphs> : ""}
    </Main>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Header = styled.div`
  height: 10vh;
  width: 98vw;
  display: flex;
  padding: 12px;
  flex-direction: row;
  margin-left: 10px;
  background: #0f1724;
  border-radius: 15px;
  @media (max-width: 700px) {
    flex-direction: column;
    height: 12vh;
  }
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const Heading = styled.p``;
const SearchBox = styled.div`
  padding: 7px;
  background:  #0f1724;
  width: 320px;
  border-radius: 20px;
  margin-left: 60%;
  position:absolute:
  right:0;
  border:2px solid #11ece5;
  @media(max-width:700px){
    margin-left:0;
    left:0;
    width: 200px;
    height: 37px;
  }
`;

const Input = styled.input`
  width: 75%;
  margin: 1%;
  height: 90%;
  background: none;
  border: none;
  color: #ffff;
  outline: none;
`;
const Search = styled.div`
  padding: 5px;
  border: none;
  color: #11ece5;
  margin-top: -30px;
  margin-left: 191px;
  font-size: 1.3rem;
`;
const SidebarSection = styled.div`
  padding: 10px;
  border-radius: 15px;
  width: 25%;
  height: 80vh;
  background: #0f1724;
  color: #ebf0ffd9;
  overflow: auto;
  @media (max-width: 600px) {
    display: none;
  }
`;
const District = styled.div`
  height: 7%;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #11ece5;
    color: rgb(0, 0, 0);
  }
`;
export default Home;
