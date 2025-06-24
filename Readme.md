# 🎉 Event Guest List Manager

This is a simple web-based application that helps you manage a guest list for an event. It allows you to add guests with categories (Friend, Family, Colleague), toggle their RSVP status, and remove them from the list. The app restricts the total number of guests to a maximum of 10.

---

## 🚀 Features

- Add guest names
- Choose a guest category: Friend, Family, or Colleague
- Limit of 10 total guests
- Toggle RSVP status (Attending / Not Attending)
- Remove guests from the list
- Real-time UI updates

---

## 📁 Project Structure

project-folder/
│
├── index.html # Main HTML structure
├── index.js # JavaScript functionality
├── style.css # Optional styles (not required to run)
└── README.md # Project documentation


## 🛠️ How to Use

1. Open `index.html` in your web browser.
2. Type a guest name and select a category.
3. Click the "Add" button to submit.
4. Use the "Toggle RSVP" button to switch status.
5. Click "Remove" to delete a guest from the list.

---

## 🌐 Technologies Used

- HTML for page structure
- JavaScript for dynamic behavior (DOM manipulation, events, arrays)

---

## 📝 Notes

- Guest names cannot be blank.
- Maximum of 10 guests allowed.
- No backend or local storage – data is cleared on refresh.
- You can extend this app with localStorage or category-based color tags.
