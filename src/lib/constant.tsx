export const API_URL = "https://api.weatherapi.com/v1"
export const API_KEY = "93b0ee31e6444e0e88c162552231112"

export function getCurrentDate(separator=''){
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    let newDate = new Date()
    let day = days[newDate.getDay()]; 
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${day}, ${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}