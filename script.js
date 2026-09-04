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
   VARIABEL GLOBAL
===================================== */

let tahunAktif = 2026;
let triwulanAktif = 1;
let dataMonitoring = null;


/* =====================================
   ELEMENT HTML
===================================== */

const tahunSelect = document.getElementById("tahunSelect");

const triwulanButtons =
    document.querySelectorAll(".triwulan-button");

const periodeInfo =
    document.getElementById("periodeInfo");

const refreshButton =
    document.getElementById("refreshButton");

const indikatorList =
    document.getElementById("indikatorList");


/* =====================================
   SAAT HALAMAN SELESAI DIMUAT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    initMenu();

    initPeriode();

    loadData();

});


/* =====================================
   MENU PERENCANAAN / MONITORING
===================================== */

function initMenu() {

    const menuButtons =
        document.querySelectorAll(".menu-btn");

    const menuContents =
        document.querySelectorAll(".menu-content");


    menuButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const target =
                button.dataset.menu;


            menuButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            menuContents.forEach(function (section) {

                section.classList.remove("active");

            });


            button.classList.add("active");


            if (target === "perencanaan") {

                document
                    .getElementById("perencanaanSection")
                    .classList.add("active");

            }


            if (target === "monitoring") {

                document
                    .getElementById("monitoringSection")
                    .classList.add("active");

            }

        });

    });

}


/* =====================================
   PERIODE
===================================== */

function initPeriode() {

    if (tahunSelect) {

        tahunSelect.addEventListener("change", function () {

            tahunAktif =
                Number(this.value);

            triwulanAktif = 1;


            triwulanButtons.forEach(function (button) {

                button.classList.remove("active");

            });


            const firstButton =
                document.querySelector(
                    '.triwulan-button[data-triwulan="1"]'
                );


            if (firstButton) {

                firstButton.classList.add("active");

            }


            updatePeriodeInfo();

            loadData();

        });

    }


    triwulanButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            triwulanAktif =
                Number(button.dataset.triwulan);


            triwulanButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            updatePeriodeInfo();

            loadData();

        });

    });


    updatePeriodeInfo();

}


/* =====================================
   UPDATE INFORMASI PERIODE
===================================== */

function updatePeriodeInfo() {

    const namaTriwulan = {

        1: "I",
        2: "II",
        3: "III",
        4: "IV"

    };


    if (periodeInfo) {

        periodeInfo.textContent =
            `Monitoring Triwulan ${namaTriwulan[triwulanAktif]} Tahun ${tahunAktif}`;

    }

}


/* =====================================
   LOAD DATA API
===================================== */

async function loadData() {

    const url =
        apiURL?.[tahunAktif]?.[triwulanAktif];


    if (!url) {

        showError(
            "API untuk periode ini belum tersedia."
        );

        return;

    }


    setLoading(true);


    try {

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `HTTP Error ${response.status}`
            );

        }


        const data =
            await response.json();


        console.log(
            "Data dari Google Apps Script:",
            data
        );


        dataMonitoring = data;


        renderData(data);


    } catch (error) {

        console.error(
            "Gagal mengambil data:",
            error
        );


        showError(
            "Gagal mengambil data dari Google Apps Script."
        );

    } finally {

        setLoading(false);

    }

}


/* =====================================
   RENDER DATA
===================================== */

function renderData(data) {

    /*
       BAGIAN INI SENGAJA KITA BUAT
       FLEKSIBEL DULU.

       Kita perlu melihat bentuk JSON
       yang dikirim oleh Apps Script kamu.
    */


    console.log(
        "Struktur JSON:",
        JSON.stringify(data, null, 2)
    );


    /*
       Kalau API mengirim array IKU
       langsung, kita coba cari otomatis.
    */

    let ikuData = [];


    if (Array.isArray(data)) {

        ikuData = data;

    }

    else if (Array.isArray(data.data)) {

        ikuData = data.data;

    }

    else if (Array.isArray(data.iku)) {

        ikuData = data.iku;

    }

    else if (Array.isArray(data.indikator)) {

        ikuData = data.indikator;

    }


    renderIKU(ikuData);

    renderSummary(ikuData);

    renderProgress(ikuData);

    renderPJ(ikuData);

}


