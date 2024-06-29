import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default Todos;

// function Todos() {
//     return (
//         <ul>
//             <li>Learn React</li>
//             <li>Learn TypeScript</li>
//         </ul>
//     );
// }

// export default Todos;
