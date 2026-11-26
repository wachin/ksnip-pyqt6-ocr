<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="tr">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Model Yöneticisi - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>İsteğe bağlı PaddleOCR ortamı</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR, kullanıcının veri dizininde özel bir ortamda çalışır. Debian sistem Python'undan bağımsızdır. İlk kurulum PaddlePaddle, PaddleOCR ve bağımlılıklarını indirir; bu nedenle ağ erişimi ve disk alanı gerekir.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Yönetilen ortam</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Hesaplanıyor...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Aç</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Bu, özel Python ortamıdır. Yorumlayıcıyı, pip'i, PaddlePaddle'ı, PaddleOCR'ı, PaddleX'i ve OCR başlatıcısını içerir.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Depolama konumları ve önbellekler</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Boyutları yenile</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR ortamını kur / onar</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Ortamı kaldır</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX model önbelleği</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX tarafından kullanılan model ağırlıkları. Geçerli OCR yapılandırması şunları kullanır:
- Düz metin: PP-OCRv5/PP-OCRv6 algılama ve metin tanıma.
- Tablolar + Markdown/HTML: PP-StructureV3 düzen için PP-DocLayout_plus-L ve PP-DocBlockLayout, tablo sınıflandırması için PP-LCNet_x1_0_table_cls, tablo yapısı için SLANeXt_wired ve SLANet_plus, tablo hücreleri için RT-DETR-L_wired_table_cell_det ve RT-DETR-L_wireless_table_cell_det, metin için PP-OCRv5_mobile_det/rec kullanır. Markdown ve HTML aynı düzen sonucunun iki gösterimidir.
- Formüller: PP-FormulaNet_plus-L, yalnızca „Matematiksel formülleri tanı (LaTeX)” etkinleştirildiğinde indirilir.
Modeller isteğe bağlı olarak indirilir. Silmek yalnızca yeniden indirmeyi zorunlu kılar; diğer ağırlıklar önceki PaddleOCR sürümlerinden kalmış olabilir.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR önbelleği (eski, isteğe bağlı)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Eski PaddleOCR sürümleri ve bazı eski iş akışları tarafından kullanılan eski önbellek. Güncel PaddleOCR 3.x ve PaddleX modelleri ~/.paddlex/official_models içinde saklar; bu klasör isteğe bağlıdır ve genellikle yoktur. Görünürse silmek yalnızca yeniden indirmeyi zorunlu kılar.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip indirme önbelleği</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pip tarafından indirilen wheel ve kaynak arşivleri. Bu önbellek çalışma zamanında gerekmez ve güvenle temizlenebilir; yalnızca sonraki yeniden kurulumu hızlandırır.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Kurulu Python paketleri</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Yönetilen OCR ortamına kurulan Python paketleri ve meta verileri. PaddlePaddle, PaddleOCR, PaddleX, Protobuf ve bağımlılıklarının tam sürümlerini denetlemek için bu klasörü kullanın. Buradaki dosyaları elle silmek OCR ortamını bozar.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Hazır. ksnip-pyqt6 bu ortamı Script backend'i üzerinden kullanabilir.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Kurulu değil. „OCR ortamını kur / onar” seçeneğini kullanın.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Mevcut değil (isteğe bağlı)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Klasörü aç</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Bu klasör henüz yok: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Klasör sistem dosya yöneticisiyle açılamadı.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Kurulum hazırlanıyor...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Kurulum tamamlandı. Script backend'i yapılandırıldı.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR ortamı hazır</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR özel ortama kuruldu.

OCR Script backend'i artık başlatıcıya işaret ediyor.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Kurulum başarısız oldu.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR kurulumu başarısız oldu</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Bilinmeyen kurulum hatası.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR ortamını kaldır</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Özel PaddleOCR ortamı kaldırılsın mı?

İndirilen PaddleX modelleri silinmez.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Kurulum sürüyor</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Bu pencereyi kapatmadan önce OCR kurulumunun bitmesini bekleyin.</translation></message>
  <message><source>Not present</source><translation>Mevcut değil</translation></message><message><source>Unavailable</source><translation>Kullanılamıyor</translation></message></context>
</TS>
