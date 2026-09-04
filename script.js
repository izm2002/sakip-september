/* =====================================================
   KONFIGURASI GOOGLE APPS SCRIPT
===================================================== */

const apiURL = {

    2026: {

        1: "https://script.google.com/macros/s/AKfycbxWqnAHMrMYJ7B1seIyE3x0hP5CWXQ4EMgYFU7uFaJCWqio8OvzcMb6jSUKf3z4eiCn/exec",

        2: "https://script.google.com/macros/s/AKfycbwqC9AaxWLDSUVtZImhvUX8Zv8H09PyvXCpLdCkQt2X4qhocFBRV5ALnwc_-um2rkYHaA/exec",

        3: "https://script.google.com/macros/s/AKfycbzmhFpQ_9Qi3jPH3JHco50ieBvko22LgA53csCBM3OYxl4AyjWUGvg_lw7kK5FviCbx/exec",

        4: "https://script.google.com/macros/s/AKfycbzS7SwSJT-2t44IXsTyKpE-KbHI34vDcIaN0hy7RcKyTE_y3OJdCjIAr4XCQmY6r1mi/exec"

    }

};


/* =====================================================
   MENU NAVIGASI
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuButtons =
        document.querySelectorAll(".menu-btn");

    const menuSections =
        document.querySelectorAll(".menu-content");


    menuButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const target =
                button.getAttribute("data-menu");


            /* Matikan semua tombol */

            menuButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Matikan semua section */

            menuSections.forEach(function (section) {

                section.classList.remove("active");

            });


            /* Aktifkan tombol yang dipilih */

            button.classList.add("active");


            /* Aktifkan section yang sesuai */

            const targetSection =
                document.getElementById(
                    target + "Section"
                );


            if (targetSection) {

                targetSection.classList.add("active");

            }


            /* Kalau masuk monitoring,
               load data */

            if (target === "monitoring") {

                loadMonitoringData();

            }

        });

    });


    /* Jalankan monitoring kalau
       halaman pertama kali dibuka */

    loadMonitoringData();

});


/* =====================================================
   VARIABEL MONITORING
===================================================== */

let tahunAktif = 2026;
let triwulanAktif = 1;


/* =====================================================
   PILIH TRIWULAN
===================================================== */

document.addEventListener("click", function (event) {

    if (!event.target.classList.contains(
        "triwulan-button"
    )) {
        return;
    }


    const buttons =
        document.querySelectorAll(
            ".triwulan-button"
        );


    buttons.forEach(function (button) {

        button.classList.remove("active");

    });


    event.target.classList.add("active");


    triwulanAktif =
        Number(
            event.target.dataset.triwulan
        );


    updatePeriode();


    loadMonitoringData();

});


/* =====================================================
   PILIH TAHUN
===================================================== */

const tahunSelect =
    document.getElementById("tahunSelect");


if (tahunSelect) {

    tahunSelect.addEventListener(
        "change",
        function () {

            tahunAktif =
                Number(this.value);

            updatePeriode();

            loadMonitoringData();

        }
    );

}


/* =====================================================
   UPDATE TEKS PERIODE
===================================================== */

function updatePeriode() {

    const periodeInfo =
        document.getElementById(
            "periodeInfo"
        );


    const namaTriwulan = {

        1: "Triwulan I",
        2: "Triwulan II",
        3: "Triwulan III",
        4: "Triwulan IV"

    };


    if (periodeInfo) {

        periodeInfo.textContent =
            "Monitoring " +
            namaTriwulan[triwulanAktif] +
            " Tahun " +
            tahunAktif;

    }

}


/* =====================================================
   LOAD DATA MONITORING
===================================================== */

async function loadMonitoringData() {

    const url =
        apiURL?.[tahunAktif]?.[triwulanAktif];


    if (!url) {

        console.error(
            "API tidak ditemukan:",
            tahunAktif,
            triwulanAktif
        );

        return;

    }


    const status =
        document.getElementById(
            "statusProgress"
        );


    if (status) {

        status.textContent =
            "Sedang memuat data...";

    }


    try {

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "HTTP Error " +
                response.status
            );

        }


        const data =
            await response.json();


        console.log(
            "Data API:",
            data
        );


        /*
         * BAGIAN INI NANTI KITA SESUAIKAN
         * DENGAN FORMAT JSON DARI APPS SCRIPT
         */

        prosesDataMonitoring(data);


    } catch (error) {

        console.error(
            "Gagal mengambil data:",
            error
        );


        if (status) {

            status.textContent =
                "Data belum dapat dimuat.";

        }

    }

}


/* =====================================================
   PROSES DATA
===================================================== */

function prosesDataMonitoring(data) {

    console.log(
        "Data monitoring diterima:",
        data
    );


    /*
     * Untuk sementara.
     *
     * Setelah kamu kirim isi Code.gs dari
     * Google Apps Script, bagian ini akan
     * kita hubungkan dengan data asli.
     */


    const totalDokumen =
        document.getElementById(
            "totalDokumen"
        );


    const totalIKU =
        document.getElementById(
            "totalIKU"
        );


    if (totalDokumen) {

        totalDokumen.textContent = 51;

    }


    if (totalIKU) {

        totalIKU.textContent = 17;

    }

}


/* =====================================================
   TOMBOL REFRESH
===================================================== */

const refreshButton =
    document.getElementById(
        "refreshButton"
    );


if (refreshButton) {

    refreshButton.addEventListener(
        "click",
        function () {

            loadMonitoringData();

        }
    );

}
