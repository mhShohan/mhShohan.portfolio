const monthArray = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
]

const dateFormatter = (startDate: Date, endDate: Date) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startMonth = monthArray[start.getMonth()];
    const startYear = start.getFullYear();
    const endMonth = monthArray[end.getMonth()];
    const endYear = end.getFullYear();

    return `${startMonth}, ${startYear} - ${endMonth}, ${endYear}`;
}

export default dateFormatter;