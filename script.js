let rotateX = 0;
let rotateY = 0;

// Поворот всей сцены
setTimeout(() => {
  rotateY -= 135;

  $(".cube").css(
    "transform",
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  );

}, 2000);


// 📌 После поворота — расставляем блоки как на картинке
setTimeout(() => {

  // уменьшаем угол
  rotateY -= 15;

  // центр
  $(".cube1").css(
    "transform",
    `rotateY(${rotateY}deg) translate3d(0px, -45px, 0px)`
  );

  // правее и ближе к камере
  $(".cube2").css(
    "transform",
    `rotateY(${rotateY}deg) translate3d(90px, 0px, 20px)`
  );

  // левее и ниже
  $(".cube3").css(
    "transform",
    `rotateY(${rotateY}deg) translate3d(-90px, 90px, -10px)`
  );

  // ниже (вторая ступень)
  $(".cube4").css(
    "transform",
    `rotateY(${rotateY}deg) translate3d(20px, 180px, 0px)`
  );

  // верхняя ступень (чуть назад)
  $(".cube5").css(
    "transform",
    `rotateY(${rotateY}deg) translate3d(0px, 90px, -10px)`
  );

  // верхний куб — самый ближний
  $(".cube6").css(
    "transform",
    `rotateY(${rotateY}deg) translate3d(0px, -180px, 40px)`
  );

  // дальний куб в глубине
  $(".cube7").css(
    "transform",
    `rotateY(${rotateY}deg) translate3d(0px, 0px, -60px)`
  );

}, 5000);
setTimeout(() => {


  rotateY -= 55;

  // центр
  $(".cube1").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(-82px, 10px, 0px)`
  );

  // правее и ближе к камере
  $(".cube2").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(140px, 90px, 20px)`
  );

  // левее и ниже
  $(".cube3").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(-90px, 90px, -10px)`
  );

  // ниже (вторая ступень)
  $(".cube4").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(20px, 180px, 0px)`
  );

  // верхняя ступень (чуть назад)
  $(".cube5").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(-105px, 90px, -10px)`
  );

  // верхний куб — самый ближний
  $(".cube6").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(35px, -70px, 40px)`
  );

  // дальний куб в глубине
  $(".cube7").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(10px, 0px, -60px)`
  );
  //верх
$(".cube8").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(-20px, 60px, -60px)`
  );
  //niz
  $(".cube9").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(-40px, 220px, -60px)`
  );
}, 8000);
setTimeout(() => {
rotateX += 35;

  rotateY += 45;

  // центр
  $(".cube1").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(25px, 35px, 0px)`
  );

  // правее и ближе к камере
  $(".cube2").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(95px,10px, 0px)`
  );

  // левее и ниже
  $(".cube3").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(65px, 65px, 0px)`
  );

  // ниже (вторая ступень)
  $(".cube4").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(85px, 30px, 0px)`
  );

  // верхняя ступень (чуть назад)
  $(".cube5").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(310px, 165px, 0px)`
  );

  // верхний куб — самый ближний
  $(".cube6").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(315px, 15px, 0px)`
  );

  // дальний куб в глубине
  $(".cube7").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(385px, 45px, 0px)`
  );
  //верх
$(".cube8").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(28px, 32px, 0px)`
  );
  //niz
  $(".cube9").css(
    "transform",
    `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(185px, 45px, 0px)`
  );
}, 10000);
setTimeout(() => {

  // Центральный куб
  $(".cube1").css("transform", "translateZ(0px)");

  // Вверх
  $(".cube2").css("transform", "translateZ(0px)");

  // Вниз
  $(".cube3").css("transform", "translateZ(0px)");

  // Влево
  $(".cube4").css("transform", "translateZ(0px)");

  // Вправо
  $(".cube5").css("transform", "translateZ(0px)");

  // Вперёд (по Z)
  $(".cube6").css("transform", "translateZ(80px)");

  // Назад (по Z)
  $(".cube7").css("transform", "translateZ(-80px)");
  $(".cube8").css("transform", "translateZ(1800px)");
  $(".cube9").css("transform", "translateZ(1800px)");

}, 12000);