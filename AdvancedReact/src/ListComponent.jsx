import { useState } from 'react';

const ListComponent = () => {
    const [list, setList] = useState([1, 2, 3]);

    const addNumber = () => {
        setList((oldList) => [...oldList, oldList[oldList.length - 1] + 1])
    };

    const addNumberExpanded = () => {
        setList((prevList) => {
            const lastNumber = prevList[prevList.length - 1];
            return [...prevList, lastNumber + 1];
        });
    };

    return (
        <div>
            <h2>Number List</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Add a Number</button>
            <button onClick={addNumberExpanded}>Add a Number Expanded</button>
        </div>
    );
};

export default ListComponent;