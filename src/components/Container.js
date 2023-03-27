import React from 'react';
import { WeatherProvider } from '../context/WeatherContext';
import Footer from './Footer';
import Header from './Header';
import Location from './Location';
import WeatherCard from './WeatherCard';

export default function Container() {
  return (
    <WeatherProvider>
        <Header />
        <Location />
        <WeatherCard />
        <Footer />
    </WeatherProvider>
  )
}
