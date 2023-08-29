const express = require("express");
const next = require('next');
const router = express.Router();
const server = express();
// Đăng ký middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3001;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
const server = express();

    server.get("/", (req, res) => {
        return app.render(req, res, "/", req.query);
    });
    // Trang login
    server.get("/admin", (req, res) => {
        return app.render(req, res, "/admin/login", req.query);
    });

    //Trang chủ admin
    server.get("/admin/login", (req, res) => {
        return app.render(req, res, "/admin/login", req.query);
    });

    //DANG NHAP
    server.get("/dang-nhap", (req, res) => {
        return app.render(req, res, "/dang_nhap", req.query);
    });
    //SO SANH GIA
    server.get("/so-sanh-san-pham.html", (req, res) => {
        return app.render(req, res, "/sosanh_sanpham", req.query);
    });
    //DANG NHAP DOANH NGHIEP
    server.get("/dang-nhap-tai-khoan-:url.html", (req, res) => {
        const { url } = req.params;
        return app.render(req, res, `/dangnhap_tatca`, { url: url, ...req.query })
    });

    //DANG Xuat
    server.get("/dang-xuat.html", (req, res) => {
        return app.render(req, res, `/dang_xuat`, req.query)
    });

    server.get("/trang-tin-mua.html", (req, res) => {
        return app.render(req, res, "/tim_kiem_mua", req.query);
    });

    //Danh sach tin tuc
    server.get("/tin-tuc", (req, res) => {
        return app.render(req, res, "/tin_tuc", req.query);
    });

    //Chi tiết tin tuc
    server.get("/tin-tuc/(:title)-p(:id).html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, `/chi_tiet_tin_tuc`, { id: parseInt(id), ...req.query });
    });

    //Bang gia
    server.get("/bang-gia.html", (req, res) => {
        return app.render(req, res, "/bang_gia", req.query);
    });

    //Bang gia ghim tin noi bat
    server.get("/bang-gia-ghim-tin-noi-bat.html", (req, res) => {
        return app.render(req, res, "/bgia_ghim_noi_bat", req.query);
    });

    //Bang gia ghim tin hap dan
    server.get("/bang-gia-ghim-tin-hap-dan.html", (req, res) => {
        return app.render(req, res, "/bgia_tin_hd", req.query);
    });

    //Bang gia ghim thuong hieu
    server.get("/bang-gia-ghim-thuong-hieu.html", (req, res) => {
        return app.render(req, res, "/bgia_tin_th", req.query);
    });

    //Bang gia ghim trang danh muc
    server.get("/bang-gia-ghim-trang-danh-muc.html", (req, res) => {
        return app.render(req, res, "/bgia_ghim_trang_dm", req.query);
    });

    //Dich vu bang gia
    server.get("/dich-vu-bang-gia.html", (req, res) => {
        return app.render(req, res, "/bgia_dich_vu", req.query);
    });

    //Chon loai tin dang
    server.get("/chon-loai-dang-tin.html", (req, res) => {
        return app.render(req, res, "/loai_dang_tin", req.query);
    })

    //Dang tin san pham ban
    server.get("/dang-tin-san-pham-ban.html", (req, res) => {
        return app.render(req, res, "/dang_tin_san_pham_ban", req.query);
    })

    //Dang tin san pham mua
    server.get("/dang-tin-san-pham-mua.html", (req, res) => {
        return app.render(req, res, "/dang_tin_san_pham_mua", req.query);
    })

    //Dang tin mua
    server.get("/dang-tin-mua-d:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/dang_tin_mua", { id, ...req.query });
    });

    //Chỉnh sửa tin mua
    server.get("/chinh-sua-tin-dang-mua-d(:id)-s(:id_new).html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin_mua", { id, id_new, ...req.query });
    });
    //-------------------- Thu cung ---------------------------
    //Dang tin thu cung ga
    server.get("/dang-tin-thu-cung-ga.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thu_cung/ga", req.query);
    });
    //Dang tin thu cung cho
    server.get("/dang-tin-thu-cung-cho.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thu_cung/cho", req.query);
    });
    //Dang tin thu cung chim
    server.get("/dang-tin-thu-cung-chim.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thu_cung/chim", req.query);
    });
    //Dang tin thu cung meo
    server.get("/dang-tin-thu-cung-meo.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thu_cung/meo", req.query);
    });
    //Dang tin do an - phu kien
    server.get("/dang-tin-thu-cung-do-an-phu-kien-dich-vu.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thu_cung/phu_kien", req.query);
    });

    //Dang tin thú cưng khác
    server.get("/dang-tin-thu-cung-khac.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thu_cung/khac", req.query);
    });
    //------------------End thu cung-----------------------------

    //------------------Thu cong - My nghe - Qua tang ----------------------
    server.get("/dang-tin-thu-cong-my-nghe-qua-tang-thiet-ke-phong-thuy.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thucong_mynghe/phongthuy", req.query);
    });
    server.get("/dang-tin-thu-cong-my-nghe-qua-tang-nghe-thuat-thu-cong.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thucong_mynghe/thucong", req.query);
    });
    server.get("/dang-tin-thu-cong-my-nghe-qua-tang-hoa-qua-tang-handmade.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thucong_mynghe/qua_tang", req.query);
    });
    //------------------End Thu cong - My nghe - Qua tang ----------------------

    //--------------------The thao-------------------------------------------
    server.get("/dang-tin-the-thao-dung-cu-the-thao.html", (req, res) => {
        return app.render(req, res, "/dang_tin/the_thao/dung_cu", req.query);
    });
    server.get("/dang-tin-the-thao-thoi-trang-the-thao.html", (req, res) => {
        return app.render(req, res, "/dang_tin/the_thao/thoi_trang", req.query);
    });
    server.get("/dang-tin-the-thao-phu-kien-the-thao.html", (req, res) => {
        return app.render(req, res, "/dang_tin/the_thao/phu_kien", req.query);
    });
    //--------------------End the thao -------------------------------------------

    //--------------------Du lich-------------------------------------------
    server.get("/dang-tin-du-lich.html", (req, res) => {
        return app.render(req, res, "/dang_tin/du_lich/du_lich", req.query);
    });
    //--------------------End du lich -------------------------------------------

    server.get("/dang-tin-noi-that-ngoai-that-noi-that-phong-khach.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_khach", req.query);
    });
    server.get("/dang-tin-noi-that-ngoai-that-noi-that-phong-ngu.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_ngu", req.query);
    });
    server.get("/dang-tin-noi-that-ngoai-that-noi-that-phong-bep.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_bep", req.query);
    });
    server.get("/dang-tin-noi-that-ngoai-that-noi-that-phong-tam.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_tam", req.query);
    });
    server.get("/dang-tin-noi-that-ngoai-that-noi-that-van-phong.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/van_phong", req.query);
    });
    server.get("/dang-tin-noi-that-ngoai-that-noi-that-vuon.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/noithat_vuon", req.query);
    });
    server.get("/dang-tin-noi-that-ngoai-that-noi-that-khac.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/noithat_khac", req.query);
    });
    server.get("/dang-tin-noi-that-ngoai-that-noi-that-ngoai-that.html", (req, res) => {
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/ngoai_that", req.query);
    });
    // ==============================ĐỒ ĐIỆN TỬ=====================================================
    server.get("/dang-tin-do-dien-tu-may-anh-may-quay.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_mayanh", req.query);
    });

    server.get("/dang-tin-do-dien-tu-tivi-loa-amply-may-nghe-nhac.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_tvamly", req.query);
    });

    server.get("/dang-tin-do-dien-tu-laptop.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_laptop", req.query);
    });

    server.get("/dang-tin-do-dien-tu-may-tinh-bang.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_maytbang", req.query);
    });

    server.get("/dang-tin-do-dien-tu-linh-kien.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_linhkien", req.query);
    });

    server.get("/dang-tin-do-dien-tu-phu-kien.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_phukien", req.query);
    });

    server.get("/dang-tin-do-dien-tu-thiet-bi-deo-thong-minh.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_tbdeothongminh", req.query);
    });

    server.get("/dang-tin-do-dien-tu-dien-thoai-di-dong.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_dienthoai", req.query);
    });

    server.get("/dang-tin-do-dien-tu-may-tinh-de-ban.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_mtdb", req.query);
    });

    // =================================Xe cộ===============================================
    server.get("/dang-tin-xe-co-xe-dap.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/xedap", req.query);
    });
    server.get("/dang-tin-xe-co-xe-may.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/xemay", req.query);
    });
    server.get("/dang-tin-xe-co-o-to.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/oto", req.query);
    });
    server.get("/dang-tin-xe-co-xe-tai-xe-khac.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/xetaixekhac", req.query);
    });
    server.get("/dang-tin-xe-co-phu-tung-xe.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/phutung", req.query);
    });
    server.get("/dang-tin-xe-co-xe-dap-dien.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/xedapdien", req.query);
    });
    server.get("/dang-tin-xe-co-xe-may-dien.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/xemaydien", req.query);
    });
    server.get("/dang-tin-xe-co-noi-that-o-to.html", (req, res) => {
        return app.render(req, res, "/dang_tin/xeco/noithatoto", req.query);
    });
    // ===================================BẤT ĐỘNG SẢN========================================================
    server.get("/dang-tin-bat-dong-san-mua-ban-nha-dat.html", (req, res) => {
        return app.render(req, res, "/dang_tin/batdongsan/nhadat", req.query);
    });
    server.get("/dang-tin-bat-dong-san-dat.html", (req, res) => {
        return app.render(req, res, "/dang_tin/batdongsan/dat", req.query);
    });
    server.get("/dang-tin-bat-dong-san-nha-trong-ngo.html", (req, res) => {
        return app.render(req, res, "/dang_tin/batdongsan/nhatrongngo", req.query);
    });
    server.get("/dang-tin-bat-dong-san-can-ho-chung-cu.html", (req, res) => {
        return app.render(req, res, "/dang_tin/batdongsan/canhotrungcu", req.query);
    });
    server.get("/dang-tin-bat-dong-san-nha-rieng-nguyen-can.html", (req, res) => {
        return app.render(req, res, "/dang_tin/batdongsan/nharieng", req.query);
    });
    server.get("/dang-tin-bat-dong-san-cua-hang.html", (req, res) => {
        return app.render(req, res, "/dang_tin/batdongsan/cuahang", req.query);
    });
    server.get("/dang-tin-bat-dong-san-van-phong.html", (req, res) => {
        return app.render(req, res, "/dang_tin/batdongsan/vanphong", req.query);
    });
    // ===================================Gia dụng==================================================
    server.get("/dang-tin-do-gia-dung-thiet-bi-dien-lanh.html", (req, res) => {
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_dienlanh", req.query);
    });
    server.get("/dang-tin-do-gia-dung-thiet-bi-nha-bep.html", (req, res) => {
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_nhabep", req.query);
    });
    server.get("/dang-tin-do-gia-dung-thiet-bi-suc-khoe.html", (req, res) => {
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_suckhoe", req.query);
    });
    server.get("/dang-tin-do-gia-dung-thiet-bi-theo-mua.html", (req, res) => {
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_theomua", req.query);
    });
    server.get("/dang-tin-do-gia-dung-do-gia-dung-khac.html", (req, res) => {
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_khac", req.query);
    });
    // ===================================Sức khỏe - sắc đẹp==================================================
    server.get("/dang-tin-suc-khoe-sac-dep-my-pham.html", (req, res) => {
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/mypham", req.query);
    });
    server.get("/dang-tin-suc-khoe-sac-dep-spa.html", (req, res) => {
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/spa", req.query);
    });
    server.get("/dang-tin-suc-khoe-sac-dep-vat-tu-y-te.html", (req, res) => {
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/vattu_yte", req.query);
    });
    server.get("/dang-tin-suc-khoe-sac-dep-thuc-pham-chuc-nang.html", (req, res) => {
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/thucpham_chucnang", req.query);
    });
    server.get("/dang-tin-suc-khoe-sac-dep-dung-cu-lam-dep.html", (req, res) => {
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/dungcu_lamdep", req.query);
    });
    // ===================================Mẹ và bé==================================================
    server.get("/dang-tin-me-va-be-do-cho-me-va-be.html", (req, res) => {
        return app.render(req, res, "/dang_tin/me_va_be/me_be", req.query);
    });
    // ===================================Khuyến mãi==================================================
    server.get("/dang-tin-khuyen-mai-giam-gia.html", (req, res) => {
        return app.render(req, res, "/dang_tin/khuyen_mai/khuyen_mai", req.query);
    });
    // =================================Dịch vụ giải trí===============================================
    server.get("/dang-tin-dich-vu-giai-tri-nhac-cu.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dichvugiaitri/nhaccu", req.query);
    });
    server.get("/dang-tin-dich-vu-giai-tri-sach.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dichvugiaitri/sach", req.query);
    });
    server.get("/dang-tin-dich-vu-giai-tri-dich-vu.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dichvugiaitri/dichvu", req.query);
    });
    server.get("/dang-tin-dich-vu-giai-tri-so-thich-khac.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dichvugiaitri/sothichkhac", req.query);
    });
    server.get("/dang-tin-dich-vu-giai-tri-suu-tam-do-co.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dichvugiaitri/suutamdoco", req.query);
    });
    server.get("/dang-tin-dich-vu-giai-tri-thiet-bi-choi-game.html", (req, res) => {
        return app.render(req, res, "/dang_tin/dichvugiaitri/thietbichoigame", req.query);
    });
    // =================================Dịch vụ giải trí===============================================
    server.get("/dang-tin-thoi-trang-thoi-trang-nam.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangnam", req.query);
    });
    server.get("/dang-tin-thoi-trang-thoi-trang-nu.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangnu", req.query);
    });
    server.get("/dang-tin-thoi-trang-thoi-trang-be.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangbe", req.query);
    });
    server.get("/dang-tin-thoi-trang-giay-dep.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thoitrang/thoitranggiaydep", req.query);
    });
    server.get("/dang-tin-thoi-trang-do-doi-dong-phuc.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangdongphuc", req.query);
    });
    // ============================================================================================
    server.get("/dang-tin-ship.html", (req, res) => {
        return app.render(req, res, "/dang_tin/ship/ship", req.query);
    });
    // ====================================Việc Làm========================================================
    server.get("/dang-tin-viec-lam-tim-ung-vien.html", (req, res) => {
        return app.render(req, res, "/dang_tin/viec_lam/tim_ung_vien", req.query);
    });
    server.get("/dang-tin-viec-lam-tim-viec-lam.html", (req, res) => {
        return app.render(req, res, "/dang_tin/viec_lam/tim_viec_lam", req.query);
    });
    // =================================Thực phẩm đồ uống===============================================
    server.get("/dang-tin-thuc-pham-do-uong-thuc-pham.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thucpham_douong/thucpham", req.query);
    });
    server.get("/dang-tin-thuc-pham-do-uong-do-uong.html", (req, res) => {
        return app.render(req, res, "/dang_tin/thucpham_douong/douong", req.query);
    });
    //-------------------------------CHINH SUA TIN-------------------------------------
    //Sua tin do dien tu
    //May tinh de ban
    server.get("/chinh-sua-tin-dang-may-tinh-de-ban-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_mtdb", { id, id_new, ...req.query });
    });
    //Dien thoai di dong
    server.get("/chinh-sua-tin-dang-dien-thoai-di-dong-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_dienthoai", { id, id_new, ...req.query });
    });

    //Laptop
    server.get("/chinh-sua-tin-dang-laptop-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_laptop", { id, id_new, ...req.query });
    });

    //Linh kien
    server.get("/chinh-sua-tin-dang-do-dien-tu-linh-kien-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_linhkien", { id, id_new, ...req.query });
    });
    //may tinh bang
    server.get("/chinh-sua-tin-dang-may-tinh-bang-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_maytbang", { id, id_new, ...req.query });
    });
    //may anh
    server.get("/chinh-sua-tin-dang-may-anh-may-quay-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_mayanh", { id, id_new, ...req.query });
    });
    //phu kien
    server.get("/chinh-sua-tin-dang-phu-kien-linh-kien-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_phukien", { id, id_new, ...req.query });
    });
    //thiet bi thong minh
    server.get("/chinh-sua-tin-dang-thiet-bi-thong-minh-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_tbdeothongminh", { id, id_new, ...req.query });
    });
    //tivi - am ly
    server.get("/chinh-sua-tin-dang-may-tivi-loa-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dodientu/dangtin_ddt_tvamly", { id, id_new, ...req.query });
    });

    //------------Xe co----------------
    //Chinh sua tin noi that o to
    server.get("/chinh-sua-tin-dang-noi-that-oto-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/noithatoto", { id_new, ...req.query });
    });
    //Chinh sua tin xe may
    server.get("/chinh-sua-tin-dang-xe-may-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/xemay", { id_new, ...req.query });
    });
    //Chinh sua tin o to
    server.get("/chinh-sua-tin-dang-oto-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/oto", { id_new, ...req.query });
    });
    //Chinh sua tin xe dap
    server.get("/chinh-sua-tin-dang-xe-dap-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/xedap", { id_new, ...req.query });
    });
    //Chinh sua tin xe dap dien
    server.get("/chinh-sua-tin-dang-xe-dap-dien-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/xedapdien", { id_new, ...req.query });
    });
    //Chinh sua tin xe may dien
    server.get("/chinh-sua-tin-dang-xe-may-dien-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/xemaydien", { id_new, ...req.query });
    });
    //Chinh sua tin phu tung xe co
    server.get("/chinh-sua-tin-dang-phu-tung-xe-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/phutung", { id_new, ...req.query });
    });
    //Chinh sua tin xe khac
    server.get("/chinh-sua-tin-dang-xe-tai-xe-khac-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/xeco/xetaixekhac", { id_new, ...req.query });
    });
    //--------------Thoi trang -----------------
    //Thoi trang be
    server.get("/chinh-sua-tin-dang-thoi-trang-be-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangbe", { id, id_new, ...req.query });
    });
    //Thoi trang do doi - dong phuc
    server.get("/chinh-sua-tin-dang-thoi-trang-do-doi-dong-phuc-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangdongphuc", { id, id_new, ...req.query });
    });
    //Thoi trang nam
    server.get("/chinh-sua-tin-dang-thoi-trang-nam-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangnam", { id, id_new, ...req.query });
    });
    //Thoi trang nu
    server.get("/chinh-sua-tin-dang-thoi-trang-nu-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thoitrang/thoitrangnu", { id, id_new, ...req.query });
    });
    //Thoi trang giay dep
    server.get("/chinh-sua-tin-dang-thoi-trang-giay-dep-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thoitrang/thoitranggiaydep", { id, id_new, ...req.query });
    });
    //---------------Dich vu giai tri-------------------
    server.get("/chinh-sua-tin-dang-dich-vu-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dichvugiaitri/dichvu", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-nhac-cu-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dichvugiaitri/nhaccu", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-sach-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dichvugiaitri/sach", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-su-tam-do-co-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dichvugiaitri/suutamdoco", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thiet-bi-choi-game-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dichvugiaitri/thietbichoigame", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-so-thich-khac-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/dichvugiaitri/sothichkhac", { id, id_new, ...req.query });
    });
    //-----------SHIP
    server.get("/chinh-sua-tin-dang-ship-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/ship/ship", { id_new, ...req.query });
    });
    //Bat doong san
    //Can ho
    server.get("/chinh-sua-tin-dang-can-ho-chung-cu-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/batdongsan/canhotrungcu", { id, id_new, ...req.query });
    });

    server.get("/chinh-sua-tin-dang-nha-dat-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/batdongsan/nhadat", { id_new, ...req.query });
    });

    server.get("/chinh-sua-tin-dang-dat-:id.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/batdongsan/dat", { id_new, ...req.query });
    });

    server.get("/chinh-sua-tin-dang-nha-trong-ngo-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/batdongsan/nhatrongngo", { id_new, ...req.query });
    });

    server.get("/chinh-sua-tin-dang-nha-rieng-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/batdongsan/nharieng", { id_new, ...req.query });
    });

    server.get("/chinh-sua-tin-dang-van-phong-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/batdongsan/vanphong", { id_new, ...req.query });
    });

    server.get("/chinh-sua-tin-dang-cua-hang-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/batdongsan/cuahang", { id_new, ...req.query });
    });

    //----------------Noi that - Ngoai that------------------------------------
    server.get("/chinh-sua-tin-dang-ngoai_that-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/ngoai_that", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-noi-that-khac-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/noithat_khac", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-vuon-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/noithat_vuon", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-noi-that-van-phong-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/van_phong", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-noi-that-phong-khach-:id.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_khach", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-noi-that-phong-ngu-:id.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_ngu", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-noi-that-phong-bep-:id.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_bep", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-noi-that-phong-tam-:id.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/noithat_ngoaithat/phong_tam", { id_new, ...req.query });
    });
    //-----------Me và be
    server.get("/chinh-sua-tin-dang-me-va-be-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/me_va_be/me_be", { id, id_new, ...req.query });
    });
    //----------Gia dung------------------
    server.get("/chinh-sua-tin-dang-thiet-bi-dien-lanh-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_dienlanh", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thiet-bi-nha-bep-d:id-s:id.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_nhabep", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thiet-bi-theo-mua-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_theomua", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thiet-bi-suc-khoe-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_suckhoe", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-do-gia-dung-khac-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/gia_dung/thietbi_khac", { id, id_new, ...req.query });
    });
    //-------------------SỨC KHOẺ SẮC ĐẸP----------------
    server.get("/chinh-sua-tin-dang-my-pham-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/mypham", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-spa-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/spa", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-dung-cu-lam-dep-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/dungcu_lamdep", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thuc-pham-chuc-nang-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/thucpham_chucnang", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-vat-tu-y-te-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/suckhoe_sacdep/vattu_yte", { id_new, ...req.query });
    });
    //------------------------KHUYEN MAI--------------------------
    server.get("/chinh-sua-tin-dang-khuyen-mai-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/khuyen_mai/khuyen_mai", { id, id_new, ...req.query });
    });
    //------------------------THU CONG - MY NGHE------------------
    server.get("/chinh-sua-tin-dang-thiet-ke-phong-thuy-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thucong_mynghe/phongthuy", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-nghe-thuat-thu-cong-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thucong_mynghe/thucong", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-hoa-qua-tang-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thucong_mynghe/qua_tang", { id, id_new, ...req.query });
    });
    //----------------------------Thu cung-----------------
    server.get("/chinh-sua-tin-dang-thu-cung-ga-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/thu_cung/ga", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thu-cung-cho-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/thu_cung/cho", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thu-cung-meo-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/thu_cung/meo", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thu-cung-chim-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/thu_cung/chim", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thu-cung-do-an-phu-kien-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/thu_cung/phu_kien", { id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-thu-cung-khac-:id_new.html", (req, res) => {
        const { id_new } = req.params;
        return app.render(req, res, "/dang_tin/thu_cung/khac", { id_new, ...req.query });
    });
    //-----------------------VIEC LAM-----------------------------------
    server.get("/chinh-sua-tin-dang-tim-ung-vien-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/viec_lam/tim_ung_vien", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-tim-viec-lam-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/viec_lam/tim_viec_lam", { id, id_new, ...req.query });
    });
    //---------------------The thao--------------------------------------------
    server.get("/chinh-sua-tin-dang-the-thao-dung-cu-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/the_thao/dung_cu", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-the-thao-thoi-trang-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/the_thao/thoi_trang", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-the-thao-phu-kien-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/the_thao/phu_kien", { id, id_new, ...req.query });
    });
    //---------------------------DU LICH---------------------------------------
    server.get("/chinh-sua-tin-dang-du-lich-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/du_lich/du_lich", { id, id_new, ...req.query });
    });
    //---------------------------DO DUNG VAN PHONG-----------------------------
    server.get("/chinh-sua-tin-dang-do-dung-van-phong-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/van_phong/van_phong", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-cong-nong-nghiep-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/van_phong/cong_nong", { id, id_new, ...req.query });
    });
    //---------------------------THUC PHAM DO UONG-----------------------------
    server.get("/chinh-sua-tin-dang-thuc-pham-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thucpham_douong/thucpham", { id, id_new, ...req.query });
    });
    server.get("/chinh-sua-tin-dang-do-uong-d:id-s:id_new.html", (req, res) => {
        const { id, id_new } = req.params;
        return app.render(req, res, "/dang_tin/thucpham_douong/douong", { id, id_new, ...req.query });
    });
    //------------------------------END CHINH SUA------------------------------
    // =============================Ung vien sau dang nhap=====================================
    server.get("/ho-so-nguoi-ban-ca-nhan.html", (req, res) => {
        return app.render(req, res, "/personal_seller_profile", req.query);
    });
    server.get("/ho-so-gian-hang-cua-toi-trang-chu.html", (req, res) => {
        return app.render(req, res, "/hoso_gianhang", req.query);
    });
    server.get("/ho-so-gian-hang-cua-toi-dang-gia.html", (req, res) => {
        return app.render(req, res, "/hoso_gianhang_danhgia", req.query);
    });
    server.get("/quan-ly-khuyen-mai.html", (req, res) => {
        return app.render(req, res, "/m_quanlykhuyenmai", req.query);
    });
    server.get("/them-khuyen-mai.html", (req, res) => {
        return app.render(req, res, "/m_themkhuyenmai", req.query);
    });
    // ========quản lý tin bán==============



    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin.html", (req, res) => {
        return app.render(req, res, "/sau_dang_nhap/news_management", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-dang-dang.html", (req, res) => {
        return app.render(req, res, "/news_posting", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-da-ban.html", (req, res) => {
        return app.render(req, res, "/news_sold", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-da-het-hang.html", (req, res) => {
        return app.render(req, res, "/news_sold_out", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-dang-an.html", (req, res) => {
        return app.render(req, res, "/news_hidden", req.query);
    });


    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin.html", (req, res) => {
        return app.render(req, res, "/sau_dang_nhap/news_management", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-dang-dang.html", (req, res) => {
        return app.render(req, res, "/news_posting", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-da-ban.html", (req, res) => {
        return app.render(req, res, "/news_sold", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-da-het-hang.html", (req, res) => {
        return app.render(req, res, "/news_sold_out", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin/tin-dang-an.html", (req, res) => {
        return app.render(req, res, "/news_hidden", req.query);
    });

    server.get("/ho-so-quan-ly-tin-ban.html", (req, res) => {
        return app.render(req, res, "/sau_dang_nhap/news_management", req.query);
    });
    server.get("/ho-so-quan-ly-tin-dang-hoat-dong.html", (req, res) => {
        return app.render(req, res, "/news_posting", req.query);
    });
    server.get("/ho-so-quan-ly-tin-tin-da-ban.html", (req, res) => {
        return app.render(req, res, "/news_sold", req.query);
    });
    server.get("/ho-so-quan-ly-tin-het-hang.html", (req, res) => {
        return app.render(req, res, "/news_sold_out", req.query);
    });
    server.get("/ho-so-quan-ly-tin-da-an.html", (req, res) => {
        return app.render(req, res, "/news_hidden", req.query);
    });
    // =============quản lý tin mua============
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-mua.html", (req, res) => {
        return app.render(req, res, "/ql_tinmua_nb", req.query);
    });
    server.get('/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-mua/:url.html', (req, res) => {
        const { url } = req.params;
        return app.render(req, res, `/ql_tinmua_nb`, { url: url, ...req.query });
    });
    server.get("/ho-so-quan-ly-tin-mua.html", (req, res) => {
        return app.render(req, res, "/ql_tinmua_nb", req.query);
    });
    server.get('/ho-so-quan-ly-tin-mua/:url.html', (req, res) => {
        const { url } = req.params;
        return app.render(req, res, `/ql_tinmua_nb`, { url: url, ...req.query });
    });

    // =============nạp tiền vào tài khoản============
    server.get("/ho-so-nguoi-ban-ca-nhan/nap-tien-vao-tai-khoan.html", (req, res) => {
        return app.render(req, res, "/recharge_pers_seller_prof", req.query);
    });
    // =============lịch sử giao dịch============
    server.get("/ho-so-nguoi-ban-ca-nhan/lich-su-giao-dich.html", (req, res) => {
        return app.render(req, res, "/transaction_history", req.query);
    });
    // =============danh sách tin bán đã thích============
    server.get("/ho-so-nguoi-ban-ca-nhan/tin-da-yeu-thich.html", (req, res) => {
        return app.render(req, res, "/favorite_news", req.query);
    });
    server.get("/ho-so-gian-hang-tin-ban-da-yeu-thich.html", (req, res) => {
        return app.render(req, res, "/favorite_news", req.query);
    });
    // =============danh sách tin mua đã thích============
    server.get("/ho-so-nguoi-ban-ca-nhan/tin-mua-yeu-thich.html", (req, res) => {
        return app.render(req, res, "/favorite_news_buy", req.query);
    });
    server.get("/ho-so-gian-hang-tin-mua-da-yeu-thich.html", (req, res) => {
        return app.render(req, res, "/favorite_news_buy", req.query);
    });
    // =============danh sách tin tìm việc làm============
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-tim-viec-lam.html", (req, res) => {
        return app.render(req, res, "/ql_tin_timviec_canhan", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-tim-viec-lam/:url.html", (req, res) => {
        const { url } = req.params;
        return app.render(req, res, `/ql_tin_timviec_canhan`, { url: url, ...req.query });
    });
    // =============danh sách tin tìm ứng viên============
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-tim-ung-vien.html", (req, res) => {
        return app.render(req, res, "/ql_tin_timungvien_canhan", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-tim-ung-vien/:url.html", (req, res) => {
        const { url } = req.params;
        return app.render(req, res, `/ql_tin_timungvien_canhan`, { url: url, ...req.query });
    });
    // =============danh sách tin đang dự thầu============
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-dang-du-thau.html", (req, res) => {
        return app.render(req, res, "/ql_tin_duthau", req.query);
    });
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-dang-du-thau/:url.html", (req, res) => {
        const { url } = req.params;
        return app.render(req, res, `/ql_tin_duthau`, { url: url, ...req.query });
    });
    // =============danh sách tin đang ứng tuyển============
    server.get("/ho-so-nguoi-ban-ca-nhan/quan-ly-tin-dang-ung-tuyen.html", (req, res) => {
        return app.render(req, res, "/ql_tin_ungtuyen", req.query);
    });
    // =============ghim tin============
    server.get("/ghim-tin-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/ghim_tin", { id: id, ...req.query });
    });
    // =============đẩy tin============
    server.get("/day-tin-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/day_tin", { id: id, ...req.query });
    });
    // =============danh sách ứng viên đang ứng tuyển============
    server.get("/ung-vien-ung-tuyen.html", (req, res) => {
        return app.render(req, res, "/uv_ut_tmua", req.query);
    });
    // =============danh sách nhà thầu============
    server.get("/danh-sach-nha-thau.html", (req, res) => {
        const { new_id } = req.params;
        return app.render(req, res, "/ds_nhathau", { new_id, ...req.query });
    });
    // =============Chi tiết người bán============
    server.get("/ca-nhan/(:id)/(:name).html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/nguoiban_khachxem", { id: id, ...req.query })
    })
    server.get("/gian-hang/(:id)/(:name).html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/hoso_gianhang_khach", { id: id, ...req.query })
    })
    server.get("/danh-gia-gian-hang/(:id)/(:name).html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/hoso_gianhang_danhgiakhach", { id: id, ...req.query })
    })
    // =============quản lý đơn hàng bán============
    server.get("/quan-ly-don-hang-ban.html", (req, res) => {
        return app.render(req, res, "/ql_donhang_nguoiban", req.query);
    });
    server.get("/quan-ly-don-hang-dang-xu-ly.html", (req, res) => {
        return app.render(req, res, "/ql_dangxuly_nguoiban", req.query);
    });
    server.get("/quan-ly-don-hang-dang-giao.html", (req, res) => {
        return app.render(req, res, "/ql_danggiao_nguoiban", req.query);
    });
    server.get("/quan-ly-don-hang-da-giao.html", (req, res) => {
        return app.render(req, res, "/ql_dagiao_nguoiban", req.query);
    });
    server.get("/quan-ly-don-hang-da-huy.html", (req, res) => {
        return app.render(req, res, "/ql_donhang_dahuy", req.query);
    });
    server.get("/quan-ly-don-hang-hoan-tat.html", (req, res) => {
        return app.render(req, res, "/ql_donhang_hoantat", req.query);
    });
    // =============chi tiết đơn bán============
    server.get("/chi-tiet-cho-xac-nhan-nguoi-ban-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_choxacnhan_nguoiban", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-dang-xu-ly-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_dangxuly_nguoiban", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-hang-dang-giao-nguoi-ban-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_danggiao_nguoiban", { id: id, ...req.query });
    });
    server.get("/chi-tiet-da-giao-hang-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_dagiao_nguoiban", { id: id, ...req.query });
    });
    server.get("/chi-tiet-hoan-tat-don-hang-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_hoantat_donhang_nguoiban", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-huy-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_donhuy_nguoiban", { id: id, ...req.query });
    });
    // =============quản lý đơn hàng mua============
    server.get("/quan-ly-don-hang-mua.html", (req, res) => {
        return app.render(req, res, "/ql_donhang_nguoimua", req.query);
    });
    server.get("/quan-ly-don-hang-dang-xu-ly-nguoi-mua.html", (req, res) => {
        return app.render(req, res, "/ql_dangxuly_nguoimua", req.query);
    });
    server.get("/quan-ly-don-hang-dang-giao-nguoi-mua.html", (req, res) => {
        return app.render(req, res, "/ql_danggiao_nguoimua", req.query);
    });
    server.get("/quan-ly-don-hang-da-giao-nguoi-mua.html", (req, res) => {
        return app.render(req, res, "/ql_dagiao_nguoimua", req.query);
    });
    server.get("/quan-ly-don-hang-hoan-tat-nguoi-mua.html", (req, res) => {
        return app.render(req, res, "/ql_donhang_hoantat_nguoimua", req.query);
    });
    server.get("/quan-ly-don-hang-da-huy-nguoi-mua.html", (req, res) => {
        return app.render(req, res, "/ql_donhang_dahuy_nguoimua", req.query);
    });
    // =============chi tiết đơn mua============
    server.get("/chi-tiet-cho-xac-nhan-nguoi-mua-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_choxacnhan_nguoimua", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-mua-dang-xu-ly-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_dangxuly_nguoimua", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-mua-dang-giao-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_danggiao_nguoimua", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-mua-da-giao-hang-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_dagiao_nguoimua", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-mua-hoan-tat-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_hoantat_donhang_nguoimua", { id: id, ...req.query });
    });
    server.get("/chi-tiet-don-mua-huy-:id.html", (req, res) => {
        const { id } = req.params;
        return app.render(req, res, "/chitiet_donhuy_nguoimua", { id: id, ...req.query });
    });
    // =============giỏ hàng============
    server.get("/gio-hang.html", (req, res) => {
        return app.render(req, res, "/gio_hang", req.query);
    });
    // =============giỏ hàng============
    server.get("/gio-hang-san-pham-mua.html", (req, res) => {
        return app.render(req, res, "/ttoan_spmua_giohang", req.query);
    });
    server.get("/xac-thuc-san-pham-mua.html", (req, res) => {
        return app.render(req, res, "/ttoan_spmua_giohang", req.query);
    });

    // =============================End ung vien sau dang nhap=================================

    //------------------TRANG TIM KIEM----------------------------
    server.get("/tat-ca-tin-dang-ban.html", (req, res) => {
        return app.render(req, res, "/tim_kiem", req.query);
    });
    server.get("/s/(:sp)-thuoc-(:text)-e(:city)-h(:catid).html", (req, res) => {
        const { sp, city, catid } = req.params;
        return app.render(req, res, "/tim_kiem", { sp, city, catid, ...req.query });
    });
    server.get("/s/(:sp)-thuoc-(:text)-w(:catid).html", (req, res) => {
        const { sp, catid } = req.params;
        return app.render(req, res, "/tim_kiem", { sp, catid, ...req.query });
    });
    server.get("/s/(:sp)-tai-(:text)-c(:city).html", (req, res) => {
        const { sp, city } = req.params;
        return app.render(req, res, "/tim_kiem", { sp, city, ...req.query });
    });
    server.get("/viec-lam.html", (req, res) => {
        const catid = 120;
        return app.render(req, res, "/tim_kiem", { catid, ...req.query });
    });
    server.get("/viec-lam-(:text)-n(:nn)t(:city)d(:disid).html", (req, res) => {
        const { nn, city, disid } = req.params;
        return app.render(req, res, "/tim_kiem", { nn, city, disid, ...req.query });
    });

    server.get("/tim-viec-lam-tai-:text-w(:catid)c(:city).html", (req, res) => {
        const { catid, city } = req.params;
        return app.render(req, res, "/tim_kiem", { catid, city, ...req.query });
    });

    server.get("/tim-viec-lam-tai-(:text)-w(:catid)d(:disid)c(:city).html", (req, res) => {
        const { catid, city, disid } = req.params;
        return app.render(req, res, "/tim_kiem", { catid, city, disid, ...req.query });
    });

    server.get("/tim-viec-lam-(:text)-r(:tagsvl)t(:city)d(:disid).html", (req, res) => {
        const { tagsvl, city, disid } = req.params;
        return app.render(req, res, "/tim_kiem", { tagsvl, city, disid, ...req.query });
    });



    server.get("/mua-ban/rao-vat/:city/(:text).html", (req, res) => {
        const { city } = req.params;
        return app.render(req, res, "/tim_kiem", { city, ...req.query });
    });

    server.get('/mua-ban/rao-vat/:text-c(:city)-w(:catid).html', (req, res) => {
        const { city, catid } = req.params;
        return app.render(req, res, '/tim_kiem', { city, catid, ...req.query });
    });

    server.get('/mua-ban/(:catid)/(:text).html', (req, res) => {
        const catid = req.params.catid;
        return app.render(req, res, '/tim_kiem', { catid, ...req.query });
    });

    server.get("/mua-ban-rao-vat-tai-(:text)-d(:disid)c(:city).html", (req, res) => {
        const { city, disid } = req.params;
        return app.render(req, res, "/tim_kiem", { city, disid, ...req.query });
    });

    server.get("/mua-ban-:text-d(:disid)w(:catid)c(:city).html", (req, res) => {
        const { city, disid, catid } = req.params;
        return app.render(req, res, "/tim_kiem", { city, disid, catid, ...req.query });
    });

    server.get("/sm/:sp.html", (req, res) => {
        const { sp } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { sp, ...req.query });
    });
    server.get("/tin-mua-tai-(:text)-c(:city).html", (req, res) => {
        const { city } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { city, ...req.query });
    });

    server.get("/tin-mua-(:text)-thuoc-(:sp)-w(:catid).html", (req, res) => {
        const { sp, catid } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { sp, catid, ...req.query });
    });

    server.get("/tin-mua-:text-d(:catid).html", (req, res) => {
        const { catid } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { catid, ...req.query });
    });

    server.get("/tin-mua-(:text1)-tai-(:text2)-c(:city)w(:catid).html", (req, res) => {
        const { city, catid } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { catid, city, ...req.query });
    });

    server.get("/tin-mua-(:sp)-(:text1)-tai-(:text2)-c(:city)d(:catid).html", (req, res) => {
        const { sp, city, catid } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { sp, catid, city, ...req.query });
    });

    server.get("/tin-mua-(:text)-tai-(:sp)-c(:city).html", (req, res) => {
        const { sp, city } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { sp, city, ...req.query });
    });

    server.get("/ung-vien-(:text)-tai-(:text2)-c(:city)n(:nn).html", (req, res) => {
        const { nn, city } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { nn, city, ...req.query });
    });

    server.get("/ung-vien-(:text)-n(:nn).html", (req, res) => {
        const { nn } = req.params;
        return app.render(req, res, "/tim_kiem_mua", { nn, ...req.query });
    });

    server.get("/tim-ung-vien-d121.html", (req, res) => {
        const catid = 121;
        return app.render(req, res, "/tim_kiem_mua", { catid, ...req.query });
    });
    // =============chi tiết tin============
    server.get("/(:text)-ct(:id).html", (req, res) => {
        const { text, id } = req.params;
        return app.render(req, res, "/chitiet_tinmua", { text, id, ...req.query });
    });
    server.get("/(:text)-c(:id).html", (req, res) => {
        const { text, id } = req.params;
        return app.render(req, res, "/product_new_detail", { text, id, ...req.query });
    });
    // =============end chi tiết tin============

    server.get("/(:text1)-tai-(:text2)-c(:city)t(:tags)d(:disid).html", (req, res) => {
        const { tags, city, disid } = req.params;
        return app.render(req, res, "/tim_kiem", { tags, city, disid, ...req.query });
    });

    server.get("/(:text)-t(:tags).html", (req, res) => {
        const { tags } = req.params;
        return app.render(req, res, "/tim_kiem", { tags, ...req.query });
    });
    server.get('/test', (res, rep) => {
        return app.render(res, rep, '/test/[id]')
    })


    //------------------END TIM KIEM------------------------------

    server.all("*", (req, res) => {
        return handle(req, res);
    });
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });

})
