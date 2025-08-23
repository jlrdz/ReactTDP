import { useCallback } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

//useEffect(()=>{},[]) //void
//const newFunc = useCallback((args)=>{},[]) //func
//const myVar = useMemo(()=>{},[]) //return of callback


const noGoodToppings =["pineapple", "hotdog"];
export default ({ toppings }) => {
    

    // const toppingFilter = useCallback ((toppings) => {
    //     console.log("filtering toppings");
    //     return toppings.filter((topping, index, arr) => {
    //         return (
    //             !noGoodToppings.includes(topping) && arr.indexOf(topping) === index
    //         );
    //     });
    // }, [noGoodToppings])

    const goodToppings = useMemo(() => {
        console.log("filtering toppings");
        debugger
        const arr = toppings.filter((topping, index, arr) => {
            return (
                !noGoodToppings.includes(topping) && arr.indexOf(topping) === index
            );
        });

        return arr
    }, [toppings]);

    const [,setTime] = useState(new Date());
    useEffect(() => {
        const time = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(time);
    }, [noGoodToppings]);

    return <>
        <ul>
            {goodToppings.map((topping) => (
                <li key={topping}>{topping}</li>
            ))}
        </ul>

        Total Toppings: {goodToppings.length}
    </>
}