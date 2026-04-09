const slidesData = [
    "Pendahuluan – Pentingnya CSS dalam Desain Web: CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan dokumen HTML. Dalam desain web modern, CSS memungkinkan Anda membuat halaman yang menarik, responsif, dan konsisten di berbagai perangkat. Tanpa CSS, web hanya berupa teks polos tanpa gaya, sehingga CSS menjadi fondasi penting dalam pengalaman pengguna yang profesional.",
    "Istilah Dasar CSS – Selektor dan Properti: Selektor digunakan untuk memilih elemen HTML yang akan diberi gaya, seperti tag, class, atau id. Properti menentukan aspek visual mana yang diubah, misalnya warna, ukuran font, margin, atau padding. Contoh: p { color: orange; } akan mewarnai semua paragraf menjadi oranye.",
    "Box Model: Setiap elemen dalam CSS dianggap sebagai kotak yang memiliki margin (jarak luar), border (batas), padding (ruang dalam), dan konten. Memahami box model sangat krusial untuk mengatur tata letak dan spasi antar elemen, sehingga desain web menjadi rapi dan proporsional.",
    "Unit Ukuran (px, em, rem, vw, vh): Piksel (px) bersifat tetap, em dan rem relatif terhadap ukuran font, sedangkan vw/vh relatif terhadap lebar/tinggi viewport. Penggunaan unit relatif seperti rem meningkatkan aksesibilitas dan responsivitas, sangat penting dalam desain modern yang adaptif.",
    "Flexbox: Flexbox adalah model layout satu dimensi yang memudahkan pengaturan item dalam baris atau kolom. Dengan properti seperti justify-content, align-items, dan flex-wrap, Anda dapat mendistribusikan ruang secara dinamis dan membuat tata letak yang fleksibel tanpa menggunakan float.",
    "CSS Grid: Grid adalah sistem layout dua dimensi yang membagi halaman menjadi baris dan kolom. Dengan properti grid-template-rows, grid-template-columns, dan gap, Anda bisa membuat struktur kompleks dengan mudah. Grid sangat cocok untuk membuat kerangka halaman secara keseluruhan.",
    "Media Query: Media query memungkinkan Anda menerapkan gaya CSS berdasarkan karakteristik perangkat, seperti lebar layar. Dengan @media, desain web bisa beradaptasi dari desktop ke ponsel. Inilah dasar dari desain responsif, memastikan pengalaman optimal di semua ukuran layar.",
    "Gradien Warna: Gradien menghasilkan transisi halus antara dua atau lebih warna tanpa menggunakan gambar. Properti background: linear-gradient() atau radial-gradient() menciptakan latar belakang dinamis. Ini meningkatkan estetika modern dan mengurangi beban loading.",
    "Efek Bayangan (Neumorphism dan Glow): Neumorphism memberikan ilusi emboss dengan kombinasi bayangan terang dan gelap, sedangkan efek glow menggunakan box-shadow atau text-shadow dengan warna terang. Keduanya memberi kedalaman dan nuansa futuristik pada elemen UI.",
    "Glassmorphism: Glassmorphism menciptakan efek seperti kaca dengan latar belakang semi-transparan, blur latar belakang (backdrop-filter: blur()), dan border tipis. Memberikan kesan modern, mewah, dan memungkinkan konten di belakangnya terlihat samar, populer dalam desain dashboard.",
    "Animasi CSS: Dengan @keyframes, Anda dapat membuat animasi kustom yang mengubah properti CSS dari keadaan awal hingga akhir. Properti animation memungkinkan kontrol durasi, iterasi, dan easing. Animasi meningkatkan interaktivitas dan pengalaman pengguna secara halus.",
    "Efek Teks: Efek teks seperti text-shadow, gradient teks, dan web font memberikan penekanan pada tipografi. Anda bisa membuat teks dengan bayangan, gradien warna, atau animasi. Efek ini membuat judul dan konten menonjol serta memperkuat identitas merek.",
    "Filter dan Clip-path: Filter CSS (blur, brightness, contrast) memanipulasi tampilan elemen grafis. Clip-path memotong elemen ke bentuk tertentu seperti lingkaran atau poligon. Kombinasi keduanya memungkinkan kreasi visual yang artistik tanpa perlu editor gambar eksternal.",
    "Bootstrap 5: Bootstrap adalah framework CSS populer yang menyediakan komponen siap pakai seperti navbar, card, modal, serta sistem grid responsif. Dengan Bootstrap 5, pengembangan web menjadi lebih cepat dan konsisten, serta mendukung tema gelap terang secara native.",
    "Kombinasi Bootstrap dan CSS Kustom: Meskipun Bootstrap kuat, Anda tetap dapat menambahkan CSS kustom untuk menciptakan identitas unik. Dengan menimpa variabel Bootstrap atau menambahkan class sendiri, Anda mendapatkan fleksibilitas desain sesuai kebutuhan tanpa kehilangan kecepatan pengembangan.",
    "Penutup dan Tips Belajar: Kuasai dasar CSS, praktikkan dengan proyek kecil, gunakan dev tools browser, dan ikuti perkembangan tren desain modern. Kombinasikan teori dan eksperimen untuk menciptakan antarmuka yang menarik, responsif, dan aksesibel. Selamat berkarya!"
];

