
import './Button.css'


// eslint-disable-next-line react/prop-types
function Button({ jokeApi }) {
    return (
        <button onClick={jokeApi}>Generate Joke</button>
    );
}

export default Button;
