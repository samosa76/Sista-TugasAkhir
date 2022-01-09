function daftarPeserta(){
    let nim = document.getElementById("nim").value
    let nama = document.getElementById("nama").value
    let prodi = document.getElementById("prodi").value
    let program = document.forms["formDaftarPesertaSeminar"]["radio"].value
    let form = document.getElementById("formDaftarPesertaSeminar")

    if(nim != "" && nama != "" && prodi != "" && program != "" ){
        form.setAttribute("action", "PesertaSeminar.html")
    } else {
        alert("masukan dengan benar")
    }
}

function daftarSeminar(){
    let btnDaftarSeminar = document.getElementById("btnDaftarSeminar")
    let nim = document.getElementById("nim").value
    let nama = document.getElementById("nama").value
    let prodi = document.getElementById("prodi").value
    let tanggal = document.getElementById("tanggal").value
    let jam = document.getElementById("jam").value
    let ruangan = document.getElementById("ruangan").value
    let judulTA = document.getElementById("judulTA").value
    let seminar = document.getElementById("seminar").value
    let pembimbing = document.getElementById("pembimbing").value
    let penguji1 = document.getElementById("penguji1").value
    let penguji2 = document.getElementById("penguji2").value

    if(nim != "" && nama != "" && prodi != "" && tanggal != "" && jam != "" && ruangan != "" && judulTA != "" && seminar != "" && pembimbing != "" && penguji1 != "" && penguji2 != "" ){
        btnDaftarSeminar.setAttribute("href","home.html")
    }else {
        alert("Harap masukan data dengan benar")
    }

}

function login(){
    let btnLogin = document.getElementById("btnLogin")
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if(username != "" && password != "") {
        btnLogin.setAttribute("href","home.html")
    } else {
        alert("Masukan username dan password")
    }
}

function register(){
    let form = document.getElementById("formRegister")
    let nama = document.getElementById("nama").value
    let prodi = document.getElementById("prodi").value
    let password = document.getElementById("password").value
    let recheckPass = document.getElementById("recheckPass").value

    if(nama != "" && prodi != "" && password != "" && recheckPass != ""){
        if(password == recheckPass){
            form.setAttribute("action", "home.html")
        }else{
            alert("Password tidak cocok")
        }

    } else {
        alert("Isi data dengan benar")
    }
}