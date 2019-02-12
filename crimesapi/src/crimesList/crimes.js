import React from 'react'

const CrimesList = (props) => {
const crimeList = props.crimes.map((crime,index)=>{
	return <li key={index}> {crime.description}<button onClick={props.deleteItem.bind(null, index)}>Delete</button></li>
})


    return (
		<div>
	         <ul>
	         	{crimeList}
	         </ul>
	 	 </div>
      )
}

export default CrimesList;