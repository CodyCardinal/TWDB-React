export default function Greeter({ name, from }) {
    let lastName;
    if (name === 'Cody') {
        lastName = <h2>LastName: Cardinal</h2>;
    }
    return (
        <>
            <h1>Hi {name}</h1>
            {lastName}
            <h2>from: {from}</h2>

        </>
    );
}