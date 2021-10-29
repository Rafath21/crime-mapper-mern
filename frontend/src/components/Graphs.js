import React from "react";
import styled from "styled-components";
import Graph from "./Graph";
import { useEffect, useState } from "react";
const Graphs = (props) => {
  const data=props?.data
  const [name,setName]=useState("");

  let [array,setArray]=useState([]);
useEffect(() => {
  console.log(props.data);
    setName(props?.data.district)  
    let arr=[];
    if(data!=undefined){
 Object.keys(data).forEach(key => {
   if(key!="location" && key!="_id" && key!="district" && key!="__v"){
let obj={
     crime:key,
     value:data[key]
   }
   arr.push(obj)
   }
});
    }
setArray(arr)
  }, [data])
 const filterData=(crimeArray)=>{
   let novC = 0,
        decC = 0,
        janC = 0,
        febC = 0,
        marC = 0,
        aprC = 0,
        mayC = 0,
        juneC = 0,
        julyC = 0,
        augC = 0,
        septC = 0,
        octC = 0;
         let arr = [];
         let mainArr=[];
        for (let i = 0; i < crimeArray?.length; i++) {
          arr.push(crimeArray[i].Day);
        }
        arr.map((e) => {
          e = new Date(e);
          if (e.getMonth() == 10) novC++;
          if (e.getMonth() == 11) decC++;
          if (e.getMonth() == 0) janC++;
          if (e.getMonth() == 1) febC++;
          if (e.getMonth() == 2) marC++;
          if (e.getMonth() == 3) aprC++;
          if (e.getMonth() == 4) mayC++;
          if (e.getMonth() == 5) juneC++;
          if (e.getMonth() == 6) julyC++;
          if (e.getMonth() == 7) augC++;
          if (e.getMonth() == 8) septC++;
          if (e.getMonth() == 9) octC++;
        });
        mainArr.push(novC,decC,janC,febC,marC,aprC,mayC,juneC,julyC,augC,septC,octC)
        return mainArr;
 }
  return(
  <Main> 
    <Heading>{name}</Heading>
  <GraphsSection>
    {array?
    <>
    {array.map((e,index)=>{
      let arr=filterData(e.value)
      return(
    <Graph crime={e.value} name={e.crime} values={arr} key={index}/>)
    })}

    </>
    :<h2>No Data yet!</h2>}
      </GraphsSection>;
      </Main>)
};
const Main=styled.div`
margin-top:15px;
`
const GraphsSection = styled.div`
display:grid;
grid-template-columns: repeat(3, 1fr);
grid-row-gap: 20px;
margin-top:15px;
@media(max-width:700px){
  grid-template-columns:repeat(1,1fr);
}
`;
const Heading=styled.p`
font-size:1.5rem;
font-weight:bolder;
color:#11ece5;
margin-left:550px;
@media(max-width:700px){
  margin-left:0;
}
`
export default Graphs;
