# TastyBox - Recipe Tracker

![TastyBox Banner](https://via.placeholder.com/1200x400/FF6B6B/FFFFFF?text=TastyBox+Recipe+Tracker)

A full-stack recipe management application built with the MEAN stack (MongoDB, Express.js, Angular, and Node.js). TastyBox helps you organize, manage, and access your favorite recipes in one place.

## 🚀 Features

- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 📝 **Create & Manage Recipes**: Add, view, and delete your favorite recipes
- 🔍 **Easy Organization**: Clean interface to manage all your recipes
- ⚡ **Fast & Efficient**: Built with modern web technologies for optimal performance
- 🌈 **Modern UI**: Clean and intuitive user interface with Angular Material

## 🛠 Tech Stack

### Frontend
- **Angular 16** - Modern web framework
- **Angular Material** - UI component library
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **SCSS** - Styling with variables and mixins

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)
- MongoDB Atlas account or local MongoDB installation
- Angular CLI (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khushipy/tastybox.git
   cd tastybox
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env  # Update with your MongoDB URI
   npm run dev
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ng serve
   ```

4. **Open your browser**
   ```
   http://localhost:4200
   ```

## 📁 Project Structure

```
tastybox/
├── backend/               # Backend server
│   ├── config/           # Configuration files
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── .env              # Environment variables
│   └── server.js         # Express server entry point
│
└── frontend/             # Frontend application
    ├── src/
    │   ├── app/          # Angular application
    │   │   ├── components/   # Reusable components
    │   │   ├── services/     # API services
    │   │   └── shared/       # Shared modules
    │   └── assets/       # Static assets
    └── environments/     # Environment configurations
```

## 🔧 Configuration

### Backend Configuration
Create a `.env` file in the `backend` directory with:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

### Frontend Configuration
Update the API URL in `frontend/src/environments/environment.ts` if needed.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- [Angular](https://angular.io/) - The web framework used
- [Express](https://expressjs.com/) - Fast, unopinionated web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The database for modern applications
- [Angular Material](https://material.angular.io/) - Material Design components for Angular
