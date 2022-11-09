let totalBayar = 0;

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let kosong = "";
    if(email=="sug@gmail.com" && password=="asd"){
        window.open("home.html","_self");
    }else{
        alert("email / password salah");
        document.getElementById("email").value=kosong;
        document.getElementById("password").value=kosong;
    }
}

// function ilang() {
//     document.getElementById("login").style.display='none';
// }

function tambah(m) {
    let qty = prompt("masukkan qty");
    let nama;
    let harga;
    let menu;
    
    menu = document.getElementById("add").value;
    
    let table = document.getElementsByName('table-menu')[0];
    let newRow = table.insertRow(table.rows.length-1);
    
    if(m == 1){
        nama = "Gurame Bakar";
        harga = 25000;

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = nama;
        cell2.innerHTML = qty;
        cell3.innerHTML = harga;
        let tot = qty*harga;
        cell4.innerHTML = tot;

        totalBayar = totalBayar + tot;
    }else if(m == 2){
        nama = "Soto";
        harga = 15000;

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        
        cell1.innerHTML = nama;
        cell2.innerHTML = qty;
        cell3.innerHTML = harga;
        let tot = qty*harga;
        cell4.innerHTML = tot;

        totalBayar = totalBayar + tot;
    }else if(m == 3){
        nama = "Ayam Geprek";
        harga = 13000;

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = nama;
        cell2.innerHTML = qty;
        cell3.innerHTML = harga;
        let tot = qty*harga;
        cell4.innerHTML = tot;

        totalBayar = totalBayar + tot;
    }else if(m == 4){
        nama = "Lalapan Lele";
        harga = 10000;

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = nama;
        cell2.innerHTML = qty;
        cell3.innerHTML = harga;
        let tot = qty*harga;
        cell4.innerHTML = tot;

        totalBayar = totalBayar + tot;
    }else if(m == 5){
        nama = "Es Teh";
        harga = 3000;

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = nama;
        cell2.innerHTML = qty;
        cell3.innerHTML = harga;
        let tot = qty*harga;
        cell4.innerHTML = tot;

        totalBayar = totalBayar + tot;
    }else if(m == 6){
        nama = "Es Jeruk";
        harga = 4000;

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = nama;
        cell2.innerHTML = qty;
        cell3.innerHTML = harga;
        let tot = qty*harga;
        cell4.innerHTML = tot;

        totalBayar = totalBayar + tot;
    }
    else{
        alert("menu tidak ada");
    }

    document.getElementById("totBayar").innerHTML = "Total Bayar = "+totalBayar;
}

//jQuery------------------------------------------------------------------------------

let nmr = 0;
$(document).ready(function(){
    $("#bayar").click(function(){
        nmr = nmr + 1;
        $("#kdPesan").val(null);

        $(".a2").animate({
            height: 'show'
        });
    })

    $("#reset").click(function(){
       location.reload();
    })

    $("#kdPesan").focus(function(){
        let nomer = nmr + 1;
        let d = new Date();
        let faktur = "PJ"+d.getFullYear()+""+d.getMonth()+d.getDate()+nomer;
        $("#kdPesan").val(faktur);
    });
});