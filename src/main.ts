import { WebViewer } from "@rerun-io/web-viewer";


const rrd =
  new URLSearchParams(location.search).get("url") ||
  "../data/data.rrd";

const viewer = new WebViewer();

// get div id=rerun
const rerun = document.getElementById("rerun"); 

// console.log(rerun);

viewer.start(rrd, rerun, {
  width: "100%",
  height: "100%",
});