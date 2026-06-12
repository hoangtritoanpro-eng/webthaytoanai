// Danh sách ĐẦY ĐỦ các ứng dụng của bạn
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
        url: "LINK_TOAN_THCS_CUA_BAN_O_DAY", 
        icon: "fa-square-root-variable"
    },
    {
        name: "XƯỞNG SẢN XUẤT VIDEO",
        url: "LINK_VIDEO_CUA_BAN_O_DAY", 
        icon: "fa-video",
        openInNewTab: true // 👈 Lệnh đặc biệt: Mở sang Tab mới để tránh lỗi chặn Iframe
    },
    {
        name: "TẠO INFOGRAPHIC BÀI HỌC",
        url: "https://taoanhinfothaytoanai.vercel.app/",
        icon: "fa-palette"
    }
];

// Trỏ tới Container dạng Lưới (Grid) mới
const gridContainer = document.getElementById('app-grid');
const fullscreenWrapper = document.getElementById('fullscreen-wrapper');
const iframe = document.getElementById('app-frame');

// Tự động tạo danh sách thẻ ứng dụng
myApps.forEach(app => {
    const item = document.createElement('div');
    item.className = 'q-item';
    
    // Icon và Tên ứng dụng
    item.innerHTML = `<i class="fa-solid ${app.icon}"></i> <span>${app.name}</span>`;
    
    item.onclick = () => {
        // Kiểm tra xem ứng dụng có yêu cầu mở Tab mới không
        if (app.openInNewTab) {
            window.open(app.url, '_blank'); // Mở Tab mới cực mượt
        } else {
            // Nếu không, mở bình thường trong khung Fullscreen
            iframe.src = app.url;
            fullscreenWrapper.classList.remove('hidden');
        }
    };
    
    gridContainer.appendChild(item);
});

// Nút Quay lại
function closeFullscreen() {
    fullscreenWrapper.classList.add('hidden');
    setTimeout(() => {
        iframe.src = "about:blank";
    }, 300);
}
