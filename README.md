# weather_now

Weather_Now is a powerful web application that delivers accurate and precise weather information from anywhere around the world. With its simplicity and user-friendly interface, Weather_Now allows you to access real-time weather forecasts, atmospheric and sky conditions for any city in the world instantly, courtesy of the trusted OpenWeather API. The application is built using the Django framework on the back-end and complemented by Javascript, Bootstrap on the front-end. 

### Distinctiveness and Complexity:

The app looks simple, but it is actually a very complex app, and it is different from the other apps because it uses real-time API calls to get the most updated weather information and it is displayed to the user instantly, showing different types of data that the API provides, such as temperature, humidity, the weather icon that changes depending on the sky conditions, whether it is cloudy or clear for example. The idea was to make the app look minimal and easy for the user to read, but at the same time have a really complex front-end and back-end that would allow the user to interact with the app more easily and dynamically, here are some of them:

**Key Features:**

1. **Show the Weather Info:** The application main function is to display on the screen the weather information of any city on planet earth that the user has entered into the search bar without refresh the page, to do that the app makes APIs call to a third-party weather information API to get the most updated information and displayed using API Fech and Javascript.

2. **Change Mesure Units:** A feature that I find subtle but very important, is the color change that occurs when clicking on the temperature unit sign in the top of the page to indicate which mesure unit is being used, Celsius or Fahrenheit, and also change the temperature mesure unit sign in the weather information section without refresh the page, this characteristic was made using some Javascript logic staments like "if" and "else" to modify the behavior of some element depending on certain logic, and Javascript elements like the "eventListener" for the click event, the "getElementById" to get the element by id and change the color of the element and the "innerHtml" to change the text inside the element, in this case change the mesure units from Celsius (C) to Fahrenheit(F) or vice versa in the weather information section.

3. **Register:** In the back-end, the Django framework was use to create the application and the database, database was created using Python and django models to be used to store the credentials and information of the user account.

4. **Responsive:** The application use the Bootstrap framework to make the application responsive and easy to use in any device, its responsive design allows you to enjoy the same level of functionality and accuracy whether you're on a desktop, tablet, or smartphone.

What’s contained in each file you created.

How to run your application.