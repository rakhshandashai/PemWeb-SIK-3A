const data = [
    { id: 1, nama: 'Shaina', NIM: 2307262, ProgramStudi: 'Sistem Informasi Kelautan', Alamat: 'Cilegon', url: 'https://www.instagram.com/sayshanda_/' },
    { id: 2, nama: 'Nelita', NIM: 2307564, ProgramStudi: 'Sistem Informasi Kelautan', Alamat: 'Purwokerto', url: 'https://www.instagram.com/nelitaverse/' },
    { id: 3, nama: 'Munawaroh', NIM: 2308943, ProgramStudi: 'Pendidikan Kelautan dan Perikanan', Alamat: 'Serang', url: 'https://www.instagram.com/mun_naa03/' },
    { id: 4, nama: 'Rizki', NIM: 2309465, ProgramStudi: 'Logistik Kelautan', Alamat: 'Jakarta', url: 'https://www.instagram.com/muh.rizky_355/' },
    { id: 5, nama: 'Hasna', NIM: 2308534, ProgramStudi: 'Pendidikan Guru Sekolah Dasar', Alamat: 'Bandung', url: 'https://www.instagram.com/nissa.hasna/' }
];

function buatTabel() {
    const tabelContainer = document.getElementById('tabelContainer');
    const tabel = document.createElement('table');
    const header = document.createElement('tr');

    const headings = ['No', 'Nama', 'NIM', 'Program Studi', 'Alamat', 'Link'];
    headings.forEach(heading => {
        const th = document.createElement('th');
        th.innerText = heading;
        header.appendChild(th);
    });

    tabel.appendChild(header);

    data.forEach(item => {
        const row = document.createElement('tr');

        const tdElements = [
            item.id,
            item.nama,
            item.NIM,
            item.ProgramStudi,
            item.Alamat
        ];

        tdElements.forEach((text, index) => {
            const td = document.createElement('td');
            td.innerText = text;

            if (index === 0) { 
                td.addEventListener('click', () => {
                    alert(`Absen: ${text}`);
                });
            } else if (index === 1) { 
                td.addEventListener('mouseenter', () => {
                    td.style.color = 'blue';
                });
                td.addEventListener('mouseleave', () => {
                    td.style.color = '';
                });
            } else if (index === 2) { 
                td.addEventListener('dblclick', () => {
                    alert(`NIM: ${text}`);
                });
            } else if (index === 3) { 
                td.addEventListener('mouseover', () => {
                    td.style.backgroundColor = 'lightblue';
                });
                td.addEventListener('mouseout', () => {
                    td.style.backgroundColor = '';
                });
            } else if (index === 4) { 
                td.addEventListener('click', () => {
                    alert(`Alamat: ${text}`);
                });
            }

            row.appendChild(td);
        });

        const tdLink = document.createElement('td');
        const link = document.createElement('a');
        link.href = item.url;
        link.innerText = 'Lihat Instagram';
        link.target = '_blank'; 

        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            
            link.classList.add('link-animation');
            setTimeout(() => {
                window.open(item.url, '_blank'); 
            }, 500); 
        });

        tdLink.appendChild(link);
        row.appendChild(tdLink);
        
        tabel.appendChild(row);
    });

    tabelContainer.appendChild(tabel);
}

buatTabel();
