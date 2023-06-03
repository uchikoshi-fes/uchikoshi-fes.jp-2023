module.exports = {
  disableEmoji: true,
  format: '{type}: {subject}',
  list: [
    'Fix',
    'Feat',
    'Update',
    'Remove',
    'Add',
    'Refactor',
    'Test',
    'Style',
    'Chore',
    'Package',
    'Docs',
    'Perf',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'subject', 'body'],
  scopes: [],
  types: {
    Fix: {
      description: 'バグの修正',
      value: 'Fix',
    },
    Feat: {
      description: '新機能の追加',
      value: 'Feat',
    },
    Update: {
      description: '既存機能の変更 (CSSなど、機能追加やバグ修正ではない)',
      value: 'Update',
    },
    Remove: {
      description: 'ファイルや一部コードの削除 (RefactorやFixが適用できる場合はそちらを使う)',
      value: 'Remove',
    },
    Add: {
      description: 'ファイルや一部コードの追加 (機能追加の場合はFeatを使う)',
      value: 'Add',
    },
    Refactor: {
      description: '仕様に影響がないコード改善(リファクタ)',
      value: 'Refactor',
    },
    Test: {
      description: 'テストコードの追加・修正',
      value: 'Test',
    },
    Style: {
      description: 'コードの意味に影響を与えない変更 (空白、フォーマットなど)',
      value: 'Style',
    },
    Chore: {
      description: 'ビルドプロセスや補助ツールの変更',
      value: 'Chore',
    },
    Package: {
      description: 'パッケージの追加・修正',
      value: 'Package',
    },
    Docs: {
      description: 'ドキュメントの追加・修正',
      value: 'Docs',
    },
    Perf: {
      description: 'パフォーマンス改善',
      value: 'Perf',
    },
  },
  messages: {
    type: 'コミットのタイプを選択してください:',
    subject: '変更の要約を入力してください:',
    body: '変更の詳細を入力してください (任意):',
  },
}
