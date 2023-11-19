export const localeDateString = (dateString: string): string => {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return "";
    }

    const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Moscow",
    };

    return date.toLocaleDateString("ru-RU", options);
};