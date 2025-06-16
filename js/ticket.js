window.addEventListener("load", function () {
  const ticketApiData = [];
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 7,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 20 },
      1280: { slidesPerView: 4, spaceBetween: 20 },
    },
  });
});
