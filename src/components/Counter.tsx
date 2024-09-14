import { useAtom } from 'jotai'
import { countAtom } from '@/stores/counter.ts'

export function Counter() {
  const [count, setCount] = useAtom(countAtom)

  return (
    <div className="flex justify-center items-center h-[30vh]">
      <button
        className="w-32 h-10 bg-blue-500 rounded-full text-white"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>
    </div>
  )
}
