# Weather App

The Weather App is a web-based application that allows users to view current weather conditions for different locations. It retrieves weather data from a weather service API and displays the information in a user-friendly manner.

## Functional Requirements

The Weather App has the following specific requirements:

- The app runs on Google Chrome or Mozilla Firefox.
- The app is a web-based application.
- The app uses local storage for a database.
- The user can add multiple locations for which the weather conditions will be shown.
- The app should be responsive on desktop, tablet, and mobile devices.

## Installation

To install and run the Weather App locally, follow these steps:

1. Clone the repository:

   git clone <https://github.com/Dzevahir/wheather-app.git>
   Navigate to the project directory:

cd weather-app
Install the dependencies using npm:

npm install
Create a .env file in the root directory of the project.

In the .env file, add the following line and replace <API_KEY> with your weather service API key:

REACT_APP_API_KEY=<YOUR_API_KEY>-fetching current weather from:https://www.weatherbit.io/
REACT_APP_API_KEY2=<YOUR_API_KEY>-fetching current conditions from:https://www.accuweather.com/
Note: Make sure not to share your API key publicly.

Save the .env file.

Start the development server:

npm start
Open your web browser and access the Weather App at http://localhost:3000.

Usage

Click on the "Add" button to add a location for which you want to view the weather conditions.
Enter the location in the input field and press Enter.
The app will fetch the current weather information for the location and display it in a card.
Each card shows the location name, current temperature, sky condition, wind speed and direction, along with a country flag.
To remove a location card, click on the "Remove" button.

Technologies Used

React: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making API requests.
Material-UI: A popular UI components library for React.
Local Storage: HTML5 feature used to store data in the browser.

Limitations and Future Improvements

The app uses local storage as a simple database. It may not be suitable for larger-scale applications with complex data requirements.
The app currently supports only one weather service API. To switch to a different API, the code needs to be modified accordingly.
Error handling for API requests can be further improved to provide more meaningful error messages to the user.
Additional features such as hourly or extended forecasts could be added to enhance the app's functionality.
Feel free to contribute to the project by submitting pull requests or reporting issues if you encounter any problems.

![Screenshot 1](./public/assets/images/Screenshot%201.png)
![Screenshot 2](./public/assets/images/Screenshot%202.png)
![Screenshot 3](./public/assets/images/Screenshot%203.png)
![Screenshot 4](./public/assets/images/Screenshot%204.png)
![Screenshot 5](./public/assets/images/Screenshot%206.png)
![Screenshot 6](./public/assets/images/Screenshot%207.png)
