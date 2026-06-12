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
        url: "https://toanthcs-ten.vercel.app/",
        icon: "fa-square-root-variable"
    },
    {
        name: "XƯỞNG SẢN XUẤT VIDEO",
        url: "https://xuong-video-ai-skyline-thaytoanai.streamlit.app/", 
        icon: "fa-video",
        openInNewTab: true // 👈 Đánh dấu ứng dụng này cần mở Tab mới
    },
    {
        name: "TẠO INFOGRAPHIC BÀI HỌC",
        url: "https://taoanhinfothaytoanai.vercel.app/", 
        icon: "fa-palette"
    }
];

const gridContainer = document.getElementById('app-grid');
const fullscreenWrapper = document.getElementById('fullscreen-wrapper');
const iframe = document.getElementById('app-frame');

// Tự động tạo danh sách thẻ ứng dụng
myApps.forEach(app => {
    // CẢI TIẾN LỚN: Nếu có lệnh openInNewTab, ta tạo thẻ Link (<a>). Nếu không, tạo thẻ khối (<div>)
    const item = document.createElement(app.openInNewTab ? 'a' : 'div');
    item.className = 'q-item';
    
    item.innerHTML = `<i class="fa-solid ${app.icon}"></i> <span>${app.name}</span>`;
    
    if (app.openInNewTab) {
        // Thiết lập chuẩn cho thẻ Link để không bao giờ bị trình duyệt chặn
        item.href = app.url;
        item.target = "_blank"; // Mở tab mới
        item.style.textDecoration = "none"; // Bỏ đường gạch chân xấu xí của link
        item.style.color = "var(--blue-700)"; // Giữ nguyên màu chữ gốc
    } else {
        // Đối với các app còn lại, vẫn mở trong khung phóng to
        item.onclick = () => {
            iframe.src = app.url;
            fullscreenWrapper.classList.remove('hidden');
        };
    }
    
    gridContainer.appendChild(item);
});

// Nút Quay lại cho các app mở Fullscreen
function closeFullscreen() {
    fullscreenWrapper.classList.add('hidden');
    setTimeout(() => {
        iframe.src = "about:blank";
    }, 300);
}
