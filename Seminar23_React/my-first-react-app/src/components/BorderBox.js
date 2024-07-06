export default function BorderBox({children}) {
    return (
        <div style={{ border: '1px solid #888', padding: '10px', margin: '5px' }}>
            {children}
        </div>
    );

}