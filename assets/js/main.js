const mouseFollower = document.querySelector("#mouseFollower");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseFollower.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});
