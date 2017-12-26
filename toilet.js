var ToiletScore = new Array(data.length-1); //スコアリストを準備、スコアが低いほどよいというコンセプト

// </code></pre>
// <p>チェックされた部分に対応するモジュールを動かす</p>

// 多目的が必要な場合
    for (var i = 0; i < data.length;i++){
    if (data[i][7] == false){
      data[i][2] += 1000  
      data[i][3] += 1000};}

// 温水便座が必要な場合
    for (var i = 0; i < data.length;i++){
    if (data[i][6] == false){
      data[i][2] += 1000  
      data[i][3] += 1000};}

 // 綺麗さの評価
    for (var i = 0; i < data.length;i++){
    ToiletScore[i] += data[i][2];}
