/** Thực hiện các chức năng quản lí nhân viên
 * - Tạo ra một array nhân viên giúp lưu trữ các đối tượng nhân viên từ người dùng tạo ra
 *
 */

// -------- Thêm nhân viên -------------
/**
 * Đầu tiên B1: lấy tất cả các thông tin của người dùng được nhập vào
 * B2: tạo ra một đối tượng có từ lớp đối tượng được định nghĩa và gán các giá trị người dùng nhập vào đối tượng đó
 * B3: dùng mảng tạo ra bên trên để push đối tượng vào và lưu trữ
 * B4: hiển thị dữ liệu ra cho người dùng có thể xem, chạy vòng lặp với mảng và tạo ra các chuỗi nội dung, sau khi tạo xong gọi dom tới thẻ cần hiển thị và gán nội dung vào
 */

let ARR_NHAN_VIEN = [];
const DATA_NHAN_VIEN = [
    TAI_KHOAN = {
        INPUT : "tknv",
        NOTIFY : "tbTKNV"
    },
    NAME = {
        INPUT : "name",
        NOTIFY : "tbTen"
    },
    EMAIL = {
        INPUT : "email",
        NOTIFY : "tbEmail"
    },
    PASSWORD = {
        INPUT : "password",
        NOTIFY : "tbMatKhau"
    },
    DATE = {
        INPUT : "datepicker",
        NOTIFY : "tbNgay"
    },
    LUONG = {
        INPUT : "luongCB",
        NOTIFY : "tbLuongCB"
    },
    CHUC_VU = {
        INPUT : "chucvu",
        NOTIFY : "tbChucVu"
    },
    GIO_LAM = {
        INPUT : "gioLam",
        NOTIFY : "tbGiolam"
    },
];


const CHECK = [
    "CHECK_EMPTY",
    "CHECK_TAI_KHOAN",
    "CHECK_NAME",
    "CHECK_EMAIL",
    "CHECK_PASSWORD",
    "CHECK_DATE",
    "CHECK_LUONG",
    "CHECK_CHUC_VU",
    "CHECK_GIO_LAM",
]
const ARR_INPUT = ['tknv', 'name', 'email', 'password', 'datepicker', 'luongCB', 'chucvu', 'gioLam'];
const ARR_NOTIFY = ['tbTKNV', 'tbTen', 'tbEmail', 'tbMatKhau', 'tbNgay', 'tbLuongCB', 'tbChucVu', 'tbGiolam'];

document.getElementById('btnThem').onclick = function(){
    for (let i = 0; i < DATA_NHAN_VIEN.length; i++) {
        document.getElementById(DATA_NHAN_VIEN[i].INPUT).value = "";
        document.getElementById(DATA_NHAN_VIEN[i].NOTIFY).value = "";
        document.getElementById(DATA_NHAN_VIEN[i].NOTIFY).style.display = "none";
    }
}

document.getElementById('btnThemNV').onclick = themNhanVien;
document.getElementById('btnCapNhat').onclick = capNhatNhanVien;

function themNhanVien() {
    console.warn("addMember");
    event.preventDefault();
    const nhanVien = new NhanVien();
    let isEmpty = true;
    let isValid = false;
    for (let i = 0; i < DATA_NHAN_VIEN.length; i++) {
        isValid = checkValidation(DATA_NHAN_VIEN[i].INPUT, DATA_NHAN_VIEN[i].NOTIFY, CHECK[i+1]);
        isEmpty = checkValidation(DATA_NHAN_VIEN[i].INPUT, DATA_NHAN_VIEN[i].NOTIFY, CHECK[0]);
        nhanVien[DATA_NHAN_VIEN[i].INPUT] = document.getElementById(DATA_NHAN_VIEN[i].INPUT).value;
    }
    console.warn(isValid)
    if(isValid) {
        ARR_NHAN_VIEN.push(nhanVien);
        renderNhanVien();
        luuLocal();
    }
}

function renderNhanVien() {
    let content = '';
    const typeNhanVien = document.getElementById('chucvu').value;
    const gioLam = document.getElementById('gioLam').value;
    for (let i = 0; i < ARR_NHAN_VIEN.length; i++) {
        const nhanVien = ARR_NHAN_VIEN[i];
        const newNhanVien = new NhanVien();
        Object.assign(newNhanVien, nhanVien);
        content += `
            <tr>
                <td>${newNhanVien.tknv}</td>
                <td>${newNhanVien.name}</td>
                <td>${newNhanVien.email}</td>
                <td>${newNhanVien.datepicker}</td>
                <td>${newNhanVien.chucvu}</td>
                <td>${newNhanVien.tinhTongLuong()}</td>
                <td>${newNhanVien.xepLoaiNhanVien()}</td>
                <td>
                    <button onclick="xoaNhanVien(${newNhanVien.tknv})" class="btn btn-danger">Xoá</button>
                </td>
            </tr>
        `;
    }
    document.getElementById('tableDanhSach').innerHTML = content;
}

function xoaNhanVien(taiKhoan) {
    console.warn(taiKhoan)
    let index = -1;
    for (let i = 0; i < ARR_NHAN_VIEN.length; i++) {
        var nhanVien = ARR_NHAN_VIEN[i];
        if (nhanVien.taiKhoan == taiKhoan) {
          index = i;
        }
    }
    ARR_NHAN_VIEN.splice(index, 1);
    renderNhanVien();
    luuLocal()
}

function luuLocal() {
    localStorage.setItem('ARR_NHAN_VIEN', JSON.stringify(ARR_NHAN_VIEN));
}

function layLocal() {
    const data = localStorage.getItem('ARR_NHAN_VIEN');
    console.warn(data);
    console.warn(ARR_NHAN_VIEN);
    if (data) {
      ARR_NHAN_VIEN = JSON.parse(data);
      renderNhanVien();
    }
}
layLocal();