/* =====================================
   RENDER 17 IKU
===================================== */

function renderIKU(data) {

    if (!indikatorList) return;


    indikatorList.innerHTML = "";


    if (!Array.isArray(data) || data.length === 0) {

        indikatorList.innerHTML = `
            <p class="loading">
                Belum ada data IKU untuk periode ini.
            </p>
        `;

        return;

    }


    data.forEach(function (iku, index) {

        const card =
            createIKUCard(iku, index);


        indikatorList.appendChild(card);

    });

}


/* =====================================
   BUAT KARTU IKU
===================================== */

function createIKUCard(iku, index) {

    const card =
        document.createElement("div");


    /*
       Kita coba beberapa kemungkinan
       nama field dari Apps Script.
    */

    const nomor =
        iku.nomor ??
        iku.no ??
        iku.id ??
        index + 1;


    const nama =
        iku.nama ??
        iku.namaIKU ??
        iku.indikator ??
        iku.nama_indikator ??
        `Indikator Kinerja Utama ${nomor}`;


    const pj =
        iku.pj ??
        iku.penanggungJawab ??
        iku.penanggung_jawab ??
        "-";


    const notula =
        getDocumentStatus(
            iku.notula ??
            iku.dokumenNotula ??
            iku.buktiNotula
        );


    const bukti =
        getDocumentStatus(
            iku.bukti ??
            iku.buktiDukung ??
            iku.buktiKinerja ??
            iku.dokumenBukti
        );


    const tindakLanjut =
        getDocumentStatus(
            iku.tindakLanjut ??
            iku.buktiTindakLanjut ??
            iku.dokumenTindakLanjut
        );


    const jumlahDokumen =
        [notula, bukti, tindakLanjut]
            .filter(Boolean)
            .length;


    let status =
        iku.status ??
        iku.statusIKU;


    if (!status) {

        if (jumlahDokumen === 3) {

            status = "lengkap";

        }

        else if (jumlahDokumen > 0) {

            status = "sebagian";

        }

        else {

            status = "kosong";

        }

    }


    status =
        normalisasiStatus(status);


    card.className =
        `iku-card ${status}`;


    card.innerHTML = `

        <div class="iku-card-top">

            <span class="iku-number">
                IKU ${nomor}
            </span>

            <span class="iku-status">
                ${labelStatus(status)}
            </span>

        </div>


        <div class="iku-name">
            ${escapeHTML(nama)}
        </div>


        <div class="iku-pj">
            PJ:
            <strong>
                ${escapeHTML(pj)}
            </strong>
        </div>


        <div class="document-list">

            ${createDocumentItem(
                "Notula",
                notula
            )}

            ${createDocumentItem(
                "Bukti Dukung Kinerja",
                bukti
            )}

            ${createDocumentItem(
                "Bukti Tindak Lanjut",
                tindakLanjut
            )}

        </div>


        <div class="iku-actions">

            ${createDriveButton(
                iku.urlNotula ??
                iku.linkNotula ??
                iku.driveNotula,
                "Notula"
            )}

            ${createDriveButton(
                iku.urlBukti ??
                iku.linkBukti ??
                iku.driveBukti,
                "Bukti"
            )}

            ${createDriveButton(
                iku.urlTindakLanjut ??
                iku.linkTindakLanjut ??
                iku.driveTindakLanjut,
                "TL"
            )}

        </div>

    `;


    return card;

}


/* =====================================
   STATUS DOKUMEN
===================================== */

