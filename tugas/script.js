function navigate(page) {
    const content = document.getElementById('content');
    switch(page) {
        case 'index':
            content.innerHTML = `<h2 class="text-center">Selamat Datang di Biologi Laut</h2>
                                 <p>Pelajari tentang kehidupan laut dan ekosistem yang ada di dalamnya.</p>
                                 <h3>Pengertian biologi laut</h3>
                                 <p>Biologi laut adalah cabang ilmu biologi yang mempelajari kehidupan dan ekosistem di lingkungan laut, termasuk berbagai organisme yang hidup di dalamnya. Ini mencakup:</p>
<p>1. Studi Organisme Laut: Memahami berbagai jenis biota laut, seperti ikan, mamalia, invertebrata, dan tumbuhan laut (seperti alga dan fitoplankton).
<p>2. Interaksi Ekosistem: Meneliti hubungan antara spesies dan bagaimana mereka berinteraksi dalam ekosistem, termasuk rantai makanan dan dinamika populasi.</p>
<p>3. Adaptasi dan Evolusi: Mempelajari bagaimana organisme laut beradaptasi dengan lingkungan mereka, termasuk tekanan tinggi, suhu ekstrem, dan salinitas.</p>
<p>4. Konservasi dan Manajemen: Mengkaji dampak aktivitas manusia terhadap lautan dan upaya untuk melestarikan dan mengelola sumber daya laut secara berkelanjutan.</p>
<p>Biologi laut sangat penting untuk memahami ekosistem laut yang kompleks dan peran mereka dalam keseimbangan ekologi global.</p>`;

            break;
        case 'tentang':
            content.innerHTML = `<h2 class="text-center">Tentang Biologi Laut</h2>
                                 <p>Biologi laut adalah cabang ilmu biologi yang mempelajari kehidupan dan ekosistem yang ada di lautan dan perairan asin lainnya. Bidang ini mencakup berbagai aspek, mulai dari struktur, fungsi, interaksi, dan perkembangan organisme laut. Berikut adalah beberapa poin penting mengenai biologi laut:
                                 <p>1. Keanekaragaman Hayati
Biologi laut mempelajari berbagai jenis organisme yang hidup di laut, termasuk ikan, mamalia laut, invertebrata, tumbuhan laut (seperti alga), dan mikroorganisme. Keanekaragaman ini sangat tinggi, dengan jutaan spesies yang belum sepenuhnya dijelajahi.</p>
<p>2. Ekosistem Laut
Ilmu ini juga meneliti berbagai ekosistem laut, seperti terumbu karang, hutan bakau, zona intertidal, dan dasar laut. Setiap ekosistem memiliki karakteristik unik dan memainkan peran penting dalam keseimbangan lingkungan.</p>
<p>3. Interaksi Organisme
Biologi laut mencakup studi tentang interaksi antara berbagai spesies, termasuk hubungan predator-mangsa, simbiosis, dan kompetisi. Pemahaman tentang hubungan ini sangat penting untuk memahami ekosistem secara keseluruhan.</p>
<p>4. Adaptasi
Organisme laut memiliki berbagai adaptasi unik yang memungkinkan mereka bertahan hidup di lingkungan yang keras, seperti tekanan tinggi, suhu rendah, dan salinitas tinggi. Studi tentang adaptasi ini membantu ilmuwan memahami evolusi dan spesiasi.</p>
<p>5. Konservasi
Biologi laut juga berfokus pada konservasi dan manajemen sumber daya laut. Dengan meningkatnya ancaman terhadap ekosistem laut akibat perubahan iklim, polusi, dan penangkapan ikan yang berlebihan, penelitian dalam bidang ini menjadi semakin penting.</p>
<p>6. Teknik Penelitian
Para ilmuwan biologi laut menggunakan berbagai teknik penelitian, termasuk survei lapangan, pemodelan komputer, dan teknologi pemantauan seperti penginderaan jauh dan alat bawah air untuk mengumpulkan data.</p>
<p>7. Peran Manusia
Studi biologi laut juga mencakup dampak aktivitas manusia terhadap lingkungan laut. Ini mencakup isu-isu seperti pencemaran, perubahan iklim, dan eksploitasi sumber daya, serta upaya untuk mengurangi dampak negatifnya. Dengan pemahaman yang lebih baik tentang biologi laut, kita dapat mengambil langkah-langkah untuk melindungi dan melestarikan lingkungan laut serta memanfaatkan sumber daya laut secara berkelanjutan.</p>`;
            break;
        case 'galeri':
            content.innerHTML = `<h2 class="text-center">Galeri</h2>
                                 <p>Di sini Anda dapat melihat berbagai gambar dan video tentang biologi laut...</p>`;
            break;
        default:
            content.innerHTML = `<h2 class="text-center">Selamat Datang di Biologi Laut</h2>
                                 <p>Pelajari tentang kehidupan laut dan ekosistem yang ada di dalamnya.</p>`;
    }
}
