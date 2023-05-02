import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Facts from './pages/Facts';
import About from './pages/About';
import Landing from './pages/Landing';
import Layout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="dashboard"
                    element={
                        <>
                            <Layout />
                            <Dashboard />
                        </>
                    }
                >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="facts" element={<Facts />} />
                    <Route path="about" element={<About />} />
                </Route>

                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
