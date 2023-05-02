export const FORM_DATA = {
  '西工場共通': {
    '集塵機': [
      'メイン集塵機',
      '横架材用集塵機',
      'モルダー集塵機',
      '幅はぎＢＦＱ'
    ],
    'コンプレッサー': [
      'No. 1',
      'No. 2',
      'No. 3',
      'No. 4'
    ]
  },
  '横架材グループ': {
    'ライン': [
      'クロスカット',
      '中間加工機 MPS - 15A',
      '中間加工機 MPS - 15B',
      'スリット加工機 MPS - 45A',
      'スリット加工機 MPS - 45B',
      '端部加工機 MPS - 25A',
      '端部加工機 MPS - 25B',
      'ピン打ち機 D1',
      '特殊加工機 MPS - 55',
      '横架材投入機',
      '排出口',
      'その他'
    ],
    '手加工': [
      '電動工具(手加工)',
      '電動工具(メタル)',
      'ホイスト(手加工)',
      'ホイスト(メタル)',
      'クロスカット',
      '短材加工機',
      'その他'
    ],
    'ピッキング': [
      'ラックマスター',
      '積込装置',
      'その他'
    ]
  },
  '柱材グループ': {
    'ライン': [
      '投入機',
      'クロスカット',
      '木口加工機',
      '面加工機',
      'シャクリ加工機',
      '排出口',
      'その他'
    ],
    '束加工機': [
      'クロスカット',
      '木口加工機',
      'その他'
    ],
    '手加工': [
      '超仕上げ',
      '電動工具',
      '火打ち加工機',
      'クロスカット',
      'その他'
    ]
  },
  '幅はぎグループ': {
    '接着工程': [
      '高周波接着機',
      'ロールスプレッダー',
      'その他'
    ],
    '仕上げ工程': [
      '一面カンナ',
      'ランニングソー',
      'ベルトサンダー',
      'その他'
    ]
  },
  'モルダーグループ': {
    'モルダー': [
      '本機',
      '積込装置',
      'その他'
    ]
  },
  '西工場共通': {
    '集塵機': [
      'ブリケッター(圧縮機)',
      'ブリケッター(定量機)',
      'メインサイロ',
      '異物除去＋送風機',
      '合板用BFQ',
      '羽柄用BFQ1',
      '羽柄用BFQ2',
      '羽柄用BFQ3',
      '断熱材用簡易集塵機1',
      '断熱材用簡易集塵機2',
      '断熱材用簡易集塵機3',
      'その他'
    ],
    'コンプレッサー': [
      '1号機',
      '2号機',
      'その他'
    ],
    '破砕機':[
      '破砕機',
      'その他'
    ]
  },
  'プレウォールグループ': {
    'メインライン': [
      '1ステーション(枠組)',
      '2ステーション(間柱取付)',
      '3ステーション(合板取付)',
      '4ステーション(合板釘打ち)',
      '5ステーション(中間検査)',
      '6ステーション(接着剤塗布)',
      '7ステーション(断熱材取付)',
      '8ステーション(プレス)',
      '9ステーション(最終点検)',
      'その他'
    ],
    '特殊ライン':[
      '1ステーション(枠組)',
      '2ステーション(釘打ち)',
      '3ステーション(中間検査)',
      '4ステーション(断熱材取付)',
      '5ステーション(プレス)',
      '6ステーション(最終検査)',
      'その他'
    ]
  },
  '断熱材グループ': {
    '自動加工機': [
      '投入装置',
      '幅はぎ接着',
      '第一切断',
      '第二切断',
      'その他'
    ],
    'ランニングソー': [
      'ランニングソー',
      'その他'
    ]
  },
  '合板グループ': {
    '合板加工機': [
      '合板加工機1号機',
      '合板加工機2号機',
      'ランニングソー',
      'その他'
    ]
  },
  '羽柄材グループ': {
    '羽柄材加工機': [
      'MPS-13 1号機(間柱・筋違)',
      'MPS-13 2号機(下穴加工)',
      'MPS-25 3号機(屋根垂木)',
      'MPS-25K 4号機(枠材)',
      'その他'
    ]
  }
};

