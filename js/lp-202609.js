/* Keep the original video available without loading a player before interaction. */
(function () {
  'use strict';
  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-video-id]');
    if (!button) return;
    var frame = document.createElement('iframe');
    frame.src = 'https://www.youtube.com/embed/' + button.dataset.videoId + '?si=I7tA_eYQ6BySw08W&autoplay=1';
    frame.title = 'ホリスペ！ Waka出演動画';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    button.parentNode.appendChild(frame);
    button.hidden = true;
  });
})();
