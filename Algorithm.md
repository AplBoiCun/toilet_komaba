# トイレを選ぶアルゴリズム

- 現在地を選択肢形式で入力（正門、生協、13号館前広場、裏門（一信前））
  location = [x,y]  //現在地
  
- 重視する項目
   - 混み具合
   - 綺麗さ
   - 両方

- 多目的が必要な場合
- 近くにある多目的を表示

- そうでない場合

  - データセットを入力
    data = [][] #綺麗さ、混み具合、boolean、toiletLoc_x(float)、toiletLoc_y(float)   //トイレの属性
    
   - 現在地からの距離、混み具合、綺麗さ、暖房便座&ウォッシュレットの有無でトイレを評価

  - booleanの評価
    - boolean = True
     - 表示すべきデータ候補からFalseの部分を消去
      for i in range(length(data)):
        if data[i][booleanの位置] == False:
          del data[i]
  
  - 距離、混み具合、綺麗さの評価
    ToiletScore = []*length(data) //スコアリストを準備
    
  - 混み具合と綺麗さについての評価

  - 距離で重み付け
      distanceList = []*length(data)
      for i in range(length(data)):
        distanceList[i] = sqrt((location[0]-data[i][toiletLoc_x])^2 + (location[]-data[i][toiletLoc_y])^2) //平方和で距離算出
      MaxDist = max(distanceList)
      for i in range(length(data)):
        distanceList[i] = distanceList[i]/MaxDist = max(distanceList)   //距離を正規化
        round(小数点2桁くらい？)
