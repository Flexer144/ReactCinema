export default function searchParam(param){
  const url = new URL(param)
  let videoParam = url.searchParams.get('v')
  
  if(videoParam === null || undefined){
    videoParam = param.split("be/")[1].split("?")[0];
  } else {
    videoParam = videoParam
  } 
  return videoParam;
}
// https://youtu.be/x1qvJL7NF9s?si=y-JyJRonBhIo7PEU
// videoParam = param.split("/embed/")[1].split("?")[0];