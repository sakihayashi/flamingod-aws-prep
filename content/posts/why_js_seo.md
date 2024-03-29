---
template: SinglePost
title: アメリカのSEOとJavaScript
status: Published
date: '2019-07-02'
featuredImage: 'https://ucarecdn.com/6d025772-4332-4d30-a7fa-aaf749c6459e/'
excerpt: This is an excerpt of Post Two
categories:
  - category: Tech Info
meta:
  description: アメリカのSEOは日本より進んでいる
  title: アメリカのSEOとJavaScript
---
![AngulerJS React JS and Vue JS logos](https://ucarecdn.com/1a386b89-596e-4bfc-b350-d72e1bdf516d/ "JavaScript static page generator library and frameworks")

アメリカではJavaScriptが人気ですが、日本では人気言語のランキングにも入っていない筆者が考える理由の一つ、SEOとは何か理解が浅いことについて説明したいと思います。つまり、JavaScriptはSEOの為に各企業が取り入れざるを得ない、というのがアメリカの現実です。

### まず、SEOとは何か？

SEOとはSearch Engine Optimization（検索エンジン最適化）の略語で、ウェブサイトがウェブ検索した際に、上位に表示されるようウェブサイトを最適化することです。オンラインのみのサービスであれば、検索エンジンにヒットするかどうかがとても切実な課題の一つになります。どんなに素晴らしいコンテンツがウェブ上に落ちたとしても、検索エンジンが検出してくれないことには、ユーザーは見つけることさえ出来ないし、逆もまた然りです。

### SEOをする際に

Googleがサーチエンジンの王者であることは周知の事実かと思いますが、そのGoogleがサーチエンジンにヒットするように[ガイドライン（ウェブマスター向けガイドライン（品質に関するガイドライン）](https://support.google.com/webmasters/answer/35769?hl=ja)を制定しているのは、ウェブ開発者であれば知っているかも知れません。その内容をここでアメリカのウェブ開発から見た視点で解説しましょう。

大きな三つの項目に分けられています。SEOの詳しいやり方は後にブログに書きますが、大まかに説明します。

1. Google がページを検出できるよう手助けする
2. Google がページを理解できるよう手助けする
3. 訪問者がページを利用しやすいよう手助けする

### Google がページを検出できるよう手助けする

検索エンジンは、クローラーというロボットをインターネット中に分散させています。
そしてクローラーは、リンクで繋がったホームページ上をくまなくスキャンし、そのWeb サイトの情報をGoogleに通知します。グーグルの検索エンジンにヒットしたいのであれば、まずウェブサイトがクローラーに検出してもらわなければなりません。読み込まれた情報がインデックス（データ管理）されるので、一つ目はクローラーが読み込む作法に合わせて、必要あるデータとファイルを準備する。

### Google がページを理解できるよう手助けする

これは私たちがターゲットユーザーに見つけてもらう情報を戦略的にロボットに読み込ませることが大事です。ロボットが読む情報が何か、と言うのが鍵になります。
サイトの構造（サイトマップを作成等々）、各ページのロボットしか読み込まない箇所にもキーワードを含める、ロボットがスキャンした際にこのページがブログなのか、企業の紹介ページなのか等々分かりやすいように構成する。ホームページで重要な情報を一番最初に伝える。ここにはユーザーがログインしないといけないページにもロボットが行けるようにしないといけないと言う項目も入っています。また、広告がサイトの一部と認識されないように設定するというものです。

### 訪問者がページを利用しやすいよう手助けする

ページのリンクがきれていないか、リンク先はきちんと説明されているか、モバイル、タブレット優先のデザインになっているか、等々もありますが、この項目で一番難しいのは恐らく**「読み込み時間の最適化」（Webページの読み込みスピード）**です。また自分のページによりリンクが多いと「クオリティが高いページ」とロボットは認識します。

ここまで説明してお気づきかも知れませんが、JavaScriptでサーバーサイドレンダリングをするライブラリ、フレームワークは一般的に早いのです。これが各企業がどうしてもサーバーサイドレンダリングをしてくれる言語をウェブサイトで使わざるを得ない重要な理由の一つです。もちろん、ウェブサイトに寄ってはスピードよりもセキュリティを問われるものもありますので、全てが全てと言う訳ではありません。
