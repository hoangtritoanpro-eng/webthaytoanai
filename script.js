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
        icon: "fa-user-tie" 
    },
    {
        name: "THƯ VIỆN SỐ SKL",
        url: "https://thuvientoanskl.vercel.app/",
        icon: "fa-book" 
    },
    {
        name: "CHẤM ĐIỂM TỰ ĐỘNG OCR",
        url: "https://toan-skl-ocr.vercel.app/",
        icon: "fa-check-double" 
    },
    {
        name: "TOÁN THCS",
        url: "https://toanthcs-ten.vercel.app/",
        icon: "fa-check-double" 
    },
    {
        name: "XƯỞNG SẢN XUẤT VIDEO",
        url: "https://xuong-video-ai-skyline-thaytoanai.streamlit.app/",
        icon: "fa-video",
        isExternal: true  // Đánh dấu mở link ở Tab mới
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
        // KIỂM TRA ĐIỀU KIỆN
        if (app.isExternal) {
            // Nếu có cờ isExternal: true -> Mở ứng dụng sang một Tab/Cửa sổ mới
            window.open(app.url, '_blank', 'noopener,noreferrer');
        } else {
            // Nếu là các ứng dụng bình thường -> Mở link trong iframe
            iframe.src = app.url;
            // Bỏ class 'hidden' để khung Fullscreen trượt ra
            fullscreenWrapper.classList.remove('hidden');
        }
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
