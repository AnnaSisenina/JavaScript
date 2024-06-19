import { useEffect, useState } from "react"

export default function Timer () {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])


    return (
        <div style = {{backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px", fontSize: "18px", color: "#888" }}>
            <p>
                Текущее время: {time.toLocaleTimeString()}
            </p>
        </div>
    )
}