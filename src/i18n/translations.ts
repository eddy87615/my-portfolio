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
      noPost: '目前沒有文章，請到 Payload 後台新增',
      allTags: '全部',
      tags: {
        'zh-version': '中文版',
        'jp-version': '日文版',
        'study-notes': '學習筆記',
        'article-share': '文章分享',
      },
    },
    home: {
      welcome: '歡迎來到我的網站！',
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
      noPost: '記事がありません。Payload管理画面で追加してください。',
      allTags: 'すべて',
      tags: {
        'zh-version': '中国語版',
        'jp-version': '日本語版',
        'study-notes': '学習ノート',
        'article-share': '記事シェア',
      },
    },
    home: {
      welcome: '健太のサイトへようこそ',
    },
  },
}

export type TranslationKey = keyof typeof translations
export type Translations = typeof translations.zh
