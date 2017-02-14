import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {


    var obj = [
      {
        "OrderDate" : "01/01/2016",
        "DeliveryCountry" : "Germany",
        "Manufacturer": "The Hipster Jeans Company",
        "Gender" : "F",
        "Size" : "16",
        "Colour" : "Dark Blue",
        "Style" : "Relaxed",
        "Count" : 3
      },
      {
        "OrderDate" : "01/01/2016",
        "DeliveryCountry" : "United Kingdom",
        "Manufacturer": "Denzil Jeans",
        "Gender" : "M",
        "Size" : "32/32",
        "Colour" : "Light Blue",
        "Style" : "Skinny",
        "Count" : 7
      },
      {
        "OrderDate" : "02/01/2016",
        "DeliveryCountry" : "France",
        "Manufacturer": "The Hipster Jeans Company",
        "Gender" : "M",
        "Size" : "28/30",
        "Colour" : "Red",
        "Style" : "Skinny",
        "Count" : 6
      },
      {
        "OrderDate" : "02/01/2016",
        "DeliveryCountry" : "Austria",
        "Manufacturer": "Wrangled Jeans",
        "Gender" : "F",
        "Size" : "12",
        "Colour" : "Yellow",
        "Style" : "Boot Cut",
        "Count" : 1
      }
    ];


    var results = Object.keys(obj).map(function(key, index) {
      //console.log(obj[key]["OrderDate"]);
      return (
              <tr key={index}>
                <td>{obj[key]["OrderDate"]}</td>
                <td>{obj[key]["DeliveryCountry"]}</td>
                <td>{obj[key]["Manufacturer"]}</td>
                <td>{obj[key]["Gender"]}</td>
                <td>{obj[key]["Size"]}</td>
                <td>{obj[key]["Colour"]}</td>
                <td>{obj[key]["Style"]}</td>
                <td>{obj[key]["Count"]}</td>
              </tr>
            );
    });



    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td>OrderDate</td>
              <td>Delivery Country</td>
              <td>Manufacturer</td>
              <td>Gender</td>
              <td>Size</td>
              <td>Colour</td>
              <td>Style</td>
              <td>Count</td>
            </tr>
            {results}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
