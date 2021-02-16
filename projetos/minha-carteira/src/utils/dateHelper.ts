interface IDateObject {
    year: number;
    month: number;
    day: number;
}

export const getDateObject = (date: string): IDateObject => {
    const ddate = new Date(date);

    return {
        year: ddate.getFullYear(),
        month: ddate.getMonth() + 1,
        day: ddate.getFullYear()
    };
};