import { useLifecycles } from 'react-use'

export function Home() {
  // react-use示例
  useLifecycles(
    () => {
      console.log('Home mounted')
    },
    () => {
      console.log('Home unmounted')
    }
  )

  return (
    <div className="h-50vh center text-(3xl blue-500) font-bold">
      主页 <span className="i-gis:earth-asia ml-3"></span>
    </div>
  )
}
