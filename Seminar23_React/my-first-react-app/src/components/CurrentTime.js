export default function CurrentTime(){
    let date = new Date().toLocaleTimeString();
    return (
        <div style = {{backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "5px", fontSize: "18px", color: "#888" }}>
            <p>
                Текущее время: {date}
            </p>
        </div>
    )
}