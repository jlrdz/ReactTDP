import { useProducts } from "../../hooks/useProducts"

export default () => {   

    const { loading, error, data } = useProducts()

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        <p>Oh no!</p>
    }

    return (
        <>{data && data.map((item) => <div key={item.title}>{item.title}</div>)}</>
    )
}