import { useState, useEffect } from "react";
import { getCryptoPrice } from "../services/scrapperService";
import "../components/styles.css"

export function Price() {
    const [price, setPrice] = useState<number>(0);
    const [increased, setIncreased] = useState<boolean>(true);
    const [animationKey, setAnimationKey] = useState<number>(0);

    useEffect(() => {

        const getData = async () => {
            const data = await getCryptoPrice('notcoin', 'usd', price);
            setIncreased(price < +data ? true : false);
            setPrice(+data);
            setAnimationKey(prev => prev + 1);
        }

        const interval = setInterval(() => {
            getData();
        }, 15000);

        getData();

        return () => clearInterval(interval);
    }, [])
    return (
        <div key={animationKey} className={"center " + (increased ? "increase" : "decrease")} >
            {price}
        </div> 
    )
}
