export default function Greetings() {
    let date = new Date().getHours();
    
    switch (true) {
        case date >= 5 && date < 11:
            return (<h2> Доброе утро! </h2> );
        case date >= 11 && date < 18:
            return (<h2> Добрый день! </h2> );
        case date >= 18 && date < 23:
            return (<h2> Добрый вечер! </h2> );
        case date >= 23 && date < 5:
            return (<h2> Доброй ночи! </h2> );
        default:
            return (<h2> Доброго времени суток! </h2> );
    }    
}