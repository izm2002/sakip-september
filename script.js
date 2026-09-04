/* =====================================
   KONFIGURASI GOOGLE APPS SCRIPT
===================================== */

const apiURL = {

    2026: {

       1: "https://script.google.com/macros/s/AKfycbxWqnAHMrMYJ7B1seIyE3x0hP5CWXQ4EMgYFU7uFaJCWqio8OvzcMb6jSUKf3z4eiCn/exec",

        2: "https://script.google.com/macros/s/AKfycbwqC9AaxWLDSUVtZImhvUX8Zv8H09PyvXCpLdCkQt2X4qhocFBRV5ALnwc_-um2rkYHaA/exec",

        3: "https://script.google.com/macros/s/AKfycbzmhFpQ_9Qi3jPH3JHco50ieBvko22LgA53csCBM3OYxl4AyjWUGvg_lw7kK5FviCbx/exec",

        4: "https://script.google.com/macros/s/AKfycbzS7SwSJT-2t44IXsTyKpE-KbHI34vDcIaN0hy7RcKyTE_y3OJdCjIAr4XCQmY6r1mi/exec"
    }

};


/* =====================================
   KONFIGURASI DEADLINE
===================================== */

/*
Ubah tanggal berikut sesuai deadline
pengumpulan dokumen setiap triwulan.

Format:
YYYY-MM-DDTHH:MM:SS
*/

const deadlineTriwulan = {

    2026: {

        1: "2026-04-15T23:59:59",

        2: "2026-07-15T23:59:59",

        3: "2026-10-15T23:59:59",

        4: "2027-01-15T23:59:59"

    }

};


/* =====================================
   DATA NAMA IKU
===================================== */

const namaIKU = [

    "Persentase Publikasi/Laporan Statistik Kependudukan dan Ketenagakerjaan yang Berkualitas",

    "Persentase Publikasi/Laporan Statistik Kesejahteraan Rakyat yang Berkualitas",

    "Persentase Publikasi/Laporan Statistik Ketahanan Sosial yang Berkualitas",

    "Persentase Publikasi/Laporan Statistik Sumber Daya Mineral dan Konstruksi yang Berkualitas",

    "Persentase Publikasi/Laporan Statistik Sumber Daya Hayati yang Berkualitas",

    "Persentase Publasi/Laporan Statistik Industri yang Berkualitas",

    "Persentase Publikasi/Laporan Statistik Distribusi yang Berkualitas",

    "Persentase Publikasi/Laporan Statistik Harga yang Berkualitas",

    "Persentase Publikasi/Laporan Statistik Jasa yang Berkualitas",

    "Persentase Publikasi/Laporan Neraca Produksi yang Berkualitas",

    "Persentase Publikasi/Laporan Neraca Pengeluaran yang Berkualitas",

    "Persentase Publikasi/Laporan Analisis Statistik dan Neraca Satelit yang Berkualitas",

    "Tingkat Penyelenggaraan Pembinaan Statistik Sektoral sesuai Standar",

    "Persentase Kumulatif Desa yang Berpredikat Desa Cinta Statistik",

    "Indeks Pelayanan Publik - Penilaian Mandiri",

    "Nilai SAKIP Oleh Inspektorat",

    "Nilai BerAKHLAK"

];


/* =====================================
   DATA PJ IKU
===================================== */

function dapatkanPJ(
    nomorIKU
) {

    if (
        nomorIKU >= 1 &&
        nomorIKU <= 3
    ) {

        return "Najla";

    }


    if (
        nomorIKU >= 4 &&
        nomorIKU <= 6
    ) {

        return "Desfira";

    }


    if (
        nomorIKU >= 7 &&
        nomorIKU <= 9
    ) {

        return "Made";

    }


    if (
        nomorIKU >= 10 &&
        nomorIKU <= 12
    ) {

        return "Diah";

    }


    if (
        nomorIKU >= 13 &&
        nomorIKU <= 15
    ) {

        return "Salsa";

    }


    return "Naura";

}


/* =====================================
   IKON SESUAI KELOMPOK IKU
===================================== */

