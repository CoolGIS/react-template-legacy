import { useAtom } from 'jotai'
import { countAtom } from '@/stores/counter.ts'

export function Counter() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="h-30vh flex items-center justify-center">
      <button
        className="h-10 w-32 rounded-full bg-blue-500 text-white"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>
    </div>
  )
}
