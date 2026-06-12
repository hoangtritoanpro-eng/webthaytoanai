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
        isExternal: true  // Đánh dấu mở link ở Tab mới bằng thẻ <a>
    },
    {
        name: "TẠO INFOGRAPHIC BÀI HỌC",
        url: "https://taoanhinfothaytoanai.vercel.app/",
        icon: "fa-images"
    }
];

const listContainer = document.getElementById('app-list');
const fullscreenWrapper = document.getElementById('fullscreen-wrapper');
const iframe = document.getElementById('app-frame');

// Tự động tạo danh sách ứng dụng ở cột trái
myApps.forEach(app => {
    // Nếu là link ngoài (isExternal) thì tạo thẻ <a>, ngược lại tạo thẻ <div>
    const item = document.createElement(app.isExternal ? 'a' : 'div');
    item.className = 'q-item';
    
    // Đổ dữ liệu Icon và Tên ứng dụng vào thẻ
    item.innerHTML = `<i class="fa-solid ${app.icon}"></i> <span>${app.name}</span>`;
    
    if (app.isExternal) {
        // Thiết lập thuộc tính cho thẻ <a> để mở Tab mới an toàn tuyệt đối
        item.href = app.url;
        item.target = '_blank';
        item.rel = 'noopener noreferrer';
        
        // CSS để giữ nguyên giao diện đẹp của thầy, không bị gạch chân hay đổi màu link
        item.style.textDecoration = 'none'; 
        item.style.color = 'inherit';       
    } else {
        // Logic cho các nút mở trong khung iframe trượt (các nút bình thường)
        item.onclick = () => {
            iframe.src = app.url;
            fullscreenWrapper.classList.remove('hidden');
        };
    }
    
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
