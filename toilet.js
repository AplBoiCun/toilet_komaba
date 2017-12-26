var ToiletScore = new Array(data.length-1); //スコアリストを準備、スコアが低いほどよいというコンセプト

// </code></pre>
// <p>チェックされた部分に対応するモジュールを動かす</p>

// 多目的が必要な場合
var flag1 = document.getElementById("").checked;
 if (flag1 == true){
    for (var i = 0; i < data.length;i++){
    if (data[i][7] == false){
      data[i][2] += 1000  
      data[i][3] += 1000};
    };
 }

// 温水便座が必要な場合
var flag2 = document.getElementById("").checked;
 if (flag2 == true){  
    for (var i = 0; i < data.length;i++){
    if (data[i][6] == false){
      data[i][2] += 1000  
      data[i][3] += 1000};
    };
 }

 // 綺麗さの評価
var flag3 = document.getElementById("").checked;
 if (flag3 == true){
    for (var i = 0; i < data.length;i++){
    ToiletScore[i] += data[i][2];
    };
 }
//混み具合の評価

var flag4 = document.getElementById("").checked;
 if (flag4 == true){
if(congestion == true){
  for(var i = 0; i < data.length; i++){
    ToiletScore[i] += data[i][3];}
  };
}

//現在地の取得
/*
location = [];  まだ参照先とかわからんので保留
*/

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
finalRank.sort((a, b){
    if (a.Score < b.Score) return -1;
    if (a.Score > b.Score) return 1;
    return 0;
});
