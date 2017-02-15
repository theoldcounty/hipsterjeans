// with es6
var React = require('react');
var ReactDOM = require('react-dom');
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

import './index.css';
import './react-bootstrap-table-all.min.css';

var orders = [{
		OrderDate : "01/01/2016",
		DeliveryCountry : "Germany",
		Manufacturer : "The Hipster Jeans Company",
		Gender : "F",
		Size : "16",
		Colour : "Dark Blue",
		Style : "Relaxed",
		Count : 3
	},
	{
		OrderDate : "01/01/2016",
		DeliveryCountry : "United Kingdom",
		Manufacturer: "Denzil Jeans",
		Gender : "M",
		Size : "32/32",
		Colour : "Light Blue",
		Style : "Skinny",
		Count : 7
	},
	{
		OrderDate : "02/01/2016",
		DeliveryCountry : "France",
		Manufacturer: "The Hipster Jeans Company",
		Gender : "M",
		Size : "28/30",
		Colour : "Red",
		Style : "Skinny",
		Count : 6
	},
	{
		OrderDate : "02/01/2016",
		DeliveryCountry : "Austria",
		Manufacturer: "Wrangled Jeans",
		Gender : "F",
		Size : "12",
		Colour : "Yellow",
		Style : "Boot Cut",
		Count : 1
	}];


/*
	The top selling manufacturers by gender and country
	The top selling sizes by country
	The top selling months globally and by country
*/

const genderType = {
  "M": 'M',
  "F": 'F'
};


var options = {
  defaultSortName: 'name',  // default sort column name
  defaultSortOrder: 'desc'  // default sort order
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

class Table extends React.Component { 
	constructor(props) {
		super(props);

		this.options = {
		  defaultSortName: 'Size',  // default sort column name
		  defaultSortOrder: 'desc'  // default sort order
		};
	}

	render() {
	return (
		<div>
			<BootstrapTable ref='table' data={ orders }  options={ this.options }>
				<TableHeaderColumn dataField='OrderDate' dataSort isKey filter={ { type: 'TextFilter', delay: 1000 } }>Order Date</TableHeaderColumn>
				<TableHeaderColumn dataField='DeliveryCountry' filter={ { type: 'TextFilter', delay: 1000 } }>Delivery Country</TableHeaderColumn>
				<TableHeaderColumn dataField='Manufacturer'>Manufacturer</TableHeaderColumn>
				<TableHeaderColumn dataField='Gender' filterFormatted dataFormat={ enumFormatter } formatExtraData={ genderType }
				  filter={ { type: 'SelectFilter', options: genderType } }>Gender Type</TableHeaderColumn>
				<TableHeaderColumn dataField='Size' dataSort>Size</TableHeaderColumn>
				<TableHeaderColumn dataField='Colour'>Colour</TableHeaderColumn>
				<TableHeaderColumn dataField='Style'>Style</TableHeaderColumn>
				<TableHeaderColumn dataField='Count'>Count</TableHeaderColumn>
			</BootstrapTable>
		</div>
	);
	}
}

ReactDOM.render(
  <Table>
  </Table>,
  document.getElementById('root')
);