function getDocumentStatus(value) {

    if (
        value === true ||
        value === "TRUE" ||
        value === "true" ||
        value === "Ada" ||
        value === "ada" ||
        value === "Tersedia" ||
        value === "tersedia"
    ) {

        return true;

    }


    if (
        typeof value === "string" &&
        value.startsWith("http")
    ) {

        return true;

    }


    return false;

}


/* =====================================
   ITEM DOKUMEN
===================================== */

function createDocumentItem(label, tersedia) {

    return `

        <div class="document-item">

            <span>
                ${label}
            </span>

            <span
                class="document-icon
                ${tersedia ? "available" : "unavailable"}"
            >

                ${tersedia ? "✓" : "×"}

            </span>

        </div>

    `;

}


/* =====================================
   TOMBOL GOOGLE DRIVE
===================================== */

function createDriveButton(url, label) {

    if (
        typeof url !== "string" ||
        !url.startsWith("http")
    ) {

        return `

            <button
                class="drive-button"
                disabled
            >
                ${label}
            </button>

        `;

    }


    return `

        <a
            class="drive-button"
            href="${escapeAttribute(url)}"
            target="_blank"
            rel="noopener noreferrer"
        >
            ${label}
        </a>

    `;

}


/* =====================================
   RINGKASAN
===================================== */

function renderSummary(data) {

    const lengkap =
        data.filter(function (iku) {

            return normalisasiStatus(
                iku.status ??
                iku.statusIKU ??
                hitungStatusOtomatis(iku)
            ) === "lengkap";

        }).length;


    const sebagian =
        data.filter(function (iku) {

            return normalisasiStatus(
                iku.status ??
                iku.statusIKU ??
                hitungStatusOtomatis(iku)
            ) === "sebagian";

        }).length;


    const kosong =
        data.filter(function (iku) {

            return normalisasiStatus(
                iku.status ??
                iku.statusIKU ??
                hitungStatusOtomatis(iku)
            ) === "kosong";

        }).length;


    setText(
        "summaryLengkap",
        lengkap
    );


    setText(
        "summarySebagian",
        sebagian
    );


    setText(
        "summaryKosong",
        kosong
    );


    setText(
        "totalIKU",
        data.length
    );


    setText(
        "ikuLengkap",
        lengkap
    );


    const persenIKU =
        data.length > 0
            ? Math.round(
                (lengkap / data.length) * 100
            )
            : 0;


    setText(
        "persentaseIKU",
        `${persenIKU}%`
    );

}


/* =====================================
   PROGRESS DOKUMEN
===================================== */

function renderProgress(data) {

    let tersedia = 0;

    let total = 0;


    data.forEach(function (iku) {

        const dokumen = [

            iku.notula ??
            iku.dokumenNotula ??
            iku.buktiNotula,

            iku.bukti ??
            iku.buktiDukung ??
            iku.buktiKinerja ??
            iku.dokumenBukti,

            iku.tindakLanjut ??
            iku.buktiTindakLanjut ??
            iku.dokumenTindakLanjut

        ];


        dokumen.forEach(function (item) {

            total++;

            if (getDocumentStatus(item)) {

                tersedia++;

            }

        });

    });


    const persen =
        total > 0
            ? Math.round(
                (tersedia / total) * 100
            )
            : 0;


    setText(
        "dokumenTersedia",
        tersedia
    );


    setText(
        "totalDokumen",
        total
    );


    setText(
        "persentaseDokumen",
        `${persen}%`
    );


    const progressBar =
        document.getElementById(
            "progressDokumen"
        );


    if (progressBar) {

        progressBar.style.width =
            `${persen}%`;

    }


    const donut =
        document.getElementById(
            "donutChart"
        );


    if (donut) {

        donut.style.background =
            `conic-gradient(
                var(--biru) ${persen}%,
                #e4ebf2 ${persen}% 100%
            )`;

    }


    setText(
        "statusProgress",
        `${tersedia} dari ${total} dokumen tersedia`
    );

}


