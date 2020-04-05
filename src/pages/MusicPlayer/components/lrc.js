

//将lrc变成一个歌词的数组  [{time:1.06, words:"难念的经"},  {time:3.95, words:"演唱：周华健"}]
function getLrcArray(e) {
  var lrcArray = e.split("*"); //分割字符串
  for (var i = 0; i < lrcArray.length; i++) {
      var lrcString = lrcArray[i]; //取出每句歌词的字符串
      lrcArray[i] = getLrcObject(lrcString);
  }
  //根据一句歌词字符串，得到一个歌词对象
  //[04:15.75]贪欢一刻偏教那女儿情长埋葬
  function getLrcObject(lrcString) {
      var parts = lrcString.split("]"); //分割成左右两边
      var content = parts[1]; //拿到歌词内容
      var timeString = parts[0].replace("[", ""); //得到时间的字符串
      parts = timeString.split(":"); //将时间部分按照冒号分割
      var minute = +parts[0];
      var second = +parts[1];
      return {
          time: minute * 60 + second,
          words: content  //歌词内容
      }
  }
  return lrcArray;
}


export default getLrcArray