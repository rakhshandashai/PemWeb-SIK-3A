const submitButton = document.getElementById('submit');
        const namaInput = document.getElementById('nama');
        const nimInput = document.getElementById('nim');
        const kelasInput = document.getElementById('kelas');
        const alamatInput = document.getElementById('alamat');
        const resultNama = document.getElementById('resultNama');
        const resultNim = document.getElementById('resultNim');
        const resultKelas = document.getElementById('resultKelas');
        const resultAlamat = document.getElementById('resultAlamat');

        submitButton.addEventListener('click', () => {
            resultNama.textContent = namaInput.value;
            resultNim.textContent = nimInput.value;
            resultKelas.textContent = kelasInput.value;
            resultAlamat.textContent = alamatInput.value;
        });