function dapatkanIkon(
    nomorIKU
) {

    if (
        nomorIKU === 1
    ) {

        return "👥";

    }


    if (
        nomorIKU === 2
    ) {

        return "🏠";

    }


    if (
        nomorIKU === 3
    ) {

        return "🤝";

    }


    if (
        nomorIKU === 4
    ) {

        return "🏗️";

    }


    if (
        nomorIKU === 5
    ) {

        return "🌿";

    }


    if (
        nomorIKU === 6
    ) {

        return "🏭";

    }


    if (
        nomorIKU === 7
    ) {

        return "🚚";

    }


    if (
        nomorIKU === 8
    ) {

        return "📈";

    }


    if (
        nomorIKU === 9
    ) {

        return "🧾";

    }


    if (
        nomorIKU === 10
    ) {

        return "🏢";

    }


    if (
        nomorIKU === 11
    ) {

        return "💰";

    }


    if (
        nomorIKU === 12
    ) {

        return "📊";

    }


    if (
        nomorIKU === 13
    ) {

        return "📋";

    }


    if (
        nomorIKU === 14
    ) {

        return "🏘️";

    }


    if (
        nomorIKU === 15
    ) {

        return "🏛️";

    }


    if (
        nomorIKU === 16
    ) {

        return "⭐";

    }


    return "🧩";

}


/* =====================================
   MENGAMBIL ELEMEN HTML
===================================== */

const tahunSelect =
    document.getElementById(
        "tahunSelect"
    );


const triwulanButtons =
    document.querySelectorAll(
        ".triwulan-button"
    );


const periodeInfo =
    document.getElementById(
        "periodeInfo"
    );


const refreshButton =
    document.getElementById(
        "refreshButton"
    );


const statusProgress =
    document.getElementById(
        "statusProgress"
    );


const donutChart =
    document.getElementById(
        "donutChart"
    );


const persentaseDokumen =
    document.getElementById(
        "persentaseDokumen"
    );


const dokumenTersedia =
    document.getElementById(
        "dokumenTersedia"
    );


const totalDokumen =
    document.getElementById(
        "totalDokumen"
    );


const progressDokumen =
    document.getElementById(
        "progressDokumen"
    );


const ikuLengkap =
    document.getElementById(
        "ikuLengkap"
    );


const totalIKU =
    document.getElementById(
        "totalIKU"
    );


const persentaseIKU =
    document.getElementById(
        "persentaseIKU"
    );


const summaryLengkap =
    document.getElementById(
        "summaryLengkap"
    );


const summarySebagian =
    document.getElementById(
        "summarySebagian"
    );


const summaryKosong =
    document.getElementById(
        "summaryKosong"
    );


const indikatorList =
    document.getElementById(
        "indikatorList"
    );


const pjList =
    document.getElementById(
        "pjList"
    );


/* =====================================
   STATUS AKTIF
===================================== */

let tahunAktif =
    Number(
        tahunSelect.value
    );


let triwulanAktif = 1;


let countdownInterval = null;


/* =====================================
   NAMA TRIWULAN
===================================== */

function namaTriwulan(
    nomor
) {

    const daftar = {

        1: "I",

        2: "II",

        3: "III",

        4: "IV"

    };


    return daftar[
        nomor
    ];

}


/* =====================================
   UPDATE INFORMASI PERIODE
===================================== */

function tampilkanPeriode() {

    periodeInfo.textContent =

        "Monitoring Triwulan " +

        namaTriwulan(
            triwulanAktif
        ) +

        " Tahun " +

        tahunAktif;

}


/* =====================================
   MEMBUAT CACHE KEY
===================================== */

function buatCacheKey() {

    return (

        "prima_akip_" +

        tahunAktif +

        "_tw_" +

        triwulanAktif

    );

}


/* =====================================
   MENYIMPAN DATA KE CACHE
===================================== */

function simpanCache(
    data
) {

    try {

        localStorage.setItem(

            buatCacheKey(),

            JSON.stringify({

                waktu:
                    Date.now(),

                data:
                    data

            })

        );

    }

    catch (
        error
    ) {

        console.warn(

            "Cache tidak dapat disimpan.",

            error

        );

    }

}


/* =====================================
   MENGAMBIL DATA DARI CACHE
===================================== */

