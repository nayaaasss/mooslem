const city = 1204;
const date = new Date ();
const dd = string(date.getDate()).padStart(2, '0');
const mm = string(date.getMonth() + 1).padStart(2, '0');
const yyyy = date.getFullYear();
const now = yyyy + '-' + mm + '-' + dd;

const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`