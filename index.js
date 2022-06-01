//Bài tập 1:
document.getElementById('btnTongluong').onclick = function () {
    var soNgay = Number(document.getElementById('soNgay').value);
    tienLuong = soNgay * 100000;
    document.getElementById('ketQua1').innerHTML = tienLuong;
}
//Bài tập 2:
document.getElementById('btnTB').onclick = function () {
    var so1 = Number(document.getElementById('iSo1').value);
    var so2 = Number(document.getElementById('iSo2').value);
    var so3 = Number(document.getElementById('iSo3').value);
    var so4 = Number(document.getElementById('iSo4').value);
    var so5 = Number(document.getElementById('iSo5').value);
    trungbinh = (so1 + so2 + so3 + so4 + so5) / 5;
    document.getElementById('ketQua2').innerHTML = trungbinh;
}
//Bài tập 3: 
document.getElementById('btnDoiUSD').onclick = function () {
    var soUSD = Number(document.getElementById('soUSD').value);
    soTien = soUSD * 23500;
    document.getElementById('ketQua3').innerHTML = soTien + ' VNĐ';
}
//Bài tập 4: 
document.getElementById('btnDientich').onclick = function () {
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);
    dienTich = (chieuDai + chieuRong) * 2;
    document.getElementById('ketQua4').innerHTML = dienTich;
}
//Bài tập 5: 
document.getElementById('btnTong2so').onclick= function () {
    var sohangDv=Number(document.getElementById('haiSo').value)%10;
    var sohangChuc=Number(Math.floor(document.getElementById('haiSo').value/10)); 
    tong2So= sohangDv+sohangChuc;
    document.getElementById('ketQua5').innerHTML= tong2So;
}