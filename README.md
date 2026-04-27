# Ethnotech_Internship_Project_April_Weather_Application

---

# 🌦️ Weather Forecasting Web Application

A full-stack **Weather Forecasting Web Application** that provides real-time weather updates and forecasts using external APIs. Built with modern technologies, this project demonstrates integration of REST APIs, clean UI design, and full-stack development practices.

---

## 🚀 Tech Stack

### 💻 Frontend

* React (Vite)
* Tailwind CSS
* Axios

### ⚙️ Backend

* Spring Boot
* REST APIs
* Exception Handling

### 🗄️ Database

* MySQL
* JPA / Hibernate

### 🌐 External API

* OpenWeatherMap API

---

## ✨ Features

✔️ Search weather by city
✔️ Real-time temperature, humidity, wind speed
✔️ 5-day weather forecast
✔️ Save favorite cities
✔️ Responsive modern UI (Glassmorphism + Dark Mode)
✔️ Error handling (invalid city / API failure)
✔️ Environment-based API configuration

---

## 🏗️ System Architecture

```
[ React Frontend ]
        ↓
 REST API Calls (Axios)
        ↓
[ Spring Boot Backend ]
        ↓
 External API (OpenWeatherMap)
        ↓
[ MySQL Database ] (Favorites)
```

---

## 📂 Project Structure

```
weatherApp/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   ├── dto/
│   └── exception/
│
├── frontend/
│   ├── components/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
```

---

## 🔌 API Endpoints

### 🌤 Weather APIs

```
GET /api/weather?city={city}
GET /api/forecast?city={city}
```

### ⭐ Favorites APIs

```
GET /api/favorites
POST /api/favorites
DELETE /api/favorites/{id}
```

---

## ⚙️ Setup & Installation

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/weatherApp.git
cd weatherApp
```

---

### 🔹 2. Backend Setup (Spring Boot)

```bash
cd backend
```

#### Configure `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/weather_app
spring.datasource.username=root
spring.datasource.password=yourpassword

openweather.api.key=YOUR_API_KEY
```

#### Run Backend

```bash
mvn spring-boot:run
```

Backend runs on:
👉 [http://localhost:8080](http://localhost:8080)

---

### 🔹 3. Frontend Setup (React)

```bash
cd frontend
npm install
```

#### Configure `.env`

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

#### Run Frontend

```bash
npm run dev
```

Frontend runs on:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testing

* Use Postman to test backend APIs
* Check:

  * Valid city → data
  * Invalid city → error handling
* Verify favorites CRUD operations

---

## 🌍 Deployment

### Backend:

* Render / Railway / AWS

### Frontend:

* Vercel / Netlify

👉 Update `.env` with deployed backend URL

---

## 📌 Resume Points

* Developed a full-stack weather forecasting application using React, Spring Boot, and MySQL
* Integrated external REST APIs to fetch and display real-time weather data
* Designed responsive UI with modern styling and implemented favorites feature with database persistence

---

## 🎯 Future Enhancements

* 🔐 User Authentication (JWT)
* 📍 Location-based weather detection
* ⚡ Caching for faster responses
* 🤖 AI-based weather insights
* 📊 Charts & analytics

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Chaithra B S
Final Year Engineering Student

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
roject**
✔ Help you **deploy live step-by-step**