export const MENU = [
  {
      label: '営業部',
      items: [                
          {
              label: '営業課',
              // icon: 'pi pi-fw pi-trash'
          },
          {
              label: '設計課',
              // icon: 'pi pi-fw pi-external-link'
          }
      ]
  },
  {
      label: '企画開発部',
      // icon: 'pi pi-fw pi-pencil',
      // items: [
      //     {
      //         label: 'Left',
      //         icon: 'pi pi-fw pi-align-left'
      //     },
      //     {
      //         label: 'Right',
      //         icon: 'pi pi-fw pi-align-right'
      //     },
      //     {
      //         label: 'Center',
      //         icon: 'pi pi-fw pi-align-center'
      //     },
      //     {
      //         label: 'Justify',
      //         icon: 'pi pi-fw pi-align-justify'
      //     }
      // ]
  },    
  {
      label: '製造部',
      // icon: 'pi pi-fw pi-pencil',
      items: [
          {
              label: '製造部共通',
              // icon: 'pi pi-fw pi-align-left'
          },
          {
              label: '生産管理課',
              // icon: 'pi pi-fw pi-align-right'
              to: '/diary'
          },
          {
              label: '生産課',
              // icon: 'pi pi-fw pi-align-center'
          }
      ]
  },    
];

export const HOUSING_MATERIAL_DIVISION = [
  {
      label: '共通',
      items: [                
          {
              label: '工事(修理)実績報告書',
              // icon: 'pi pi-fw pi-trash'
              items: [                
                {
                    label: '新規入力',
                    // icon: 'pi pi-fw pi-trash'
                    to: '/diary'
                },
                {
                    label: '検索・修正・印刷',
                    // icon: 'pi pi-fw pi-trash'
                    to: '/general'
                },
                {
                    label: '集計',
                    // icon: 'pi pi-fw pi-trash'
                },
                {
                    label: 'トラブルシューティング',
                    // icon: 'pi pi-fw pi-trash'
                },
              ]
          },
          {
              label: '集塵機グラフ',
              // icon: 'pi pi-fw pi-external-link'
              to: '/graph'
          }
      ]
  },
  {
      label: '営業部',      // items: [                
      //     {
      //         label: '営業課',
      //         // icon: 'pi pi-fw pi-trash'
      //     },
      //     {
      //         label: '設計課',
      //         // icon: 'pi pi-fw pi-external-link'
      //     }
      // ]
  },
  {
      label: '製造部',
      // icon: 'pi pi-fw pi-pencil',
      items: [
          {
              label: '共通',
              // icon: 'pi pi-fw pi-align-left'
          },
          {
              label: '生産管理課',
              // icon: 'pi pi-fw pi-align-right'
          },
          {
              label: '横架材工程',
              // icon: 'pi pi-fw pi-align-center'
          },
          {
              label: '柱材工程',
              // icon: 'pi pi-fw pi-align-justify'
          },
          {
              label: '内装・モルダー工程',
              // icon: 'pi pi-fw pi-align-justify'
          },
          {
              label: '羽柄工程',
              // icon: 'pi pi-fw pi-align-justify'
          },
          {
              label: '合板工程',
              // icon: 'pi pi-fw pi-align-justify'
          },
          {
              label: '断熱材工程',
              // icon: 'pi pi-fw pi-align-justify'
          },
          {
              label: 'プレウォール工程',
              // icon: 'pi pi-fw pi-align-justify'
          },
      ]
  },    
  {
      label: '商品部',
      // icon: 'pi pi-fw pi-pencil',
      // items: [
      //     {
      //         label: '製造部共通',
      //         // icon: 'pi pi-fw pi-align-left'
      //     },
      //     {
      //         label: '生産管理課',
      //         // icon: 'pi pi-fw pi-align-right'
      //         to: '/diary'
      //     },
      //     {
      //         label: '生産課',
      //         // icon: 'pi pi-fw pi-align-center'
      //     }
      // ]
  },    
  {
      label: '企画開発部',
      // icon: 'pi pi-fw pi-pencil',
      // items: [
      //     {
      //         label: '製造部共通',
      //         // icon: 'pi pi-fw pi-align-left'
      //     },
      //     {
      //         label: '生産管理課',
      //         // icon: 'pi pi-fw pi-align-right'
      //         to: '/diary'
      //     },
      //     {
      //         label: '生産課',
      //         // icon: 'pi pi-fw pi-align-center'
      //     }
      // ]
  },    
];