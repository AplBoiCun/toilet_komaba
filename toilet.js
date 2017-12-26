function dataRanking() {

  var data = [
  // id, name, clean, congestion, laitude, longitude, optional_functions, multi_purpose_button
    [1,  "1号館", 4, 4, 35.659845, 139.684855, true, true],
    [2,  "5号館", 2, 2, 35.661071, 139.684437, false, true],
    [3,  "7号館", 4, 2, 35.660753, 139.684506, false, false],
    [4,  "10号館", 2, 2, 35.660633, 139.684951, true, true],
    [5,  "11号館", 5, 2, 35.660293, 139.684216, false, false],
    [6,  "12号館", 5, 2, 35.660293, 139.68354 , false, false],
    [7,  "13号館", 5, 2, 35.660516, 139.683712, false, false],
    [8,  "KOMCEE West 2F", 1, 2, 35.660378, 139.68596, false, false],
    [9,  "KOMCEE West 地下", 1, 3, 35.660378, 139.68596, true, true],
    [10, "駒場国際研究棟", 2, 2, 35.660947, 139.683648, true, true],
    [11, "KOMCEE East 地下", 2, 2, 35.660727, 139.68596, true, false],
    [12, "KOMCEE East 2F", 2, 3, 35.660727, 139.68596, true, false],
    [13, "食堂 正面", 4, 4, 35.659938, 139.68647, true, false],
    [14, "食堂 裏", 3, 4, 35.659637, 139.686378, true, false],
    [15, "イタトマ", 3, 4, 35.659437, 139.686443, true, false],
    [16, "図書館", 3, 5, 35.659387, 139.686893, true, true],
    [17, "屋外トイレ", 5, 1, 35.660472, 139.684468, false, true],
    [18, "JK棟", 3, 4, 35.659034, 139.684061, false, true],
    [19, "アドミニ棟", 1, 3, 35.659165, 139.685289, true, true],
    [20, "キャンプラ", 4, 2, 35.660298, 139.687349, false, false],
    [21, "体育館", 4, 2, 35.660642, 139.687215, false, true],
    [22, "学生会館", 3, 2, 35.661056, 139.686512, true, false],
    [23, "コミプラ", 3, 1, 35.660032, 139.687156, true, true],
    [24, "コミプラ 2F", 3, 1, 35.660032, 139.687156, true, false],
    [25, "正門", null, null, 35.659165, 139.684618, null, null],
    [26, "生協", null, null, 35.660028, 139.68714, null, null],
    [27, "13号館前広場", null, null, 35.660232, 139.683851, null, null],
    [28, "裏門", null, null, 35.661392, 139.687655, null, null]
  ];

// 多目的が必要な場合
var flag1 = document.getElementById("box1").checked;
 if (flag1 == true){
    for (var i = 0; i < data.length;i++){
    if (data[i][7] == false){
      data[i][2] += 1000  
      data[i][3] += 1000};
    };
 }

// 温水便座が必要な場合
var flag2 = document.getElementById("box2").checked;
 if (flag2 == true){
    for (var i = 0; i < data.length;i++){
    if (data[i][6] == false){
      data[i][2] += 1000  
      data[i][3] += 1000};
    };
 }

 // 綺麗さの評価
var flag3 = document.getElementById("box3").checked;
 if (flag3 == true){
    for (var i = 0; i < data.length;i++){
    ToiletScore[i] += data[i][2];
    };
 }
//混み具合の評価

var flag4 = document.getElementById("box4").checked;
 if (flag4 == true){
if(congestion == true){
  for(var i = 0; i < data.length; i++){
    ToiletScore[i] += data[i][3];}
  };
}

  //現在地の取得

  location = [35.659165, 139.684618]; // 一旦。


//距離で重み付け
var distanceList = new Array(data.length - 1);
for(var i = 0; i < data.length; i++){
  distanceList[i] = Math.sqrt((location[0]-data[i][4])^2 + (location[1]-data[i][5])^2);
}
//それぞれの距離を配列に格納
MaxDist = Math.max.apply(null, distanceList);
//距離の最大値
for(var i = 0; i < data.length; i++){
  distanceList[i] = (5*distanceList[i])/MaxDist;  //距離を0-5で正規化、近ければ小さい値になる
  ToiletScore[i] += distanceList[i];  //正規化した距離を点数として総スコアに加算
}

  //スコアを小さい順にソート

  //連想配列でスコアと場所を紐付け
  var finalRank = [
    {name:"1号館", Score: ToiletScore[0]},
    {name:"5号館", Score: ToiletScore[1]},
    {name:"7号館", Score: ToiletScore[2]},
    {name:"10号館", Score: ToiletScore[3]},
    {name:"11号館", Score: ToiletScore[4]},
    {name:"12号館", Score: ToiletScore[5]},
    {name:"13号館", Score: ToiletScore[6]},
    {name:"KOMCEE West 2F", Score: ToiletScore[7]},
    {name:"KOMCEE West 地下", Score: ToiletScore[8]},
    {name:"駒場国際研究棟", Score: ToiletScore[9]},
    {name:"KOMCEE East 地下", Score: ToiletScore[10]},
    {name:"KOMCEE East 2F", Score: ToiletScore[11]},
    {name:"食堂正面", Score: ToiletScore[12]},
    {name:"食堂裏", Score: ToiletScore[13]},
    {name:"イタトマ", Score: ToiletScore[14]},
    {name:"図書館", Score: ToiletScore[15]},
    {name:"屋外トイレ", Score: ToiletScore[16]},
    {name:"JK棟", Score: ToiletScore[17]},
    {name:"アドミニ棟", Score: ToiletScore[18]},
    {name:"キャンプラ", Score: ToiletScore[19]},
    {name:"体育館", Score: ToiletScore[20]},
    {name:"学生会館", Score: ToiletScore[21]},
    {name:"コミプラ 1F", Score: ToiletScore[22]},
    {name:"コミプラ 2F", Score: ToiletScore[23]}
  ];

  //Scoreの順番でソート
  finalRank.sort(function (a, b){
      if (a.Score < b.Score) return -1;
      if (a.Score > b.Score) return 1;
      return 0;
  });

  document.write("<p>" + "第一位は。。。" + finalRank[0].name + "!" + "</p>");
  document.write("<p>" + finalRank[1].name + "</p>");
  document.write("<p>" + finalRank[2].name + "</p>");

};
