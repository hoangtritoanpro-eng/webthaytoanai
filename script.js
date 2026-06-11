// Danh sách các ứng dụng thực tế của bạn
// Danh sách các ứng dụng thực tế của bạn
const myApps = [
    {
        name: "Gemini OCR Studio",
        url: "https://chuyenpdf-thaytoanai.vercel.app/",
        icon: "fa-image"
    },
    {
        name: "TẠO ĐỀ THI",
        url: "https://taodetoan-bufh.vercel.app/",
        icon: "fa-file-lines"
    },
    {
        name: "GỌI TÊN",
        url: "https://goi-ten-mint.vercel.app/",
        icon: "fa-users"
    },
    {
        name: "TRỢ LÝ GVCN",
        url: "https://trolygvcna-i.vercel.app/",
        icon: "fa-user-tie" // Đổi icon thành người đeo cà vạt cho hợp với GVCN
    },
    {
        name: "THƯ VIỆN SỐ SKL",
        url: "https://thuvientoanskl.vercel.app/",
        icon: "fa-book" // Đổi icon thành quyển sách cho thư viện
    },
    {
        name: "CHẤM ĐIỂM TỰ ĐỘNG OCR",
        url: "https://toan-skl-ocr.vercel.app/",
        icon: "fa-check-double" // Đổi icon thành dấu tích chấm điểm
    }
];

const listContainer = document.getElementById('app-list');
const fullscreenWrapper = document.getElementById('fullscreen-wrapper');
const iframe = document.getElementById('app-frame');

// Tự động tạo danh sách ứng dụng ở cột trái
myApps.forEach(app => {
    const item = document.createElement('div');
    item.className = 'q-item';
    
    // Đổ dữ liệu Icon và Tên ứng dụng vào thẻ
    item.innerHTML = `<i class="fa-solid ${app.icon}"></i> <span>${app.name}</span>`;
    
    // Logic khi người dùng click vào thẻ ứng dụng
    item.onclick = () => {
        // Mở link trong iframe
        iframe.src = app.url;
        // Bỏ class 'hidden' để khung Fullscreen trượt ra
        fullscreenWrapper.classList.remove('hidden');
    };
    
    listContainer.appendChild(item);
});

// Hàm để đóng Fullscreen (Nút Quay lại)
function closeFullscreen() {
    // Thêm class 'hidden' để ẩn khung đi
    fullscreenWrapper.classList.add('hidden');
    
    // Xóa link trong iframe để đảm bảo không có video/âm thanh phát ngầm
    setTimeout(() => {
        iframe.src = "about:blank";
    }, 300);
}