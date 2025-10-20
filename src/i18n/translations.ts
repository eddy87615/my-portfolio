export const translations = {
  zh: {
    nav: {
      logoTop: "Eddy's Front-End Journey",
      logoBottom: '努力成為合格的前端工程師！',
      home: '首頁',
      profile: '關於我',
      posts: '文章',
    },
    posts: {
      title: '文章列表',
      noPost: '這邊沒有文章 ; A ;',
      allTags: '全部',
      tags: {
        'zh-version': '中文版',
        'jp-version': '日文版',
        'study-notes': '學習筆記',
        'article-share': '文章分享',
      },
    },
    home: {
      title: '健太的前端之旅',
      content01: '藝術大學畢業，在日本從設計轉職成為前端工程師；',
      content02: '想學的東西還有很多，距離想成為的人還很遠。',
      content03: '下一個目標在哪？我不知道，但是我不會停止挑戰我的極限。',
    },
    profile: {
      zhName: '陳品叡',
      sedName: 'Eddy Chen',
    },
  },
  jp: {
    nav: {
      logoTop: '健太のフロントエンドの旅',
      logoBottom: 'とりあえず頑張っている！',
      home: 'ホーム',
      profile: 'プロフィール',
      posts: '記事',
    },
    posts: {
      title: '記事一覧',
      noPost: '記事がありません ; A ;',
      allTags: 'すべて',
      tags: {
        'zh-version': '中国語版',
        'jp-version': '日本語版',
        'study-notes': '学習ノート',
        'article-share': '記事シェア',
      },
    },
    home: {
      title: '健太のフロントエンドの旅',

      content01: '美術大学卒、日本でデザイナーからフロントエンドエンジニアに転職；',
      content02: '学びたいものまだたくさんあって、なりたい人はまだ先。',
      content03: '次のゴールはどこにあるのかわからないですけど、これからも自分の限界を挑んでいく。',
    },
    profile: {
      zhName: '陳品叡',
      sedName: 'チェン　ピンルイ',
    },
  },
}

export type TranslationKey = keyof typeof translations
export type Translations = typeof translations.zh
