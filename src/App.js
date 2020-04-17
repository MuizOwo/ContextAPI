import React from 'react';
import Navbar from './Component/Navbar'
import BookList from './Component/BookList';
import ThemeContextProvider from './Context/ThemeContext';
import ThemeToggle from './Component/ThemeToggle';
import AuthContextProvider from './Context/AuthContext';

function App() {
  return (
    <div className="App">
            <ThemeContextProvider>
              <AuthContextProvider>
                    <Navbar />
                    <BookList />
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
    </div>
  );
}

export default App;
