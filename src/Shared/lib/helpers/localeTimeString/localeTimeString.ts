export const localeTimeString = (dateString: string): string => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return "";
    }

    const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Moscow",
    };

    return date.toLocaleTimeString("ru-RU", options);
};