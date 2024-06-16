export default function Message({name, text}) {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };
      
    const messageStyles = {
        backgroundColor: '#f1f1f1',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        boxSizing: 'border-box',
        width: '300px',
        marginBottom: '20px',
      };
      
    return (
        <div style={containerStyles}>
            <p style={messageStyles}> <span style={{color: "#888"}}>Сообщение от пользователя {name}:</span> {text}</p>
        </div>
    )
}