function ambilCache() {

    try {

        const cache =

            localStorage.getItem(

                buatCacheKey()

            );


        if (
            !cache
        ) {

            return null;

        }


        const hasil =

            JSON.parse(
                cache
            );


        return hasil.data;

    }

    catch (
        error
    ) {

        return null;

    }

}


/* =====================================
   MENAMPILKAN LOADING
===================================== */

function tampilkanLoading() {

    statusProgress.textContent =

        "Sedang mengambil data terbaru dari Google Drive...";


    indikatorList.innerHTML =

        "<p class='loading'>" +

        "Sedang memeriksa kelengkapan " +

        "17 IKU..." +

        "</p>";


    pjList.innerHTML =

        "<p class='loading'>" +

        "Sedang memperbarui daftar PJ..." +

        "</p>";


    refreshButton.disabled =
        true;


    refreshButton.textContent =

        "Memuat Data...";

}


/* =====================================
   MENGUBAH DATA MENJADI FORMAT AMAN
===================================== */

function normalisasiData(
    data
) {

    const hasil = [];


    for (
        let nomor = 1;
        nomor <= 17;
        nomor++
    ) {

        const dataLama =

            data.data?.[
                nomor - 1
            ] || {};


        /*
        Mendukung format lama:
        jumlahDokumen

        dan format baru:
        notula,
        buktiKinerja,
        buktiTindakLanjut
        */

        let notula =

            Boolean(
                dataLama.notula
            );


        let buktiKinerja =

            Boolean(
                dataLama.buktiKinerja
            );


        let buktiTindakLanjut =

            Boolean(
                dataLama.buktiTindakLanjut
            );


        if (
            dataLama.jumlahDokumen !==
            undefined
        ) {

            const jumlah =

                Number(
                    dataLama.jumlahDokumen
                );


            /*
            Format lama tidak mengetahui
            kategori mana yang tersedia.

            Sementara akan diurutkan:
            Notula → Kinerja →
            Tindak Lanjut.
            */

            notula =
                jumlah >= 1;


            buktiKinerja =
                jumlah >= 2;


            buktiTindakLanjut =
                jumlah >= 3;

        }


        const jumlahDokumen =

            Number(
                notula
            ) +

            Number(
                buktiKinerja
            ) +

            Number(
                buktiTindakLanjut
            );


        let kategoriStatus =

            "kosong";


        let teksStatus =

            "Belum Ada Dokumen";


        if (
            jumlahDokumen === 3
        ) {

            kategoriStatus =
                "lengkap";


            teksStatus =
                "Lengkap";

        }

        else if (
            jumlahDokumen > 0
        ) {

            kategoriStatus =
                "sebagian";


            teksStatus =
                "Belum Lengkap";

        }


        hasil.push({

            nomor:
                nomor,

            nama:
                namaIKU[
                    nomor - 1
                ],

            ikon:
                dapatkanIkon(
                    nomor
                ),

            pj:
                dapatkanPJ(
                    nomor
                ),

            notula:
                notula,

            buktiKinerja:
                buktiKinerja,

            buktiTindakLanjut:
                buktiTindakLanjut,

            jumlahDokumen:
                jumlahDokumen,

            kategoriStatus:
                kategoriStatus,

            teksStatus:
                teksStatus,

            linkNotula:

                dataLama.linkNotula ||

                dataLama.linkDrive?.notula ||

                "",


            linkBuktiKinerja:

                dataLama.linkBuktiKinerja ||

                dataLama.linkDrive?.buktiKinerja ||

                "",


            linkBuktiTindakLanjut:

                dataLama.linkBuktiTindakLanjut ||

                dataLama.linkDrive?.buktiTindakLanjut ||

                ""

        });

    }


    return hasil;

}


/* =====================================
   MEMBUAT TOMBOL GOOGLE DRIVE
===================================== */

function buatTombolDrive(
    nama,
    link
) {

    if (
        !link
    ) {

        return (

            "<button " +

            "class='drive-button' " +

            "disabled>" +

            nama +

            "</button>"

        );

    }


    return (

        "<a " +

        "class='drive-button' " +

        "href='" +

        link +

        "' " +

        "target='_blank' " +

        "rel='noopener noreferrer'>" +

        nama +

        "</a>"

    );

}


