const formatDate = (date) => {
    let dateArray = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let formattedDate = date.split('').slice(0, 10).join('');
    let day = formattedDate.slice(formattedDate.length - 2, formattedDate.length);
    let month = +formattedDate.slice(formattedDate.length - 5, formattedDate.length - 3);
    let lettersMonth = months[month-1];
    dateArray.push(formattedDate, day, lettersMonth);
    return dateArray
}

const formatDateString = (date) => {
    let formattedDate = date.split('').slice(0, 10).join('');
    return formattedDate
}
export default formatDate
export {
    formatDateString
}
