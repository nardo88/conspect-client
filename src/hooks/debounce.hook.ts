import { useRef } from 'react'

export default function useDebounce(fn: any, ms: any) {
  const timeOut = useRef()
  return function (...args: any) {
    const fnCall = () => fn.apply(null, args)
    clearTimeout(timeOut.current)
    // @ts-ignore
    timeOut.current = setTimeout(fnCall, ms)
  }
}
