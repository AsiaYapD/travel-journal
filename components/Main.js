import React from "react"

export default function Main(props) {
    return (
        <div className="mainSection">
            <img src={`../img/${props.img}`} alt={`photo of ${props.title} in Greece.`} className="mainImage" />
            <div className="journalEntry">
                <div className="locationInfo">
                    <img src="./img/location.png" className="location-pin" />
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
