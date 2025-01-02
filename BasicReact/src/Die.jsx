export default function Die({ numSides = [1, 2] }) {
    let expressions = [];

    // Ensure numSides is an array for consistent processing
    const sidesArray = Array.isArray(numSides) ? numSides : [numSides];

    sidesArray.forEach((sides, index) => {
        let numberOfSides = Number(sides);

        if (!isNaN(numberOfSides) && numberOfSides > 0) {
            let roll = Math.floor(Math.random() * numberOfSides) + 1;
            expressions.push(`D${numberOfSides} Roll: ${roll}`);
        } else {
            expressions.push(`Invalid number of sides for die ${index + 1}`);
        }
    });

    return (
        <>
            {expressions.map((expression, index) => (
                <p key={index}>{expression}</p>
            ))}
        </>
    );
}