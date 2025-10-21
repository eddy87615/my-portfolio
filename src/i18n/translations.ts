export const translations = {
  zh: {
    nav: {
      logoTop: "Eddy's Warehouse",
      logoBottom: '我的各種東西',
      home: '首頁',
      profile: '關於我',
      posts: '文章分享',
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
      title: '嗨！',
      content01: '我是健太。',
      content02: '歡迎來到我的小倉庫！',
      content03: '對我的分享有興趣，歡迎透過各種方式找到我:)',
      titleAboutMe: '關於我',
      titleAboutMeLinkText: '更多關於我的事',
      simpleInfoText01:
        '美術大學畢業，在COVID-19最嚴重時步入社會，掙扎兩年後以平面設計師的身份在某新創廣告公司落腳；正值自己在學習基礎前端技術的時候，輾轉得到留學日本的機會，於是義無反顧來到日本，在語言學校學習一年後入學專門學校，學習前端技術，並且在日本以前端工程師的身份轉職成功。',
      simpleInfoText02:
        '我不是一個優秀的人，但是我不是一個會放棄的人，所以在我所選擇的這條曲折的路上，我會一直摔倒一直受傷，但是我不會停下腳步，我會用更多的精力與時間來磨練出自己平凡的光芒。',
    },
    profile: {
      zhNameTitle: '姓名',
      zhName: '陳品叡',
      sedNameTitle: '英文名',
      sedName: 'Eddy Chen',
      nationalityTitle: '國籍',
      nationality: '台灣',
      birthdayTitle: '生日',
      birthday: '1998年06月15日',
      hobbyTitle: '興趣',
      hobby: '射箭，金工，語言，唱歌',
    },
  },
  jp: {
    nav: {
      logoTop: "Eddy's Warehouse",
      logoBottom: '私の色々なもの',
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
      title: '初めまして！',
      content01: '健太です。',
      content02: '私の子倉庫へようこそ！',
      content03: 'ここに自分の学習ノートや作品を共有する場所で、指摘とコメント歓迎です！',
      titleAboutMe: '私について',
      titleAboutMeLinkText: '詳しく私のことを知るには',
      simpleInfoText01:
        '美術大学を卒業し、COVID-19が最も深刻な時期に社会に出ました。2年間もがいた後、あるスタートアップの広告会社でグラフィックデザイナーとして働き始めました。ちょうど基礎的なフロントエンド技術を学んでいた頃、思いがけず日本留学のチャンスを得て、迷わず日本に来ました。1年間日本語学校で学んだ後、専門学校に入学してフロントエンド技術を学び、日本でフロントエンドエンジニアとして転職に成功しました。',
      simpleInfoText02:
        '私は優秀な人間ではありませんが、諦めない人間です。だから、自分が選んだこの曲がりくねった道で、何度も転んで傷つくでしょう。でも、立ち止まりません。もっと多くの努力と時間をかけて、自分の平凡な輝きを磨いていきます。',
    },
    profile: {
      zhNameTitle: '名前',
      zhName: '陳品叡',
      sedNameTitle: 'フリカナ',
      sedName: 'チェン　ピンルイ',
      nationalityTitle: '国籍',
      nationality: '台湾',
      birthdayTitle: '誕生日',
      birthday: '1998年06月15日',
      hobbyTitle: '趣味',
      hobby: 'アーチェリー，彫金，語学，歌うこと',
    },
  },
  eng: {
    nav: {
      logoTop: "Eddy's Warehouse",
      logoBottom: 'Me and my stuffs',
      home: 'Home',
      profile: 'About Me',
      posts: 'Posts',
    },
    posts: {
      title: 'Posts',
      noPost: 'No posts here ; A ;',
      allTags: 'All',
      tags: {
        'zh-version': 'Chinese Version',
        'jp-version': 'Japanese Version',
        'study-notes': 'Study Notes',
        'article-share': 'Articles Sharing',
      },
    },
    home: {
      title: 'Hi!',
      content01: 'I am Eddy.',
      content02: 'Welcome to my little Warehouse.',
      content03: 'If you are interested in my content, feel free to contact me in any ways.',
      titleAboutMe: 'About Me',
      titleAboutMeLinkText: 'Know more about me',
      simpleInfoText01:
        'I graduated from an art university and entered society during the worst of COVID-19. After struggling for two years, I landed a job as a graphic designer at a startup advertising company. While I was learning basic front-end skills, I got an unexpected opportunity to study in Japan, so I went for it without hesitation. After a year at a language school, I enrolled in a vocational school to study front-end development, and successfully changed careers to become a front-end engineer in Japan.',
      simpleInfoText02:
        "I'm not an exceptional person, but I'm not someone who gives up. On this winding path I've chosen, I'll keep stumbling and getting hurt, but I won't stop moving forward. I'll put in the extra effort and time to polish my own ordinary brilliance.",
    },
    profile: {
      zhNameTitle: 'Name',
      zhName: 'Pin-Jui Chen',
      sedNameTitle: 'English Name',
      sedName: 'Eddy Chen',
      nationalityTitle: 'Nationality',
      nationality: 'Taiwan',
      birthdayTitle: 'Borthday',
      birthday: 'June, 15th, 1998',
      hobbyTitle: 'Hobby',
      hobby: 'Archery, Metal Craft, Language Learning, Sining',
    },
  },
}

export type TranslationKey = keyof typeof translations
export type Translations = typeof translations.zh
