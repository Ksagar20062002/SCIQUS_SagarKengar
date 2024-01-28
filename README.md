# Student Management Portal

## Description
The Student Management Portal is a secure web application designed for managing student information and user accounts. It offers distinct features for administrators and registered students, ensuring secure access and data integrity throughout the system.

### Admin Features:
- **Secure Login**: Only registered administrators can securely log in to the portal using their unique credentials.
- **Student Management**: Admins have full control over student information, including adding, deleting, viewing, and editing student profiles.
- **Multiple Admins**: The portal supports multiple administrators, each with their own set of credentials and permissions.
- **Credential Management**: New admins can be added by inserting their credentials into the `init.js` file.
- **Data Integrity**: Unique constraints are enforced on email IDs and usernames to maintain data integrity.
- **Validation**: Email and password validations are implemented to ensure data integrity and security.

### Student Features:
- **Secure Registration**: Only registered students can access the portal by completing the registration process.
- **Profile Viewing**: Registered students can securely log in to view their profiles and access relevant information.
- **Flexible Registration**: Students can register with the portal even if they haven't filled out all the fields in the registration form.
- **Login Security**: Login forms prevent progression without entering valid email and password combinations.

The project utilizes MongoDB for storing student data and implements robust error handling, validation checks, and user-friendly interfaces to enhance user experience and security.

## Technologies Used:
- HTML
- CSS
- JavaScript
- EJS
- Express.js
- Node.js
- MongoDB

## Installation
1. Clone the repository using the following command:
    ```
    git clone https://github.com/Ksagar20062002/SCIQUS_SagarKengar.git
    ```
2. Install dependencies using `npm install`.

# Implementation



## Running the Project
1. Use Node.js version 20.11.0 to run the project. You can manage Node.js versions using a version manager like nvm (Node Version Manager).
2. Start the server using `node init.js` followed by `nodemon app.js` or `node app.js`.
3. Access the portal through a web browser.

## License
This project is licensed under the [MIT License](link-to-license).

## Credits
Give credit to contributors or sources of inspiration here.

## Contact
For any inquiries or support, please contact us at 8605142529.
