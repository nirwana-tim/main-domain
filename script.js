
function updateClock(){
    const now = new Date()

    let jam = String(now.getHours()).padStart(2,'0')
    let menit = String(now.getMinutes()).padStart(2,'0')
    let detik = String(now.getSeconds()).padStart(2,'0')
    let milidetik = String(now.getMilliseconds()).padStart(3,'0')

    document.getElementById("time").textContent =
        `${jam}:${menit}:${detik}:${milidetik}`

    const opsiTanggal = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    document.getElementById("date").textContent =
        now.toLocaleDateString('id-ID', opsiTanggal)
}

setInterval(updateClock, 1)
