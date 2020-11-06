const WEEKDAY = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

function formatDate(matchDateTime: number[]): string[] {
    const date = new Date(matchDateTime[0], matchDateTime[1] - 1, matchDateTime[2], matchDateTime[3], matchDateTime[4]);

    const weekday = WEEKDAY[date.getDay()];
    const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const time = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

    return [weekday, day, time];
}

export default formatDate;