let currentSlide = 1;
const totalSlides = slidesData.length;

const landingPage = document.getElementById('landingPage');
const slideContainer = document.getElementById('slideContainer');
const slideCard = document.getElementById('slideCard');
const slideContentDiv = document.getElementById('slideContent');
const mulaiBtn = document.getElementById('mulaiBelajarBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const repeatBtn = document.getElementById('repeatBtn');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');

function buildSlides() {
    slideContentDiv.innerHTML = '';
    slidesData.forEach((text, idx) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide-item';
        slideDiv.setAttribute('data-slide', idx+1);
        const p = document.createElement('p');
        p.className = 'slide-paragraph';
        p.textContent = text;
        slideDiv.appendChild(p);
        slideContentDiv.appendChild(slideDiv);
    });
}
buildSlides();
const slideItems = document.querySelectorAll('.slide-item');

// Fungsi untuk mengaplikasikan efek CSS unik berdasarkan nomor slide
function applySlideEffect(slideNumber) {
    // Hapus semua kelas efek sebelumnya
    const effectClasses = Array.from({length: 16}, (_, i) => `slide-effect-${i+1}`);
    slideCard.classList.remove(...effectClasses);
    // Tambahkan kelas efek yang sesuai
    slideCard.classList.add(`slide-effect-${slideNumber}`);
}

function updateSlide() {
    slideItems.forEach((slide, idx) => {
        if (idx+1 === currentSlide) slide.classList.add('active');
        else slide.classList.remove('active');
    });
    currentSlideSpan.textContent = currentSlide;
    const percent = (currentSlide / totalSlides) * 100;
    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${Math.round(percent)}%`;
    prevBtn.disabled = (currentSlide === 1);
    nextBtn.disabled = (currentSlide === totalSlides);
    
    // Terapkan efek visual unik untuk slide ini
    applySlideEffect(currentSlide);
}

function nextSlide() { if (currentSlide < totalSlides) { currentSlide++; updateSlide(); } }
function prevSlide() { if (currentSlide > 1) { currentSlide--; updateSlide(); } }
function repeatMateri() { currentSlide = 1; updateSlide(); }

mulaiBtn.addEventListener('click', () => {
    landingPage.style.display = 'none';
    slideContainer.style.display = 'block';
    currentSlide = 1;
    updateSlide();
    slideContainer.scrollIntoView({ behavior: 'smooth' });
});
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
repeatBtn.addEventListener('click', repeatMateri);

document.addEventListener('keydown', (e) => {
    if (slideContainer.style.display === 'block') {
        if (e.key === 'ArrowRight') { nextSlide(); e.preventDefault(); }
        else if (e.key === 'ArrowLeft') { prevSlide(); e.preventDefault(); }
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    const span = darkModeToggle.querySelector('span');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon-fill'); icon.classList.add('bi-sun-fill');
        span.textContent = 'Mode Terang';
    } else {
        icon.classList.remove('bi-sun-fill'); icon.classList.add('bi-moon-fill');
        span.textContent = 'Mode Gelap';
    }
    // refresh efek slide agar tampil sesuai dark mode (karena beberapa efek punya warna spesifik)
    applySlideEffect(currentSlide);
});

totalSlidesSpan.textContent = totalSlides;
updateSlide();

// Efek rajin kirim tugas
const rajinBtn = document.getElementById('rajinBtn');
const pesanAmbil = document.getElementById('pesanAmbil');

rajinBtn.addEventListener('click', () => {
    // Tampilkan pesan dengan efek
    pesanAmbil.style.display = 'block';
    // Otomatis hilang setelah 2 detik (opsional)
    setTimeout(() => {
        pesanAmbil.style.display = 'none';
    }, 2000);
});