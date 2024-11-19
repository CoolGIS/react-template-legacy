import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DevTools } from 'jotai-devtools'
import { Counter } from '@/components/Counter.tsx'
import { Link, Outlet } from 'react-router-dom'
import { queryClient } from '@/plugins/tanstack-query.ts'

function App() {
  return (
    <>
      <DevTools />
      <QueryClientProvider client={queryClient}>
        <Counter />
        <ul className="m-2.5 flex items-center justify-center gap-2.5 border border-gray-300 rounded-md bg-white p-2.5">
          <li>
            <Link to="/home">主页</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
