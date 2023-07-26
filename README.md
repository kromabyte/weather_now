# weather_now 🌦️

Weather_Now is a powerful web application that delivers accurate and precise weather information from anywhere around the world. With its simplicity and user-friendly interface, Weather_Now allows you to access real-time weather forecasts, atmospheric and sky conditions for any city in the world instantly, courtesy of the trusted OpenWeather API. The application is built using the Django framework on the back-end and complemented by Javascript, Bootstrap on the front-end.

![screenshot image ](https://github.com/kromabyte/weather_now/blob/master/weather/static/weather/images/screenshot.png)


### Distinctiveness and Complexity.

The app looks simple, but it is actually a very complex app, and it is different from the other apps because it uses real-time API calls to get the most updated weather information and it is displayed to the user instantly, showing different types of data that the API provides, such as temperature, humidity, the weather icon that changes depending on the sky conditions, whether it is cloudy or clear for example. The application is having a real and authentic communication with the third-party weather information API, unlike previous apps where API calls were not to an real API.The idea was to make the app look minimalistic and easy for the user to read, but at the same time have a really complex front-end and back-end that would allow the user to interact with the app more easily and dynamically, here are some of them:

**Key Features:**

1. **Show the Weather Info:** The application main function is to display on the screen the weather information of any city on planet earth that the user has entered into the search bar without refresh the page, to do that the app makes APIs call to a third-party weather information API to get the most updated information and displayed using API Fech and Javascript.

2. **Clean and Intuitive Interface:** The application is designed to be intuitive and easy to use, with a clean and minimalistic interface that allows the user to interact with the app more easily. this was done by a good structure and composition of the Html code of the pages and a good design of the page using Css, also Javascript was used to make the app more dynamic and interactive.

3. **Change Mesure Units:** One feature that I find subtle but very important is the color change that happens when you click on the temperature unit sign at the top of the page to indicate which unit of measurement is being used, Celsius or Fahrenheit, and also change the sign of the temperature unit of measurement in the weather information section without refreshing the page, this feature was made using some logical Javascript statements like "if" and "else" to modify the behavior of some element depending on some logic, and Javascript elements like the "eventListener" for the click event, the "getElementById" to get the element by id and change the color of the element and the "innerHtml" to change the text inside the element, in this case change the units of measure from Celsius (C) to Fahrenheit (F) or vice versa in the weather information section.

4. **User Registration:** On the back-end, the Django framework was used to create the application and the database, the database was created using Python and django models to store user account information and credentials.

5. **Responsive design:** The application use the Bootstrap framework to make the application responsive and easy to use in any device, its responsive design allows you to enjoy the same level of functionality and accuracy whether you're on a desktop, tablet, or smartphone.

### What’s contained in each file created.

 - `./Weather_Now/`: - This folder contains the django files that makes the application work, heres is where the django project was created.
  -  `./Weather_Now/README.md` - This file contains the description of the application and how to run it.
  - `./Weather_Now/manage.py` - This file contains the python code used to run the application.
  - `./Weather_Now/db.sqlite3` : This file contains the database of the application.
  - `./Weather_Now/Weather_ Now` : This folder was created by default by django and contains the settings of the entire application, here i have modified the settings.py file to install the weather app and urls.py file to let the weather app urls to be used in the application.
 - `./Weather_Now/weather` : This folder contains the files of the weather app, here is where the weather application was created.
  - `./Weather_Now/weather/admin.py` : This file contains the python code used to register the models in the admin site.
  - `./Weather_Now/weather/apps.py` : This file contains the python code used to configure the weather app.
  - `./Weather_Now/weather/models.py` : This file contains database models of the application.
  - `./Weather_Now/weather/tests.py` : This file contains the python code used to test the application.
  - `./Weather_Now/weather/urls.py` : This file contains the urls of the application.
  - `./Weather_Now/weather/views.py` : This file contains the python code used to create the views of the application.
  - `./Weather_Now/weather/templates/weather` : This folder contains the html files of the application.
  - `./Weather_Now/weather/templates/weather/index.html` : This file contains the html code used to create the index page of the application.
  - `./Weather_Now/weather/templates/weather/login.html` : This file contains the html code used to create the login page of the application.
  - `./Weather_Now/weather/templates/weather/register.html` : This file contains the html code used to create the register page of the application.
  - `./Weather_Now/weather/templates/weather/layout.html` : This file contains the html code used to create the layout page of the application.
  - `./Weather_Now/weather/static/weather` : This folder contains the static files of the application.
  - `./Weather_Now/weather/static/weather/style.css` : This file contains the css code to styled the pages of the application.
  - `./Weather_Now/weather/static/weather/script.js` : This file contains the javascript code of the application.
  - `./Weather_Now/weather/static/weather/images` : This folder contains the images of the application.

### How to run the application.

To run the application you need to have Python installed in your computer, you can download it from the official Python website and install it in your computer, After that you have to create a new folder and depending of your code editor you have to open the folder in your code editor, next you have to open the terminal in your code editor and clone the remote repository using the command:

    git clone https://github.com/kromabyte/weather_now.git

Next in the same folder you have to install django using the command:

    pip3 install django

after that you have to set the environment to run the application using the command:

    python3 -m venv .venv

next you have to activate the environment using the command:

    source .venv/bin/activate

next you have to make the migrations using the command:

    python manage.py makemigrations

next you have to migrate the database using the command:

    python manage.py migrate

and finally you have to run the application using the command:

    python manage.py runserver

### aditional information.

If the API keys don´t works you may need to create a account at openweathermap.org and get your own API keys and replace them in the code.