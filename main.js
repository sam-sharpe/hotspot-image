$("body").on("click", ".dot:not(.active)", function (e){
  e.preventDefault();

  const this_dot = e.target;

  const $this_dot = $(this_dot).closest(".dot");

  console.log("I'm working, NICE!");

$this_dot.addClass("active");
});

$("body").on("click", ".dot.active .close", function (e){
  e.preventDefault();

  const this_dot = e.target;

  const $this_dot = $(this_dot).closest(".dot");

  console.log("I'm working, NICE!");

$this_dot.removeClass("active");
});
