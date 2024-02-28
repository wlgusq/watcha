  // 변수 선언
  let big = document.querySelector('#big_img');
  let sma = document.querySelectorAll('.small');

  for(let i =0; i<sma.length; i++){
    console.log(sma[i]);
    sma[i].addEventListener('click', function(){
      // window.alert('아아아');
      let src = this.src;
      // console.log(src);

      big.setAttribute('src',src);  
    });
  }

  $(document).ready(function(){

    // main 슬라이드
    let v_slide_img = $('.main > div'); //슬라이드 이미지
    
    let i = $('.visual .ctrl_btn li').index(); //0값

    // 2. 움직이는 함수 = 서서히 사라지고 나타나는 효과
    function moving(){
     // console.log('시간함수호출');
     v_slide_img.fadeOut(); //보이는 이미지 숨기고 

     if(i==4){ //만약에 마지막 이미지라면
      i=0; //처음이미지가 보이게하고
     }else{ //그렇지 않으면
      i++; //다음 이미지가 보이도록 한다.
    }
     v_slide_img.eq(i).stop().fadeIn(); //해당 이미지가 보이게 한다.
    }

    function moving2(){
      
      v_slide_img.fadeOut();
      if(i==0){
        i=4;
      }else{
        i--;
      }
      v_slide_img.eq(i).stop().fadeIn();
    }

    // 3. 매 5초마다 함수를 반복호출하여 슬라이드가 변하게 한다.
    let Timer = setInterval(moving,4000);




// 인기 애니 추천
let j = 0;

const l_btn = $('.prev');
const r_btn = $('.next');

r_btn.click(function(){
  if (j == 3) {
    j = 0;
  } else {
    j++;
  }
  console.log(j);
  
  $('.bath ul').animate({
    'left': -(370 * j)
  }, 500);
});

l_btn.click(function(){
  if (j == 0) {
    j = 3;
  } else {
    j--;
  }
  console.log(j);
  
  $('.bath ul').animate({
    'left': -(370 * j)
  }, 500);
});




// 줄거리 보기
let btn = $('.tab > ul > li > button');

btn.click(function(){
      $(this).next().slideDown().parent().siblings().find('div').slideUp();
      $(this).addClass('hover').parent().siblings().find('button').removeClass('hover');

    return false;
  });  






    // 아코디언
    const mnu = $('.aco > ul > li > a');

    mnu.click(function(){
      $('.aco_inner').slideUp(); //전체 올리기
      $(this).next().slideDown(); //선택 시 다음 내용 ㄴ리기

      $(this).slideDown();
    });

    $('.go').click(function(){
      alert('참여방법 페이지로 이동');
    });


  // 스크롤 시 헤더 조절
  $(window).mousewheel(function(e,delta){
    if(delta>0){ //delta값이 0보다 크면
      console.log('위');
      $('header').addClass('act'); //act 적용
    }else if(delta<0){ //작으면
      console.log('아래');
      $('header').removeClass('act'); //act 해제
    }
  });






});