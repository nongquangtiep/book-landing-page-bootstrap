document.addEventListener("DOMContentLoaded", () => {
  const downloadForm = document.getElementById("downloadForm");

  if (downloadForm) {
    downloadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = downloadForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        alert(`Cảm ơn bạn! 03 chương đọc thử đã được gửi tới email: ${email}. Hãy kiểm tra hộp thư đến của bạn.`);
        downloadForm.reset();
      }
    });
  }
});