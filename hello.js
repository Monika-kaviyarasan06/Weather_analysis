// // const http = require('http');
// // const port = 3000;
// // const host = 'localhost';

// // // Create HTTP server
// // const server = http.createServer((req, res) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello, Node.js World!\n');
// // });

// // // Start the server
// // server.listen(port, host, () => {
// //   console.log(`Server running at http://localhost:${port}/`);
// // });
// // const express = require('express');
// // const app = express();
// // // Model - MySQL Database connection
// // const http = require('http');
// // const hostname = 'localhost';
// // const port = 3000;
// // const app = http.createServer((req, res) => {
// // res.statusCode = 200;
// // res.setHeader('Content-Type', 'text/plain');
// // res.end('Hello World!');
// // });
// // app.listen(port, hostname, () => {
// // console.log(`Server running at http://${hostname}:${port}/`);
// // });


// // const nodemailer = require('nodemailer');
// // const path = require('path');

// // let mailTransporter =
// //     nodemailer.createTransport(
// //         {
// //             service: 'gmail',
// //             auth: {
// //                 user: 'kaviyakaviyarasan06@gmail.com',
// //                 pass: 'rtsv elue zijs weaq'
// //             }
// //         }
// //     );

// // let mailDetails = {
// //     from: 'kaviyakaviyarasan06@gmail.com',
// //     to: 'monikaviyarasan@gmail.com',
// //     subject: 'Test mail',
// //     text: 'Hii!',
// // };

// // mailTransporter
// //     .sendMail(mailDetails,
// //         function (err, data) {
// //             if (err) {
// //                 console.log('Error Occurs',err);
// //             } else {
// //                 console.log('Email sent successfully');
// //             }
// //         });

// // const http = require('http');

// // const server = http.createServer((req, res) => {
// //   const now = new Date();
// //   const formatted = now.toLocaleString();

// //   res.writeHead(200, { 'Content-Type': 'text/html' });
// //   res.end(`<h1>Current Date & Time</h1><p>${formatted}</p>`);
// // });

// // server.listen(3000, () => {
// //   console.log('Server running at http://localhost:3000');
// // });
// // const express = require('express');
// // const app = express();
// // const PORT = 3000;

// // // Single routing
// // const router = express.Router();

// router.get('/', function (req, res, next) {
//     console.log("Router Working");
//     res.end();
// })

// app.use(router);

// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });
// const express = require('express');
// const app = express();
// const port = 3000;

// // Create a router
// const router = express.Router();

// // Define a route on the router for homepage
// router.get('/', (req, res) => {
//   res.send('Welcome to the AIML!');
// });

// // Use the router in the app
// app.use('/', router);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// app.js

// app.js

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Middleware to parse JSON data
// app.use(bodyParser.json());

// // POST route to handle incoming data
// app.post('/api/data', (req, res) => {
//     const requestData = req.body;
//     // Process the received data (e.g., save to a database)
//     console.log('Received data:', requestData);
//     // below picture is given of console data on server
//     res.status(200).send('Data received successfully!');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/loginDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // MongoDB Schema
// const User = mongoose.model('User', {
//   username: String,
//   password: String
// });

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// // Routes
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
  
//   // Check if user exists
//   const user = await User.findOne({ username, password });

//   if (user) {
//     res.send('<h2>Login Successfully</h2>');
//   } else {
//     res.send('<h2>Invalid credentials</h2>');
//   }
// });

// // Server Start
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
// server.js
document.addEventListener('DOMContentLoaded', () => {
    const APIKey = "4c9d7f6b9bb99f40debc174a42946bc9"; // <-- Replace with your OpenWeatherMap API key

    const container = document.querySelector('.container');
    const searchButton = document.querySelector('.search-box button');
    const weatherBox = document.querySelector('.weather-box');
    const weatherDetails = document.querySelector('.weather-details');
    const error404 = document.querySelector('.not-found');

    searchButton.addEventListener('click', () => {
        const city = document.querySelector('.search-box input').value.trim();

        if (city === '') return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === "404") {
                    error404.style.display = 'block';
                    weatherBox.style.display = 'none';
                    weatherDetails.style.display = 'none';
                    return;
                }

                error404.style.display = 'none';
                weatherBox.style.display = 'block';
                weatherDetails.style.display = 'flex';

                const image = document.querySelector('.weather-box img');
                const temperature = document.querySelector('.weather-box .temperature');
                const description = document.querySelector('.weather-box .description');
                const humidity = document.querySelector('.weather-details .humidity span');
                const wind = document.querySelector('.weather-details .wind span');

                switch (json.weather[0].main) {
                    case 'Clear':
                        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6s_sLUoGBWPi-josduyIKQ_PEynoqV0G4g&s';
                        break;
                    case 'Rain':
                        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugGijHuS-yaUDE-GZNIEw0onoDtzs52y9Vw&s';
                        break;
                    case 'Snow':
                        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vNBCu_44P4Mp9GBF-cJYwyJOr9UlRala2g&s';
                        break;
                    case 'Clouds':
                        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmQUoBHaKkbKB3IJOYt3ozTbBDYkBe2mzqw&s';
                        break;
                    case 'Mist':
                    case 'Haze':
                        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlM_vwhp1nTXU6ASnW3nM57Rh8zCYbChX9g&s';
                        break;
                    default:
                        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6s_sLUoGBWPi-josduyIKQ_PEynoqV0G4g&s';
                }

                temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
                description.innerHTML = json.weather[0].description;
                humidity.innerHTML = `${json.main.humidity}%`;
                wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
            });
    });
});
