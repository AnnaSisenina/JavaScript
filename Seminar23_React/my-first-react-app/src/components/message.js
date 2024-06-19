import Comments from "./Comments";

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
        width: '500px',
        marginBottom: '20px',
      };
      
    return (
        <div style={containerStyles}>
            <p style={messageStyles}> <span style={{color: "#888"}}>Сообщение от пользователя {name}:</span> {text}</p>
            <p style={{margin: '5px', fontSize: "12px"}} > Комментарии пользователей: </p>
            <Comments />
        </div>
        
    )
}