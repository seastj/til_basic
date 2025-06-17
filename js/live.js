window.addEventListener("load", function () {
  const liveApiData = [
    {
      uid: 1,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      배경: "라이브",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 2,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 3,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 4,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 5,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 6,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 7,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 8,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 9,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 10,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 11,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
    {
      uid: 12,
      이미지주소:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      라이브: "방송예정",
      제목: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브특가",
      장소: "예스24스테이지 1관",
      날짜: "06월 16일 (월)",
      시간: "18:00",
      상세이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      상세정보: "[기획전] 푸꾸옥 자유여행 혜택 보기",
    },
  ];

  let html = ``;

  html = ``;

  for (let i = 0; i < liveApiData.length; i++) {
    // 임시 태그
    let tag = `
    <div class="swiper-slide">
                    <a href="#" class="live_slide_item">
                      <div class="live_image">
                        <img
                          src="${liveApiData[i].이미지주소}"
                          alt="${liveApiData[i].배경}"
                        />
                      </div>
                      <div class="live_info">
                        <div class="live_state">
                          <span class="live_wait">${liveApiData[i].라이브}</span>
                        </div>
                        <p class="live_item_title">${liveApiData[i].제목}
                        </p>
                        <div class="live_day">
                          <div class="live_day_date">${liveApiData[i].날짜}</div>
                          <div class="live_day_time">${liveApiData[i].시간}</div>
                        </div>
                        <div class="live_detail">
                          <div class="live_detail_image">
                            <img
                              src="${liveApiData[i].상세이미지}"
                              alt="${liveApiData[i].상세정보}"
                            />
                          </div>
                          <p class="live_detail_title">
                            ${liveApiData[i].상세정보}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
    `;

    html = html + tag;
  }

  const livePos = this.document.querySelector(".sw_live .swiper-wrapper");
  livePos.innerHTML = html;

  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