/* =====================================
   MENAMPILKAN KARTU IKU
===================================== */

function tampilkanIKU(
    daftarIKU
) {

    indikatorList.innerHTML = "";


    daftarIKU.forEach(

        function(
            item
        ) {

            const kartu =

                document.createElement(
                    "article"
                );


            kartu.className =

                "iku-card " +

                item.kategoriStatus;


            const ikonNotula =

                item.notula

                    ? "✓"

                    : "×";


            const ikonKinerja =

                item.buktiKinerja

                    ? "✓"

                    : "×";


            const ikonTindakLanjut =

                item.buktiTindakLanjut

                    ? "✓"

                    : "×";


            kartu.innerHTML =

                "<div class='iku-card-top'>" +

                    "<span class='iku-number'>" +

                        item.ikon +

                        " IKU " +

                        item.nomor +

                    "</span>" +


                    "<span class='iku-status'>" +

                        item.teksStatus +

                    "</span>" +

                "</div>" +


                "<h3 class='iku-name'>" +

                    item.nama +

                "</h3>" +


                "<p class='iku-pj'>" +

                    "PJ: <strong>" +

                    item.pj +

                    "</strong>" +

                "</p>" +


                "<div class='document-list'>" +


                    "<div class='document-item'>" +

                        "<span>" +

                            "Notula" +

                        "</span>" +


                        "<span class='document-icon " +

                        (

                            item.notula

                                ? "available"

                                : "unavailable"

                        ) +

                        "'>" +

                            ikonNotula +

                        "</span>" +

                    "</div>" +


                    "<div class='document-item'>" +

                        "<span>" +

                            "Bukti Dukung Kinerja" +

                        "</span>" +


                        "<span class='document-icon " +

                        (

                            item.buktiKinerja

                                ? "available"

                                : "unavailable"

                        ) +

                        "'>" +

                            ikonKinerja +

                        "</span>" +

                    "</div>" +


                    "<div class='document-item'>" +

                        "<span>" +

                            "Bukti Tindak Lanjut" +

                        "</span>" +


                        "<span class='document-icon " +

                        (

                            item.buktiTindakLanjut

                                ? "available"

                                : "unavailable"

                        ) +

                        "'>" +

                            ikonTindakLanjut +

                        "</span>" +

                    "</div>" +


                "</div>" +


                "<div class='iku-actions'>" +

                    buatTombolDrive(

                        "📄 Notula",

                        item.linkNotula

                    ) +


                    buatTombolDrive(

                        "📊 Bukti Kinerja",

                        item.linkBuktiKinerja

                    ) +


                    buatTombolDrive(

                        "🔄 Tindak Lanjut",

                        item.linkBuktiTindakLanjut

                    ) +


                "</div>";


            indikatorList.appendChild(
                kartu
            );

        }

    );

}


/* =====================================
   MENAMPILKAN PJ KUNING DAN MERAH
===================================== */

function tampilkanPJ(
    daftarIKU
) {

    const bermasalah =

        daftarIKU.filter(

            function(
                item
            ) {

                return (

                    item.kategoriStatus ===
                    "sebagian"

                    ||

                    item.kategoriStatus ===
                    "kosong"

                );

            }

        );


    if (
        bermasalah.length === 0
    ) {

        pjList.innerHTML =

            "<p class='pj-empty'>" +

            "✓ Seluruh dokumen IKU " +

            "telah lengkap." +

            "</p>";


        return;

    }


    pjList.innerHTML = "";


    /*
    Menggabungkan IKU berdasarkan PJ.
    */

    const kelompokPJ = {};


    bermasalah.forEach(

        function(
            item
        ) {

            if (
                !kelompokPJ[
                    item.pj
                ]
            ) {

                kelompokPJ[
                    item.pj
                ] = [];

            }


            kelompokPJ[
                item.pj
            ].push(

                "IKU " +

                item.nomor

            );

        }

    );


    Object.keys(
        kelompokPJ
    ).forEach(

        function(
            namaPJ
        ) {

            const item =

                document.createElement(
                    "div"
                );


            item.className =
                "pj-item";


            item.innerHTML =

                "<span class='pj-item-name'>" +

                    namaPJ +

                "</span>" +


                "<span class='pj-item-iku'>" +

                    kelompokPJ[
                        namaPJ
                    ].join(", ") +

                "</span>";


            pjList.appendChild(
                item
            );

        }

    );

}


