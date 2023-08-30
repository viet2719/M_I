const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // Điều hướng router sử dụng Express
  //Chi tiết ngành nghề / việc làm
  server.get("/(:title)-p(:id).html", (req, res) => {
    const { id } = req.params;
    return app.render(req, res, `/chi_tiet_nganh_nghe`, { id, ...req.query });
  });
  // Tìm kiếm theo tỉnh thành
  server.get("/tim-viec-tai-(:title)-c0v(:id)", (req, res) => {
    const { id } = req.params;
    return app.render(req, res, `/tim_kiem_tinh_thanh`, { id, ...req.query });
  });
  // Mặc định, sử dụng Next.js để xử lý tất cả các request còn lại
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3005, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3005');
  });
});
