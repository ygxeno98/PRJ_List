$('.btnMenu').click(function(){
    $(this).toggleClass('active');
    $('.sc_gnb').toggleClass('active');
    $('body').toggleClass('active');
});

$('.question').click(function(){
    $(this).next().slideToggle();
    $(this).next().siblings('.answer').slideUp();
});	


const $wrap = $('.vertical_banner');
const $list = $('.vertical_banner .list');
let wrapHeight; // 배너 컨테이너의 높이
let listHeight; // 배너 리스트의 전체 높이

// 배너 리스트 복제 후 추가
let $clone = $list.clone();
$wrap.append($clone);

// 배너 애니메이션 처리하는 함수
function verticalBanner() {
    // 배너 애니메이션 초기화
    if (wrapHeight != '') {
        $wrap.find('.list').css({
            'animation': 'none'
        });
        $wrap.find('.list').slice(2).remove();
    }

    // 배너 컨테이너와 리스트 아이템의 현재 높이 가져오기
    wrapHeight = $wrap.innerHeight();
    listHeight = $list.innerHeight();
    const speed = $list.find('tr').innerHeight() / 2;

    // 내용이 컨테이너보다 작은 경우 무한 반복을 만들기 위해 리스트를 복제하여 추가
    if (listHeight < wrapHeight) {
        const listCount = Math.ceil(wrapHeight * 2 / listHeight);
        for (let i = 2; i < listCount; i++) {
            $clone = $clone.clone();
            $wrap.append($clone);
        }
    }

    // 수직 롤링 효과를 위해 모든 리스트 아이템에 애니메이션 적용
    $wrap.find('.list').css({
        'animation': `${listHeight / speed}s linear infinite verticalRolling`
    });
}

// 초기 배너 설정
verticalBanner();

// 창 크기에 따른 현재 디바이스 유형을 반환하는 함수
function getWindow() {
    return window.innerWidth > 1280 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
}

// 반응형 처리 설정
let oldWindow = getWindow();
$(window).on('resize', function () {
    const newWindow = getWindow();
    // 디바이스 유형이 변경된 경우에만 배너 롤링 재설정
    if (newWindow !== oldWindow) {
        oldWindow = newWindow;
        verticalBanner();
    }
});

// 마우스 이벤트 처리: 배너 롤링 일시 정지 및 재생
$wrap.on({
    mouseenter: function () {
        $wrap.find('.list').css('animation-play-state', 'paused');
    },
    mouseleave: function () {
        $wrap.find('.list').css('animation-play-state', 'running');
    }
});

const $wrap2 = $('.vertical_banner2');
const $list2 = $('.vertical_banner2 .list');
let wrapHeight2; // 배너 컨테이너의 높이
let listHeight2; // 배너 리스트의 전체 높이

// 배너 리스트 복제 후 추가
let $clone2 = $list2.clone();
$wrap2.append($clone2);

// 배너 애니메이션 처리하는 함수
function verticalBanner2() {
    // 배너 애니메이션 초기화
    if (wrapHeight2 != '') {
        $wrap2.find('.list').css({
            'animation': 'none'
        });
        $wrap2.find('.list').slice(2).remove();
    }

    // 배너 컨테이너와 리스트 아이템의 현재 높이 가져오기
    wrapHeight2 = $wrap2.innerHeight();
    listHeight2 = $list2.innerHeight();
    const speed2 = $list2.find('tr').innerHeight() / 2;

    // 내용이 컨테이너보다 작은 경우 무한 반복을 만들기 위해 리스트를 복제하여 추가
    if (listHeight2 < wrapHeight2) {
        const listCount2 = Math.ceil(wrapHeight2 * 2 / listHeight2);
        for (let i = 2; i < listCount2; i++) {
            $clone2 = $clone2.clone();
            $wrap2.append($clone2);
        }
    }

    // 수직 롤링 효과를 위해 모든 리스트 아이템에 애니메이션 적용
    $wrap2.find('.list').css({
        'animation': `${listHeight2 / speed2}s linear infinite verticalRolling`
    });
}

// 초기 배너 설정
verticalBanner2();

// 창 크기에 따른 현재 디바이스 유형을 반환하는 함수
function getWindow2() {
    return window.innerWidth > 1280 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
}

// 반응형 처리 설정
let oldWindow2 = getWindow2();
$(window).on('resize', function () {
    const newWindow2 = getWindow2();
    // 디바이스 유형이 변경된 경우에만 배너 롤링 재설정
    if (newWindow2 !== oldWindow2) {
        oldWindow2 = newWindow2;
        verticalBanner2();
    }
});

// 마우스 이벤트 처리: 배너 롤링 일시 정지 및 재생
$wrap2.on({
    mouseenter: function () {
        $wrap2.find('.list').css('animation-play-state', 'paused');
    },
    mouseleave: function () {
        $wrap2.find('.list').css('animation-play-state', 'running');
    }
});