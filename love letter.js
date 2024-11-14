$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});
$(document).ready(function () {
  // Targeting the .valentines container
  var valentinesContainer = $(".valentines");

  // Click event on the valentines container to trigger redirection
  valentinesContainer.click(function () {
      // Redirect to another page (make sure the path is correct)
      window.location.href = "pink-flowers.html";  // Change "anotherPage.html" to your target page
  });
});
