import { Line } from "react-chartjs-2";
import styled from "styled-components";
let colors=[["#11ece5"],["rgba(255,0,35,20)"],["rgba(255,81,0,20)"],["rgba(149,29,118,70)"]]
let color= colors[Math.floor(Math.random()*colors.length)];
const Graph=(props)=>{
    let values=props.values
    const state={
            labels: [
              "Nov 2020",
              "Dec 2020",
              "Jan 2021",
              "Feb 2021",
              "Mar 2021",
              "Apr 2021",
              "May 2021",
              "June 2021",
              "July 2021",
              "Aug 2021",
              "Sept 2021",
              "Oct 2021",
            ],
            datasets: [
              {
                label: `${props.name}`,
                backgroundColor:"black",
                borderColor: "#11ece5",
                data: 
                 values
                ,
              },
            ],
            options:{
            layout: {
              padding: 10,
            },
            legend: {
              position: "bottom",
              labels: {
                fill:true,
                fontColor: "#ffff",
              },
            },
            title: {
              display: true,
              fontColor: "white",
            },
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Number of cases",
                  },
                  ticks: {
                    color: "#ffff",
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Month of the Year",
                  },
                  ticks: {
                    color: "#ffff",
                  },
                },
              ],
            },
          }
          
}
    return(
        <Container>
          {values?
          (<Line data={state} scaleFontColor={"#ffff"}/>):""}
        </Container>
    )
}
const Container=styled.div``
export default Graph;