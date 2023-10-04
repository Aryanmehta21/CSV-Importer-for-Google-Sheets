# CSV-Importer-for-Google-Sheets

### 1. User Interface Setup:
- Create a basic HTML user interface with:
  - A drop zone for dragging and dropping CSV files or selecting them.
  - A mapping table to associate CSV columns with Google Sheets columns.
  - Buttons for importing, canceling, and an "OK" button for closing the window after import.
- Style the interface with CSS for a clean and intuitive look.

### 2. File Handling:
- Implement JavaScript functions for file selection and drag-and-drop functionality.
- Capture the selected/dropped file and display its name to the user.

### 3. CSV Parsing:
- Parse the selected CSV file to extract its headers (the first row).
- Populate the CSV column headers in the mapping table.
- Automatically set default dropdown values for each CSV column.

### 4. Column Mapping:
- Allow users to select Google Sheets columns for each CSV column using dropdown menus.
- Store the column mapping information in an array.

### 5. Importing Data:
- When the user clicks the "Import" button, trigger the `importCSV()` function.
- Prepare the data by reading the CSV file and column mapping.
- Show a loading message while importing data.
- Use `google.script.run` to call a server-side Google Apps Script function (`importCSVData()`) for the actual data import.

### 6. Success Message:
- After a successful import, display a success message.
- Clear the container and replace it with the success message.
- Display the "OK" button, allowing the user to close the window.

### 7. Closing the Window:
- Implement a function (e.g., `closeWindow()`) to close the web app window when the "OK" button is clicked.

### 8. Deployment:
- Deploy the Google Apps Script as a web app for user access.

### 9. Styling and Enhancements:
- Customize CSS styles for an attractive and user-friendly interface.
- Add any additional features or enhancements as needed.
