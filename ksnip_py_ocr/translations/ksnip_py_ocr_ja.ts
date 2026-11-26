<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>モデルマネージャー - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>オプションの PaddleOCR 環境</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR はユーザーのデータディレクトリ内のプライベート環境で実行されます。Debian システムの Python から独立しています。初回インストールでは PaddlePaddle、PaddleOCR とその依存関係をダウンロードするため、ネットワークアクセスとディスク容量が必要です。</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>管理対象環境</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>計算中...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>開く</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>これはプライベートな Python 環境です。インタープリター、pip、PaddlePaddle、PaddleOCR、PaddleX、OCR ランチャーが含まれます。</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>保存場所とキャッシュ</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>サイズを更新</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR 環境をインストール / 修復</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>環境を削除</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX モデルキャッシュ</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX が使用するモデルの重みです。現在の OCR 設定では次を使用します：
- プレーンテキスト：PP-OCRv5/PP-OCRv6 の検出と認識。
- 表 + Markdown/HTML：PP-StructureV3 はレイアウトに PP-DocLayout_plus-L と PP-DocBlockLayout、表の分類に PP-LCNet_x1_0_table_cls、表の構造に SLANeXt_wired と SLANet_plus、表のセルに RT-DETR-L_wired_table_cell_det と RT-DETR-L_wireless_table_cell_det、テキストに PP-OCRv5_mobile_det/rec を使用します。Markdown と HTML は同じレイアウト結果の 2 つの表現です。
- 数式：PP-FormulaNet_plus-L。 「数式を認識（LaTeX）」が有効な場合にのみダウンロードされます。
モデルは必要に応じてダウンロードされます。削除すると再ダウンロードが必要になるだけです。他の重みは以前の PaddleOCR バージョンのものである場合があります。</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR キャッシュ（旧式、オプション）</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>以前の PaddleOCR バージョンや一部の古いパイプラインが使用する旧式のキャッシュです。現在の PaddleOCR 3.x と PaddleX はモデルを ~/.paddlex/official_models に保存するため、このフォルダーはオプションであり、通常は存在しません。存在する場合、削除すると再ダウンロードが必要になるだけです。</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip ダウンロードキャッシュ</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pip がダウンロードした wheel とソースアーカイブです。このキャッシュは実行時には不要で、安全に削除できます。後日の再インストールが速くなるだけです。</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>インストール済み Python パッケージ</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>管理対象の OCR 環境にインストールされた Python パッケージとメタデータです。このフォルダーで PaddlePaddle、PaddleOCR、PaddleX、Protobuf とその依存関係の正確なバージョンを確認できます。ここでファイルを手動で削除すると OCR 環境が壊れます。</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>準備完了。ksnip-pyqt6 は Script バックエンド経由でこの環境を使用できます。</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>未インストールです。「OCR 環境をインストール / 修復」を使用してください。</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>存在しません（オプション）</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>フォルダーを開く</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>このフォルダーはまだ存在しません: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>システムのファイルマネージャーでフォルダーを開けませんでした。</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>インストールを準備しています...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>インストールが完了しました。Script バックエンドが設定されました。</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR 環境の準備完了</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR はプライベート環境にインストールされました。

OCR Script バックエンドはランチャーを指すようになりました。</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>インストールに失敗しました。</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR のインストールに失敗しました</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>不明なインストールエラーです。</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR 環境を削除</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>プライベートな PaddleOCR 環境を削除しますか？

ダウンロード済みの PaddleX モデルは削除されません。</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>インストール中</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>このウィンドウを閉じる前に、OCR のインストールが完了するまでお待ちください。</translation></message>
  <message><source>Not present</source><translation>存在しません</translation></message><message><source>Unavailable</source><translation>利用できません</translation></message></context>
</TS>
