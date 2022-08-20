import './App.css';
import { useEffect } from 'react';
import Avengers from './Avengers';

function App() {
    // let [users, setUsers] = useState([]);

    // let [firstname, setFirstname] = useState(null);
    // let [lastname, setLastname] = useState("Mittal")

    useEffect(function () {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((response) => {
        //         console.log(response);
        //         setUsers(response);
        //     })

        // console.log("Rendered");
    }, [])

    // function changeName() {
    //     setFirstname("Vedansh");
    // }

    // function doSomething(name) {
    //     console.log("Hello " + name);
    // }

    return (
        <div className='App'>

            <h1 className='header'>Marvel Library</h1>
            {/* <h2>{firstname}</h2>
            <button onClick={() => console.log(firstname)}>Change Name</button>

            <input type="text" className="name" placeholder='Enter Name' onChange={(event) => setFirstname(event.target.value)} /> */}

            {/* <div className='users'>
                {
                    users.map((user, index) => {
                        return (
                            <div key={index} className='user'>
                                <h1>{user.name}</h1>
                                <p>{user.email}</p>
                            </div>
                        )
                    })
                }
            </div> */}
            <Avengers />
        </div >
    );
}

export default App;
