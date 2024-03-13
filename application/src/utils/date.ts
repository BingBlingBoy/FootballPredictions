const getDate = () => {
    const currentDate = new Date(); 
    currentDate.setUTCDate(currentDate.getUTCDate() - 7); 

    // Format the date as "YYYY-MM-DD" 
    const formatDate =  
        `${currentDate.getUTCFullYear()} -  
        ${(currentDate.getUTCMonth() + 1) 
            .toString().padStart(2, '0') 
        } - ${currentDate.getUTCDate() 
            .toString().padStart(2, '0')}`;

    const formattedDate = formatDate.split(' ').join('');
    console.log(formattedDate)
    return formattedDate
}

export default getDate