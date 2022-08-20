import React from 'react'

function Avengers(props) {

    let avengers = [
        {
            name: "IronMan",
            charname: "Tony Stark",
            imageURL: "https://i.pinimg.com/564x/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
            imgalt: "IronMan"
        },
        {
            name: "SpiderMan",
            charname: "Peter Parker",
            imageURL: "https://i.pinimg.com/564x/bc/4c/a5/bc4ca55a187c1ec417fb254e580918a5.jpg",
            imgalt: "SpiderMan"
        },
        {
            name: "Thor",
            charname: "Thor",
            imageURL: "https://i.pinimg.com/564x/6d/ab/d2/6dabd294da8f4a3ce9c739d91ada3d2a.jpg",
            imgalt: "Thor"
        },
        {
            name: "Captain America",
            charname: "Steve Rogers",
            imageURL: "https://i.pinimg.com/564x/09/29/eb/0929ebfc354683eb818fc143d23f9bf3.jpg",
            imagealt: "Captain America"
        },
        {
            name: "Thanos",
            charname: "Thanos",
            imageURL: "https://i.pinimg.com/736x/e8/16/59/e81659c3ff56354819a45ca49b265a63.jpg",
            imagealt: "Thanos"

        }
    ]

    return (
        <div className='avengers'>
            {
                avengers.map((avenger, index) => {
                    return (
                        <div key={index} className='avenger'>
                            <img className="avenger-image" src={avenger.imageURL} alt={avenger.imgalt} />
                            <h1 className='avenger-name'>{avenger.name}</h1>
                            <h2 className='avenger-realname'>{avenger.charname}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Avengers;