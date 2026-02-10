import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Home/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Clients from './Home/Clients';
import Sidebar from './Home/Sidebar';
import Users from './Home/Users';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Weather from './Home/Weather';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="clients" element={<Clients />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="users" element={<Users />} />
            <Route path="weatherUI" element={<Weather />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;
