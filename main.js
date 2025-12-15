$(function() {

  $(".menu, .nav-menu").hover(
    function() {
      $(".nav-menu").stop(true, true).fadeIn(200);
    },
    function() {
      $(".nav-menu").stop(true, true).fadeOut(200);
    }
  );

  $(".btn").hover(
    function() { $(this).addClass("btn-hover"); },
    function() { $(this).removeClass("btn-hover"); }
  );

  const maxChars = 140;

  $(".postText").on("input", function() {
    const postLength = $(this).val().length;
    const remaining = Math.max(maxChars - postLength, 0);
    $(".characters").text(remaining);
    $(".wordcount").toggleClass("red", remaining === 0);
  }).focus();

  $(".newPost").submit(function(e) {
    e.preventDefault();

    const postText = $(".postText").val().trim();
    if (!postText) return;

    $(".posts .container").prepend(`
      <div class="post">
        <img class="avatar" src="https://content.codecademy.com/courses/jquery%20jfiddle%20test/feedster/profile-purple.svg" />
        <h3>Your Name</h3>
        <p>${postText}</p>
        <button class="btn">+1</button>
      </div>
    `);

    // Reset input
    $(".postText").val('');
    $(".characters").text(maxChars);
    $(".wordcount").removeClass("red");
  });

  $(".posts").on("click", ".btn", function() {
    let count = parseInt($(this).text()) || 0;
    $(this).text(`+${count + 1}`);
  });
});

