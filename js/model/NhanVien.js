/** Lớp đối tượng nhân viên
 * - Thuộc tính: tknv, name, email password, datepicker, luongCB, chucvu, gioLam
 * - phương thức : tính điểm trung bình từ 3 môn toán, lý, hoá
 *
 */

const HE_SO = {
    GIAM_DOC : 3,
    TRUONG_PHONG : 2,
    NHAN_VIEN : 1,
};
function NhanVien() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucvu = "";
    this.gioLam = "";

    this.tinhTongLuong = function() {
        return (this.luongCB * HE_SO[this.chucvu]);
    };

    this.xepLoaiNhanVien = function() {
        let xepLoai = "";
        if(this.gioLam >= 192) {
            return xepLoai = "Nhân viên xuất sắc";
        } else if(this.gioLam >= 176) {
            return xepLoai = "Nhân viên giỏi";
        } else if(this.gioLam >= 160) {
            return xepLoai = "Nhân viên khá";
        } else {
            return xepLoai = "Nhân viên trung bình";
        }
    };
}