/* =====================================
   MENAMPILKAN RINGKASAN
===================================== */

function tampilkanRingkasan(
    daftarIKU
) {

    const lengkap =

        daftarIKU.filter(

            item =>

                item.kategoriStatus ===
                "lengkap"

        ).length;


    const sebagian =

        daftarIKU.filter(

            item =>

                item.kategoriStatus ===
                "sebagian"

        ).length;


    const kosong =

        daftarIKU.filter(

            item =>

                item.kategoriStatus ===
                "kosong"

        ).length;


    const jumlahDokumen =

        daftarIKU.reduce(

            function(
                jumlah,
                item
            ) {

                return (

                    jumlah +

                    item.jumlahDokumen

                );

            },

            0

        );


    const jumlahTotalDokumen =

        daftarIKU.length *
        3;


    const persenDokumen =

        jumlahTotalDokumen > 0

            ?

            (
                jumlahDokumen /

                jumlahTotalDokumen

            ) * 100

            :

            0;


    const persenIKU =

        (

            lengkap /

            daftarIKU.length

        ) * 100;


    /*
    Diagram donut.
    */

    donutChart.style.background =

        "conic-gradient(" +

        "#2166a5 0% " +

        persenDokumen +

        "%, " +

        "#e4ebf2 " +

        persenDokumen +

        "% 100%)";


    persentaseDokumen.textContent =

        persenDokumen.toFixed(1) +

        "%";


    dokumenTersedia.textContent =

        jumlahDokumen;


    totalDokumen.textContent =

        jumlahTotalDokumen;


    progressDokumen.style.width =

        persenDokumen +

        "%";


    ikuLengkap.textContent =

        lengkap;


    totalIKU.textContent =

        daftarIKU.length;


    persentaseIKU.textContent =

        persenIKU.toFixed(1) +

        "%";


    summaryLengkap.textContent =

        lengkap;


    summarySebagian.textContent =

        sebagian;


    summaryKosong.textContent =

        kosong;


    statusProgress.textContent =

        jumlahDokumen +

        " dari " +

        jumlahTotalDokumen +

        " dokumen telah tersedia.";

}


/* =====================================
   MENAMPILKAN DATA UTAMA
===================================== */

function tampilkanData(
    data,
    dariCache = false
) {

    const daftarIKU =

        normalisasiData(
            data
        );


    tampilkanRingkasan(
        daftarIKU
    );


    tampilkanIKU(
        daftarIKU
    );


    tampilkanPJ(
        daftarIKU
    );


    if (
        dariCache
    ) {

        statusProgress.textContent +=

            " Menampilkan data terakhir " +

            "yang tersimpan.";

    }


    refreshButton.disabled =
        false;


    refreshButton.textContent =

        "↻ Perbarui Data";

}


/* =====================================
   MENGAMBIL DATA DENGAN RETRY
===================================== */

