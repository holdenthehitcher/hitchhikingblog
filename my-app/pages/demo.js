import React, {Component} from 'react';
import {COFFEE} from "../shared/COFFEE"

export default function demo() {
    return (
      <body>
        <div className="demo-background">
          <div className="demo-spacing">
           <MappedCoffee />
          </div>
        </div>
      </body>
    );
  }

 

class SepticData extends Component {
  constructor(){
    super();
   this.state = {
     tanks: [
       {
         id: 0,
         location: "Stockton",
         size: 1200,
         serviced: false
       },
       {
         id: 1,
         location: "Vancouver",
         size: 2375,
         serviced: true
       },
       {
         id: 2,
         location: "Puget Sound",
         size: 1850,
         serviced: false
       },
     ],
   };
  }

  render(){
     return (
      <>
      <h3>Our Tanks</h3>
        {this.state.tanks.map(site => (
          <div key={site.id}>
            <div>{site.location} - {site.size} gallons</div>
              <ServicedTank site={site}/>
             <hr/>
          </div>
        ))}
      </>
    )
  }
}


const ServicedTank = (props) => {
    if (props.site.serviced === true) {
      return (
        <div style={{fontSize: "1.1rem"}}>
          This tank has been serviced
        </div>
    )}

    else {
      return (
        <div style={{color: "red", fontSize:"1.3rem"}}>
          Urgent! - Not Serviced
        </div>
      )
   }
}


















const MappedCoffee = () => {
  return COFFEE
  .filter((location) => location.nearby !== true)
  .map((store) => (
    <div key={store.id}>
      <div>Name: {store.name}</div>
      <div>Location: {store.location}</div>
      <div>Types of Coffee: {store.types}</div>
      <br></br>
    </div>
  ));
};

const ReducedCoffeeTypes = () => {
  const reducedNumber = COFFEE.reduce((total, vendor) => total * vendor.types, 1);
  return (
    <div className="demo-bigNumber">
      <div>{reducedNumber}</div>
    </div>
  );
};









// const somethingElse = () => {
//    
  // toggleServiced() {
  //    console.log(this.state.serviced)
  //    this.setState({serviced: !this.state.serviced})
  //  }

    //  this.toggleServiced = this.toggleServiced.bind(this);

//    return (
//     <button onClick={this.toggleServiced}>
//         service
//      </button>
//    )
// }



