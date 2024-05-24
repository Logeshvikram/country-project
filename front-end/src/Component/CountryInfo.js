import React from 'react'; 

function CountryInfo({ countryData }) { 
	return ( 
		<div> 
			<img src={countryData.flags.svg} alt="Flag" className="flagImage" /> 
			<h2>{countryData.name.common}</h2> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Capital:</h4> 
				{countryData.capital[0]} 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Continent:</h4> 
				{countryData.continents[0]} 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Population:</h4> 
				{countryData.population} 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Currency:</h4> 
				 
						{countryData.currencies[ 
							Object.keys(countryData.currencies)[0] 
						].name}{' '} 
						- {Object.keys(countryData.currencies)[0]} 
					 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Common Languages:</h4> 
				 
						{Object.values(countryData.languages) 
							.toString() 
							.split(',') 
							.join(', ')} 
					 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Borders:</h4> 
				 
						{(countryData.borders) ? Object.values(countryData.borders) 
							.toString() 
							.split(',') 
							.join(', ') : "NAN"} 
					 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Area:</h4> 
				{countryData.area} 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Calling Are:</h4> 
				{countryData.idd.root}{countryData.idd.suffixes[0]} 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>Capital Latitudes and Longitudes are:</h4> 
				{countryData.capitalInfo.latlng[0]} {countryData.capitalInfo.latlng[1]} 
				</div> 
			</div> 
			<div className="row"> 
				<div className="dataRow"> 
					<h4>TimeZones:</h4> 
				 
						{Object.values(countryData.timezones) 
							.toString() 
							.split(',') 
							.join(', ')} 
					 
				</div> 
			</div> 
		</div> 
	); 
} 

export default CountryInfo;
