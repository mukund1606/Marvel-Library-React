import './App.css';
import Avenger from './Avenger';
import avengers_data from './Resources/avengers.json';

function App() {
    let avengers = avengers_data.data;
    return (
        <>
            <h1 className='header'>Marvel Library</h1>
            <div className='avengers'>
                {avengers.map((avenger, index) => {
                    return (
                        <Avenger key={index} avenger_data={avenger} />
                    )
                })}
            </div>
        </>
    );
}

export default App;
