export function NodeMain(){
  const $main = document.createElement("main");
  $main.id = "main";
  $main.classList.add("grid-fluid");
  return $main;
}
export function NodePagination(){
  const $nodePagination = document.createElement("div");
 $nodePagination.id = "pagination";
 $nodePagination.classList.add("footer");
  return $nodePagination;
}
export function NodeShowCase(){
  const $nodeShowCase = document.createElement("div");
 $nodeShowCase.id = "showcase";
 $nodeShowCase.classList.add("showcase");
  return $nodeShowCase;
}
