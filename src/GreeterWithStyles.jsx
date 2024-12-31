export default function GreeterWithStyles({ name, from }) {
    const styles = {
        color: 'green',
        fontSize: 16,
        backgroundColor: 'black'
    };

    return <div style={styles}>Hi {name} <br></br> From {from}</div>;
}