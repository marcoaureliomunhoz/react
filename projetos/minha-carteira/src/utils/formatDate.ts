const formatDate = (date: string): string => {
    const ddate = new Date(date);

    const year = ddate.getFullYear();

    const initialDay = ddate.getDate();
    const day = (initialDay < 10 ? '0' : '') + initialDay;

    const initialMonth = ddate.getMonth() + 1;
    const month = (initialMonth < 10 ? '0' : '') + initialMonth;

    return `${day}/${month}/${year}`;
};

export default formatDate;