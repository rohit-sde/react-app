import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (
                <li key={item.id}>{item.text}</li>
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
