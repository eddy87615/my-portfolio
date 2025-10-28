export const translations = {
  zh: {
    nav: {
      logoTop: "Eddy's Warehouse",
      logoBottom: '我的各種東西',
      home: '首頁',
      posts: '文章分享',
    },
    posts: {
      title: '文章列表',
      subtitle:
        '與其說是文章分享，更像是我自己的作品分享，還有一些我在學習時做的筆記；在學習前端的過程中，我發現有很多觀念不單單只是會做出畫面這麼簡單而已，所以邊搜集資料，將我難以理解，或是覺得重要的事情寫下，不專業紀錄，請多多指教。',
      noPost: '這邊沒有文章 ; A ;',
      allTags: '全部',
      tags: {
        'zh-version': '中文版',
        'jp-version': '日文版',
        'eng-version': '英文版',
        'study-notes': '學習筆記',
        'article-share': '文章分享',
      },
      postMenu: '內容目錄',
    },
    home: {
      title: '嗨！',
      content01: '我是健太。',
      content02: '我是前端工程師。',
      titleAboutMe: '我是誰？',
      titleAboutMeInfo: '我是陳品叡，來自台灣，目前定居日本的菜鳥前端工程師。',
      titleAboutSkill01: '我會些什麼？',
      titleAboutSkill02: '關於累積至今我會些什麼技能；持續更新中。',
      titleAboutWorks01: '我做了些什麼？',
      titleAboutWorks02: '關於累積至今我做了些什麼；持續累積中。',
    },
    profile: {
      zhNameTitle: '姓名',
      sedNameTitle: '英文名',
      nationalityTitle: '國籍',
      birthdayTitle: '生日',
      emailTitle: '電子郵件',
      locationTitle: '地點',
      hobbyTitle: '興趣',
      hobby: '射箭，金工，語言，唱歌',
    },
  },
  jp: {
    nav: {
      logoTop: "Eddy's Warehouse",
      logoBottom: '私の色々なもの',
      home: 'ホーム',
      posts: '記事',
    },
    posts: {
      title: '記事一覧',
      subtitle:
        '記事のシェアというより、自分のプロジェクトや学習ノートの共有に近いです。フロントエンド開発を学ぶ過程で、単に画面を作るだけではなく、もっと深い概念があることに気づきました。そこで、理解しにくかったことや重要だと思ったことを調べながら書き留めています。専門的ではない個人的な記録ですが、よろしくお願いします。',
      noPost: '記事がありません ; A ;',
      allTags: 'すべて',
      tags: {
        'zh-version': '中国語版',
        'jp-version': '日本語版',
        'eng-version': '英語版',
        'study-notes': '学習ノート',
        'article-share': '記事シェア',
      },
      postMenu: '内容索引',
    },
    home: {
      title: '初めまして！',
      content01: '健太です。',
      content02: '私はフロントエンドエンジニアです。',
      titleAboutMe: '誰か？',
      titleAboutMeInfo:
        '私はチェンピンルイです。台湾出身で、今日本に住んでいる素人のフロントエンドエンジニアです。',
      titleAboutSkill01: '私は何ができますか？',
      titleAboutSkill02: '積み上げてきたスキルについてです。更新し続けています。',
      titleAboutWorks01: '私は何をしましたか？',
      titleAboutWorks02: '積み上げてきた作品についてです。更新し続けています。',
    },
    profile: {
      zhNameTitle: '名前',
      sedNameTitle: 'フリカナ',
      nationalityTitle: '国籍',
      birthdayTitle: '誕生日',
      emailTitle: 'メール',
      locationTitle: '場所',
      hobbyTitle: '趣味',
      hobby: 'アーチェリー，彫金，語学，歌うこと',
    },
  },
  eng: {
    nav: {
      logoTop: "Eddy's Warehouse",
      logoBottom: 'Me and my stuffs',
      home: 'Home',
      posts: 'Posts',
    },
    posts: {
      title: 'Posts',
      subtitle:
        "Rather than just sharing articles, this is more like a collection of my own projects and study notes. While learning front-end development, I've realized there's much more to it than just creating visual interfaces. So I've been gathering information and writing down concepts that I find difficult to understand or consider important. These are casual notes from a learner's perspective - I hope you find them helpful!",
      noPost: 'No posts here ; A ;',
      allTags: 'All',
      tags: {
        'zh-version': 'Chinese Version',
        'jp-version': 'Japanese Version',
        'eng-version': 'English Version',
        'study-notes': 'Study Notes',
        'article-share': 'Articles Sharing',
      },
      postMenu: 'Content Menu',
    },
    home: {
      title: 'Hi there!',
      content01: 'I am Eddy.',
      content02: 'I am a front-end engineer.',
      titleAboutMe: 'Who am I?',
      titleAboutMeInfo: 'I am PINJUI CHEN, a newb front-end engineer from Taiwan.',
      titleAboutSkill01: 'What can I do?',
      titleAboutSkill02: "About all the skills I've learned so far; keep updating continually.",
      titleAboutWorks01: 'What have I done?',
      titleAboutWorks02: "About all the works I've done so far; keep accumulating.",
    },
    profile: {
      zhNameTitle: 'Name',
      sedNameTitle: 'English Name',
      nationalityTitle: 'Nationality',
      birthdayTitle: 'Borthday',
      emailTitle: 'E-mail',
      locationTitle: 'Location',
      hobbyTitle: 'Hobby',
      hobby: 'Archery, Metal Craft, Language Learning, Sining',
    },
  },
}

export type TranslationKey = keyof typeof translations
export type Translations = typeof translations.zh
