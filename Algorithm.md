# トイレを選ぶアルゴリズム

- 現在地をGoogleMapsから取得

- 多目的が必要な場合
- 近くにある多目的を表示

- そうでない場合

  - データセットを入力
    data = [][] #綺麗さ、混み具合、boolean、
    
  - 現在地からの距離、混み具合、綺麗さ、暖房便座&ウォッシュレットの有無でトイレを評価
 
  - booleanの評価
  
    - boolean = True
     
     - 表示すべきデータ候補からFalseの部分を消去
      for i in range(length(data)):
        if data[i][booleanの位置] == False:
          del data[i]
  
  - 距離、混み具合、綺麗さの評価
    ToiletScore = []*length(data)
    
    - 混み具合と綺麗さについての評価
    
    - 距離で重み付け
      
  
