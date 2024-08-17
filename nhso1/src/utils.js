export function formatThaiDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear() + 543; 
    
    const thaiMonths = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    const month = thaiMonths[date.getMonth()];
    
    return `${day} ${month} ${year}`;
  }