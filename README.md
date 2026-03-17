# 📊 Student Attendance Dashboard

## 📌 Project Overview

The **Student Attendance Dashboard** is a React-based web application that helps teachers visually track student attendance and identify low-performing students. It provides filtering, sorting, and highlighting features to make data analysis simple and interactive.

---

## 🚀 Features

### ✅ Core Features

* Fetch student data from API using `useEffect`
* Add random attendance percentage to each student
* Display:

  * Student Name
  * Attendance %
  * Status Badge (Good / Low)

### 🎯 Filtering Options

* **All Students**
* **Present (≥ 75%)**
* **Absent (< 75%)**

### 🎨 UI Features

* Color Coding:

  * 🟢 Green → Attendance ≥ 75%
  * 🔴 Red → Attendance < 75%
* Highlight selected row on click
* Toggle:

  * Show only students with attendance < 75%

### 🔄 Bonus Features

* Sort attendance:

  * Ascending ↑
  * Descending ↓

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** CSS
* **API:** JSONPlaceholder

---

## 📂 Project Structure

```
project-folder/
│
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── public/
│   └── index.html
│
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
```

### 2️⃣ Navigate to project folder

```bash
cd project-folder
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the app

```bash
npm start
```

---

## 🌐 API Used

```
https://jsonplaceholder.typicode.com/users
```

* Dummy user data is fetched
* Attendance % is generated randomly in the frontend

---

## 🧠 Learning Outcomes

This project demonstrates:

* React Hooks (`useState`, `useEffect`)
* API fetching
* List rendering using `map()`
* Data filtering using `filter()`
* Sorting using `sort()`
* Conditional rendering
* Event handling in React
* Dynamic UI updates

---

## 🎓 Viva Explanation

* **useEffect** → Used to fetch API data when component loads
* **useState** → Manages UI state like filters, sorting, and selection
* **map()** → Renders student list dynamically
* **filter()** → Applies conditions for display
* **sort()** → Orders students by attendance
* **Conditional Styling** → Changes colors based on attendance
* **Event Handling** → Handles clicks and toggle actions

---

## 📸 Future Enhancements

* 🔍 Search functionality
* 🌙 Dark mode
* 📊 Charts for attendance analytics
* 💾 Save data using LocalStorage
* 📄 Student detail modal

---

## 🙌 Conclusion

This project is a great example of building an interactive dashboard using React. It combines data fetching, state management, and UI design to solve a real-world problem for teachers.

---
