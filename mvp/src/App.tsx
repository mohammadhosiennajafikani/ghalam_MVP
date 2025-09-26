import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="min-h-dvh grid place-items-center bg-gray-50">
      <div className="space-y-3 rounded-2xl border p-8 shadow">
        <h1 className="text-3xl font-bold">Hello Tailwind v4 + Vite + React 👋</h1>
        <button className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-85">
          Button
        </button>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Tailwind v4 روی Vite بالا اومد 🎉
            <button className="outline-2 outline-offset-2 outline-dotted ...">Button C</button>
          </h1>
        </div>
      </div>
    </div>
  )
}