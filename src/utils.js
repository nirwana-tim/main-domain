export const handleDownload = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  // Ganti URL di bawah ini dengan link download aplikasi Anda
  const downloadUrl = 'https://play.google.com/store/apps/details?id=com.pressup';
  window.open(downloadUrl, '_blank', 'noopener,noreferrer');
};
