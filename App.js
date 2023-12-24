import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data.js"

export default function App () {
    const locations = data.map(item => {
        return (
            <Main 
                key= {item.selection}
                {...item}
            />
        )
    })
    
    return (
        <div className= "container">
            <Header />
             <section className="locations-list">
                {locations}
            </section>
        </div>
    )
}