async function ambilData() {

    const url =

        apiURL[
            tahunAktif
        ]?.[
            triwulanAktif
        ];


    if (

        !url

        ||

        url.includes(
            "MASUKKAN_URL"
        )

    ) {

        statusProgress.textContent =

            "URL Google Apps Script " +

            "belum dimasukkan.";


        indikatorList.innerHTML =

            "<p class='loading'>" +

            "Masukkan URL deployment " +

            "Google Apps Script untuk " +

            "Triwulan " +

            namaTriwulan(
                triwulanAktif
            ) +

            " terlebih dahulu." +

            "</p>";


        refreshButton.disabled =
            false;


        refreshButton.textContent =

            "↻ Perbarui Data";


        return;

    }


    tampilkanLoading();


    /*
    Menampilkan cache terlebih dahulu
    agar halaman tidak kosong dan terasa
    lebih cepat.
    */

    const dataCache =

        ambilCache();


    if (
        dataCache
    ) {

        tampilkanData(

            dataCache,

            true

        );


        refreshButton.disabled =
            true;


        refreshButton.textContent =

            "Memperbarui...";

    }


    const maksimalPercobaan = 3;


    let errorTerakhir = null;


    for (

        let percobaan = 1;

        percobaan <=
        maksimalPercobaan;

        percobaan++

    ) {

        try {

            statusProgress.textContent =

                "Mengambil data terbaru " +

                "dari Google Drive..." +

                " (" +

                percobaan +

                "/" +

                maksimalPercobaan +

                ")";


            const controller =

                new AbortController();


            const batasWaktu =

                setTimeout(

                    function() {

                        controller.abort();

                    },

                    45000

                );


            /*
            Cache browser dihindari agar
            tombol Perbarui Data benar-benar
            mengambil data terbaru.
            */

            const response =

                await fetch(

                    url +

                    (

                        url.includes("?")

                            ? "&"

                            : "?"

                    ) +

                    "cache=" +

                    Date.now(),

                    {

                        method: "GET",

                        signal:

                            controller.signal,

                        cache:

                            "no-store"

                    }

                );


            clearTimeout(
                batasWaktu
            );


            if (
                !response.ok
            ) {

                throw new Error(

                    "Respons server: " +

                    response.status

                );

            }


            const data =

                await response.json();


            if (

                !data

                ||

                !Array.isArray(
                    data.data
                )

            ) {

                throw new Error(

                    "Format JSON dari " +

                    "Google Apps Script " +

                    "tidak sesuai."

                );

            }


            /*
            Data berhasil.
            */

            simpanCache(
                data
            );


            tampilkanData(
                data
            );


            return;

        }

        catch (
            error
        ) {

            errorTerakhir =
                error;


            console.warn(

                "Pengambilan data " +

                "gagal pada percobaan " +

                percobaan,

                error

            );


            if (
                percobaan <
                maksimalPercobaan
            ) {

                /*
                Jeda bertambah:
                1,5 detik lalu 3 detik.
                */

                await new Promise(

                    function(
                        selesai
                    ) {

                        setTimeout(

                            selesai,

                            percobaan *
                            1500

                        );

                    }

                );

            }

        }

    }


    /*
    Jika semua percobaan gagal,
    gunakan data cache.
    */

    const cacheTerakhir =

        ambilCache();


    if (
        cacheTerakhir
    ) {

        tampilkanData(

            cacheTerakhir,

            true

        );


        statusProgress.textContent =

            "Koneksi Google Apps Script " +

            "sedang lambat. " +

            "Menampilkan data terakhir.";

    }

    else {

        statusProgress.textContent =

            "Data gagal dimuat. " +

            "Silakan klik Perbarui Data.";


        indikatorList.innerHTML =

            "<p class='loading'>" +

            "Tidak dapat terhubung ke " +

            "Google Apps Script. " +

            "Periksa URL deployment dan " +

            "pengaturan akses Apps Script." +

            "</p>";


        pjList.innerHTML =

            "<p class='loading'>" +

            "Data PJ belum dapat dimuat." +

            "</p>";


        console.error(
            errorTerakhir
        );

    }


    refreshButton.disabled =
        false;


    refreshButton.textContent =

        "↻ Coba Lagi";

}


/* =====================================
   COUNTDOWN
===================================== */

