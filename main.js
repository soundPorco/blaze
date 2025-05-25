// Swiperのjs
const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination",
        // type: "progressbar",
    },
    // 最後まで行くと最初の画像に戻ります
    loop: true,
    speed: 1500,
    // 自動スライドです
    autoplay: {
        delay: 3000, // 3秒ごとにスライド
        disableOnInteraction: false, // ユーザー操作後も自動再開
    },
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
