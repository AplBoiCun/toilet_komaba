# トイレを選ぶアルゴリズム

- データセットを入力
```
    data = [][] #id、名前、綺麗さ、混み具合、toiletLoc_x(float)、toiletLoc_y(float)、温水便座のboolean、多目的のboolean、   //トイレの属性

ToiletScore = []* length(data) //スコアリストを準備、スコアが低いほどよいというコンセプト

```

チェックされた部分に対応するモジュールを動かす

- 多目的が必要な場合  
```
  for i in range(length(data)):
    if data[i][7] == False:
      data[i][2] += 1000  
      data[i][3] += 1000
  //数をクソでかくすることでスコアを悪化させる
  //ただしこれだと現在位置の影響を消せないのでごく稀に非多目的のものが出てきてしまうかもしれない
```

- 温水便座が必要な場合  
```
  for i in range(length(data)):
    if data[i][6] == False:
      data[i][2] += 1000  
      data[i][3] += 1000
  
  //数をクソでかくすることでスコアを悪化させる
  //ただしこれだと現在位置の影響を消せないのでごく稀に非温水便座のものが出てきてしまうかもしれない
```
- 綺麗さの評価
```
  for i in range(length(data)):
    ToiletScore[i] += data[i][]2
```
- 混み具合の評価
```
  for i in range(length(data)):
    ToiletScore[i] += data[i][3]
```
- 現在地を選択肢形式で入力（正門、生協、13号館前広場、裏門（一信前））
```
  location = [x,y]  //現在地
```
 - 距離で重み付け
```
    distanceList = [] * length(data)
    for i in range(length(data)):
      distanceList[i] = sqrt((location[0]-data[i][4])^2 + (location[1]-data[i][5])^2) //平方和で距離算出
    MaxDist = max(distanceList)
    for i in range(length(data)):
      distanceList[i] = 5 * distanceList[i]/MaxDist    //距離を0〜5で正規化、近ければ小さい値になる
      round(小数点2桁くらい？)
```
- 点数から候補を出力
```
   finalRank = ToiletScore.sort()

   //ToiletScoreが低い順にデータを並び替えて出力、上位数件で大丈夫かな？
 ```
