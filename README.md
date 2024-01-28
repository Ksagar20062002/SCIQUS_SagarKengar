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
![image](https://github.com/Ksagar20062002/SCIQUS_SagarKengar/assets/156411259/b4078f81-78d8-4619-8a9d-76fee40f3a17)
![image](https://github.com/Ksagar20062002/SCIQUS_SagarKengar/assets/156411259/de295edd-3c67-4a5e-8953-6af27097e5d5)
![image](https://github.com/Ksagar20062002/SCIQUS_SagarKengar/assets/156411259/7b8123cd-0885-4024-af24-c52f636a9530)
![image](https://github.com/Ksagar20062002/SCIQUS_SagarKengar/assets/156411259/23394357-62c0-4eef-a8fb-468c23d927e0)
![image](https://github.com/Ksagar20062002/SCIQUS_SagarKengar/assets/156411259/d94e2653-d43e-4854-92ae-ede581306ce7)
![image](https://github.com/Ksagar20062002/SCIQUS_SagarKengar/assets/156411259/bda882a7-b37c-4284-ba43-489f69d061b8)
![image](https://github.com/Ksagar20062002/SCIQUS_SagarKengar/assets/156411259/3e2e87d5-aca1-4546-8b25-e45aca6e54b5)



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
