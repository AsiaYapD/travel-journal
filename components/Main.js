import React from "react"

export default function Main(props) {
    return (
        <div className="mainSection">
            <img src={`../img/${props.image}`} alt="photo of Nafplio,Greece." className="mainImage" />
            <div className="journalEntry">
                <div className="locationInfo">
                    <img src="./img/location.png" className="location-pin"/>
                    <p>{props.location}</p>
                    <a href="{props.googleMapsUrl}" className="googleMaps">View on Google Maps</a>

                </div>
                <h1>{props.title}</h1>
                <h3 className="dateRange">{`${props.startDate} - ${props.endDate}`}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}



/*      
    <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
    </div>
    <p className="card--title">{props.title}</p>
    <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
    </p> */