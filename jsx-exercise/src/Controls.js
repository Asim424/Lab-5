import './users.js';

// create a Delete component that renders a text box and a Delete button
function Delete() {
    return (
        <div>
            <input type="text"/>
            <button>Delete</button>
        </div>
    );
}
// Controls component that renders the <Delete /> 
// component followed by three additional buttons: Sort by Group, Sort by ID, and Grid /List.
//  Export only Controls from Controls.js.
function Controls() {
    return (
        <div>
            <Delete />
            <button>Sort by Group</button>
            <button>Sort by ID</button>
            <button>Grid / List</button>
        </div>
    );
}



export default Controls;