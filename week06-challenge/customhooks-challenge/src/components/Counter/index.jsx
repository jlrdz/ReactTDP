import { useCounter } from "../../hooks/useCounter"

export default () => {
    const [count, setCount] = useCounter(0)
    
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}