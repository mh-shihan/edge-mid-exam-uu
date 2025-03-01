# JSON Data Table

This project displays a table of data fetched from a JSON string and dynamically inserts it into an HTML table. Each row has a delete button that allows the user to remove the corresponding row from the table.

## Features

- A responsive HTML table that displays a list of users.
- Each row contains user information: ID, Name, and Email.
- A "DELETE" button next to each row that allows for the removal of that row from the table.
- The data is rendered using JavaScript from a hardcoded JSON string.

## Installation

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your browser to view the table.

## How It Works

1. The JSON data is defined in the `jsonData` variable in the script.
2. Using JavaScript, the data is parsed from the JSON format and inserted into the HTML table.
3. Each row in the table has a DELETE button. When clicked, it calls the `deleteRow` function, which removes the row from the table.

## Code Explanation

### HTML Structure

- The `<table>` element has an `id="dataTable"` that contains headers for ID, Name, Email, and Action (Delete button).
- The table body (`<tbody>`) is dynamically populated using JavaScript.

### JavaScript Functionality

- The `jsonData` string contains the data in JSON format.
- `JSON.parse(jsonData)` converts the string into an array of objects.
- The `data.forEach()` loop iterates through the data and creates a table row (`<tr>`) for each entry.
- A "DELETE" button is created and linked to the `deleteRow` function, which removes the row from the table when clicked.

### CSS Styling

- Simple styling is applied to the table for a clean and readable layout.
- The table is bordered, and alternating row colors are used for better visual separation.
- The DELETE button is styled with a red background that changes when hovered.

## Usage

- Open the project in a web browser to view the data table.
- Click the "DELETE" button on any row to remove it from the table.