/* =====================================
   PJ DENGAN DOKUMEN BELUM LENGKAP
===================================== */

function renderPJ(data) {

    const pjList =
        document.getElementById(
            "pjList"
        );


    if (!pjList) return;


    const masalah = [];


    data.forEach(function (iku) {

        const status =
            normalisasiStatus(
                iku.status ??
                iku.statusIKU ??
                hitungStatusOtomatis(iku)
            );


        if (status !== "lengkap") {

            const pj =
                iku.pj ??
                iku.penanggungJawab ??
                iku.penanggung_jawab ??
                "Belum ditentukan";


            const nama =
                iku.nama ??
                iku.namaIKU ??
                iku.indikator ??
                iku.nama_indikator ??
                "IKU";


            masalah.push({

                pj: pj,

                iku: nama

            });

        }

    });


    if (masalah.length === 0) {

        pjList.innerHTML = `

            <p class="pj-empty">

                ✓ Semua PJ sudah lengkap.

            </p>

        `;

        return;

    }


    pjList.innerHTML = "";


    masalah.forEach(function (item) {

        const element =
            document.createElement("div");


        element.className =
            "pj-item";


        element.innerHTML = `

            <div class="pj-item-name">

                ${escapeHTML(item.pj)}

            </div>

            <div class="pj-item-iku">

                ${escapeHTML(item.iku)}

            </div>

        `;


        pjList.appendChild(element);

    });

}


/* =====================================
   HITUNG STATUS OTOMATIS
===================================== */

function hitungStatusOtomatis(iku) {

    const dokumen = [

        iku.notula ??
        iku.dokumenNotula ??
        iku.buktiNotula,

        iku.bukti ??
        iku.buktiDukung ??
        iku.buktiKinerja ??
        iku.dokumenBukti,

        iku.tindakLanjut ??
        iku.buktiTindakLanjut ??
        iku.dokumenTindakLanjut

    ];


    const jumlah =
        dokumen.filter(
            getDocumentStatus
        ).length;


    if (jumlah === 3) {

        return "lengkap";

    }


    if (jumlah > 0) {

        return "sebagian";

    }


    return "kosong";

}


/* =====================================
   NORMALISASI STATUS
===================================== */

function normalisasiStatus(status) {

    const value =
        String(status)
            .toLowerCase()
            .trim();


    if (
        value.includes("lengkap") ||
        value === "complete"
    ) {

        return "lengkap";

    }


    if (
        value.includes("sebagian") ||
        value.includes("partial")
    ) {

        return "sebagian";

    }


    if (
        value.includes("kosong") ||
        value.includes("belum") ||
        value === "empty"
    ) {

        return "kosong";

    }


    return "kosong";

}


/* =====================================
   LABEL STATUS
===================================== */

function labelStatus(status) {

    if (status === "lengkap") {

        return "Lengkap";

    }


    if (status === "sebagian") {

        return "Sebagian";

    }


    return "Kosong";

}


/* =====================================
   REFRESH
===================================== */

if (refreshButton) {

    refreshButton.addEventListener(
        "click",
        function () {

            loadData();

        }
    );

}


/* =====================================
   LOADING
===================================== */

function setLoading(isLoading) {

    if (refreshButton) {

        refreshButton.disabled =
            isLoading;

        refreshButton.textContent =
            isLoading
                ? "⏳ Memuat..."
                : "↻ Perbarui Data";

    }

}


/* =====================================
   ERROR
===================================== */

function showError(message) {

    if (indikatorList) {

        indikatorList.innerHTML = `

            <p class="loading">

                ⚠️ ${message}

            </p>

        `;

    }


    setText(
        "statusProgress",
        message
    );

}


/* =====================================
   HELPER
===================================== */

function setText(id, value) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            value;

    }

}


/* =====================================
   SECURITY
===================================== */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return escapeHTML(value);

}
