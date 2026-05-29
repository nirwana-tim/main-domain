export const handleDownload = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  // Ganti URL di bawah ini dengan link download aplikasi Anda
  const downloadUrl = 'https://play.google.com/store/apps/details?id=com.pressup';
  window.open(downloadUrl, '_blank', 'noopener,noreferrer');
};

export const handleEmail = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  
  // Ganti dengan alamat email asli Anda
  const emailAddress = 'nirwanatim@gmail.com'; 
  
  // Subject email yang otomatis terisi
  const subjectText = 'I have a question';
  const encodedSubject = encodeURIComponent(subjectText);
  
  // Deteksi apakah user menggunakan perangkat mobile (HP/Tablet)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Di Mobile: Buka aplikasi email default beserta subjeknya
    window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}`;
  } else {
    // Di Desktop/PC: Buka web Gmail langsung di tab baru beserta subjeknya
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodedSubject}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  }
};

