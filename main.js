 'use strict';
 var body = document.querySelector('body'),
     section = document.querySelectorAll('section'),
     main = document.querySelector('main');
 body.addEventListener('click', function () {
     //scroll to's
     if (event.target.id === 'aboutme-anchor') {
         scrollToFunc(section[0]);
     }
     if (event.target.id === 'skills-anchor') {
         scrollToFunc(section[1]);
     }
     if (event.target.id === 'projects-anchor') {
         scrollToFunc(section[2]);
     }
     if (event.target.id === 'contact-anchor') {
         scrollToFunc(section[3]);
     }
 });
 var cancel = false;

 function scrollToFunc(scrollTo) {
     var targetY = scrollTo.offsetTop,
         currentY = main.scrollTop,
         mainHeight = main.offsetHeight,
         funcCancel = cancel,
         speed = 5;
     //check if funcCancel is still the same as cancel, if not end intervals.
     //cancel will change state when a new instance of this function is invoked. 
     //the function returns !cancel before it starts the intervals

     if (currentY - 16 > targetY) {
         var scrollAnimation = setInterval(function () {
             if (funcCancel === cancel || main.scrollTop <= targetY) {
                 clearInterval(scrollAnimation);
             } else {
                 main.scrollTop -= speed;
             }
         }, 1);
     } else if (currentY + 16 < targetY) {
         var scrollAnimation = setInterval(function () {
             if (funcCancel === cancel || main.scrollTop >= targetY || main.scrollTop >= main.scrollHeight -
                 main.offsetHeight) {
                 clearInterval(scrollAnimation);
             } else {
                 main.scrollTop += speed;
             }
         }, 1);
     }


     return cancel = !cancel;
 }

 section.forEach(function (section) {
     section.style.opacity = '0';
 });
 setTimeout(function () {

     section.forEach(function (section) {
         section.style.opacity = '1';
     });
 }, 0);