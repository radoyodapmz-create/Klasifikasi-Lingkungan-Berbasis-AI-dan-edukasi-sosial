// Validasi Login Sederhana
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const errorMsg = document.getElementById('errorMsg');

        // Simulasi validasi (username: admin, password: 123)
        if (user === "admin" && pass === "123") {
            window.location.href = "home.html";
        } else {
            errorMsg.innerText = "Username atau Password salah! (admin/123)";
        }
    });
}

// Fitur Upload dan Simulasi AI
const uploadForm = document.getElementById('uploadForm');
if (uploadForm) {
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fileInput = document.getElementById('imageInput');
        const descInput = document.getElementById('imageDesc');
        const resultSection = document.getElementById('resultSection');
        const imagePreview = document.getElementById('imagePreview');
        const displayDesc = document.getElementById('displayDesc');
        const aiStatus = document.getElementById('aiStatus');
        const aiAdvice = document.getElementById('aiAdvice');

        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function(event) {
                // Tampilkan preview gambar
                imagePreview.src = event.target.result;
                displayDesc.innerText = descInput.value || "Tidak ada deskripsi.";
                
                // Tampilkan bagian hasil
                resultSection.classList.remove('hidden');
                uploadForm.parentElement.classList.add('hidden');

                // Simulasi Proses AI (Random Result)
                const outcomes = [
                    { 
                        status: "Lingkungan Bersih", 
                        class: "badge-clean", 
                        advice: "Luar biasa! Pertahankan kondisi ini dengan tetap membuang sampah pada tempatnya." 
                    },
                    { 
                        status: "Lingkungan Tercemar", 
                        class: "badge-polluted", 
                        advice: "Peringatan! Terdeteksi banyak sampah. Segera lakukan aksi pembersihan atau lapor pihak berwenang." 
                    }
                ];
                
                const randomResult = outcomes[Math.floor(Math.random() * outcomes.length)];
                
                aiStatus.innerText = randomResult.status;
                aiStatus.className = "ai-badge " + randomResult.class;
                aiAdvice.innerText = randomResult.advice;
            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    });
}

// Fungsi Reset Upload
function resetUpload() {
    location.reload();
}
