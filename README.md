## 環境構築手順

1. このリポジトリをクローン
   ```bash
   git clone https://github.com/yusei53/product-list
   ```

2. このプロジェクトに移動してvscodeで開く
   ```bash
   cd product-list
   code .
   ```
   ↑↑1ができれば、2はこれじゃなくても個人のいつもの開き方でいいです

3. npm installを実行
   ```bash
   npm i
   ```

4. プロジェクトのルートディレクトリに.envファイルを作成し、中身はゆせにDMで聞いてください

5. Supabaseプロジェクトへの招待をゆせに依頼(メアドをゆせに送ってください)し、supabaseの中身が見れることを確認
(運営メンバーは運営メールアドレスから入れます！パスワードはnotionのSNS周りの情報欄に書いてるのでそれでログインしてみてください)


7. 開発サーバーを起動
   ```bash
   npm run dev
   ```
