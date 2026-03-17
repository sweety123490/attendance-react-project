<<<<<<< HEAD
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
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 1017ccb (final)