function mulaiCountdown() {

    if (
        countdownInterval
    ) {

        clearInterval(
            countdownInterval
        );

    }


    const deadline =

        deadlineTriwulan[
            tahunAktif
        ]?.[
            triwulanAktif
        ];


    const deadlineDate =

        document.getElementById(
            "deadlineDate"
        );


    const deadlineStatus =

        document.getElementById(
            "deadlineStatus"
        );


    const hari =

        document.getElementById(
            "countdownDays"
        );


    const jam =

        document.getElementById(
            "countdownHours"
        );


    const menit =

        document.getElementById(
            "countdownMinutes"
        );


    const detik =

        document.getElementById(
            "countdownSeconds"
        );


    if (
        !deadline
    ) {

        deadlineDate.textContent =

            "Deadline belum diatur.";


        return;

    }


    const tanggalDeadline =

        new Date(
            deadline
        );


    deadlineDate.textContent =

        tanggalDeadline.toLocaleString(

            "id-ID",

            {

                day:
                    "2-digit",

                month:
                    "long",

                year:
                    "numeric",

                hour:
                    "2-digit",

                minute:
                    "2-digit"

            }

        ) +

        " WIB";


    function perbaruiCountdown() {

        const sekarang =

            new Date();


        const selisih =

            tanggalDeadline -

            sekarang;


        if (
            selisih <= 0
        ) {

            hari.textContent =
                "00";


            jam.textContent =
                "00";


            menit.textContent =
                "00";


            detik.textContent =
                "00";


            deadlineStatus.textContent =

                "Batas waktu pengumpulan " +

                "telah berakhir.";


            clearInterval(
                countdownInterval
            );


            return;

        }


        const jumlahHari =

            Math.floor(

                selisih /

                (
                    1000 *

                    60 *

                    60 *

                    24
                )

            );


        const jumlahJam =

            Math.floor(

                (

                    selisih %

                    (
                        1000 *

                        60 *

                        60 *

                        24
                    )

                ) /

                (
                    1000 *

                    60 *

                    60
                )

            );


        const jumlahMenit =

            Math.floor(

                (

                    selisih %

                    (
                        1000 *

                        60 *

                        60
                    )

                ) /

                (
                    1000 *

                    60
                )

            );


        const jumlahDetik =

            Math.floor(

                (

                    selisih %

                    (
                        1000 *

                        60
                    )

                ) /

                1000

            );


        hari.textContent =

            String(
                jumlahHari
            ).padStart(
                2,
                "0"
            );


        jam.textContent =

            String(
                jumlahJam
            ).padStart(
                2,
                "0"
            );


        menit.textContent =

            String(
                jumlahMenit
            ).padStart(
                2,
                "0"
            );


        detik.textContent =

            String(
                jumlahDetik
            ).padStart(
                2,
                "0"
            );


        deadlineStatus.textContent =

            "Waktu tersisa menuju " +

            "batas pengumpulan.";

    }


    perbaruiCountdown();


    countdownInterval =

        setInterval(

            perbaruiCountdown,

            1000

        );

}


/* =====================================
   EVENT PILIH TAHUN
===================================== */

tahunSelect.addEventListener(

    "change",

    function() {

        tahunAktif =

            Number(
                tahunSelect.value
            );


        tampilkanPeriode();


        mulaiCountdown();


        ambilData();

    }

);


/* =====================================
   EVENT PILIH TRIWULAN
===================================== */

triwulanButtons.forEach(

    function(
        tombol
    ) {

        tombol.addEventListener(

            "click",

            function() {

                triwulanButtons.forEach(

                    function(
                        item
                    ) {

                        item.classList.remove(
                            "active"
                        );

                    }

                );


                tombol.classList.add(
                    "active"
                );


                triwulanAktif =

                    Number(

                        tombol.dataset
                            .triwulan

                    );


                tampilkanPeriode();


                mulaiCountdown();


                ambilData();

            }

        );

    }

);


/* =====================================
   EVENT TOMBOL REFRESH
===================================== */

refreshButton.addEventListener(

    "click",

    function() {

        ambilData();

    }

);


/* =====================================
   MENJALANKAN WEBSITE
===================================== */

tampilkanPeriode();


mulaiCountdown();


ambilData();

/* =====================================
   MENU PERENCANAAN & MONITORING
===================================== */

const menuButtons = document.querySelectorAll(".menu-btn");

const monitoringSection =
document.getElementById("monitoringSection");

const perencanaanSection =
document.getElementById("perencanaanSection");

menuButtons.forEach(function(button){

    button.addEventListener("click",function(){

        menuButtons.forEach(function(btn){
            btn.classList.remove("active");
        });

        button.classList.add("active");

        if(button.dataset.menu==="monitoring"){

            monitoringSection.classList.add("active");

            perencanaanSection.classList.remove("active");

        }else{

            perencanaanSection.classList.add("active");

            monitoringSection.classList.remove("active");

        }

    });

});