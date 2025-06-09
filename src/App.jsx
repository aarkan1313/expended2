import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vite + React + Tailwind
          </h1>
          <p className="text-gray-600">
            Your modern development template is ready! 🚀
          </p>
        </div>
        
        <div className="mb-6">
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
        
        <div className="space-y-2 text-sm text-gray-500">
          <p>✅ React 19 + Vite</p>
          <p>✅ Tailwind CSS v4.0</p>
          <p>✅ ESLint + Prettier</p>
          <p>✅ All dependencies ready</p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> to start building
          </p>
        </div>
      </div>
    </div>
  )
}

export default App