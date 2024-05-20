import { useEffect, useState } from "react";

import Button from "./Button";


function Joker() {


    let URL = "https://official-joke-api.appspot.com/jokes/programming/random";


    let jokeApi = async () => {
        let resp = await fetch(URL);
        let json = await resp.json();
        setJoke({
            setup: json[0].setup,
            punchline: json[0].punchline
        })

        console.log(json)
    }


    let [joke, setJoke] = useState({});

    useEffect(() => {

        setJoke({
            Message: <h3>Click me to generate joke for you</h3>
        })
    }, [])


    return (


        <div className="main">
            <h2>{joke.setup}
                <h2>{joke.punchline}</h2>
                <h2>{joke.Message}</h2>
                <Button jokeApi={jokeApi} />
            </h2>

        </div>



    )


}


export default Joker;