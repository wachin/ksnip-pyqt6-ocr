<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ar">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>مدير النماذج - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>بيئة PaddleOCR الاختيارية</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>يعمل PaddleOCR في بيئة خاصة داخل دليل بيانات المستخدم. وهي مستقلة عن Python الخاص بنظام Debian. تنزّل عملية التثبيت الأولى PaddlePaddle وPaddleOCR وتبعياتهما، لذلك تحتاج إلى اتصال بالشبكة ومساحة على القرص.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>بيئة مُدارة</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>جارٍ الحساب...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>فتح</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>هذه هي بيئة Python الخاصة. تحتوي على المفسّر وpip وPaddlePaddle وPaddleOCR وPaddleX ومشغّل OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>مواقع التخزين والذاكرات المؤقتة</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>تحديث الأحجام</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>تثبيت / إصلاح بيئة OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>إزالة البيئة</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>ذاكرة نماذج PaddleX المؤقتة</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>أوزان النماذج التي يستخدمها PaddleX. تستخدم إعدادات OCR الحالية:
- النص العادي: كشف وتعرف PP-OCRv5/PP-OCRv6.
- الجداول + Markdown/HTML: يستخدم PP-StructureV3 النموذجين PP-DocLayout_plus-L وPP-DocBlockLayout للتخطيط، وPP-LCNet_x1_0_table_cls لتصنيف الجداول، وSLANeXt_wired وSLANet_plus لبنية الجداول، وRT-DETR-L_wired_table_cell_det وRT-DETR-L_wireless_table_cell_det لخلايا الجداول، وPP-OCRv5_mobile_det/rec للنص. وMarkdown وHTML تمثيلان للنتيجة نفسها للتخطيط.
- المعادلات: PP-FormulaNet_plus-L، ويُنزّل فقط عند تفعيل «التعرف على المعادلات الرياضية (LaTeX)».
تُنزّل النماذج عند الحاجة. حذفها يفرض إعادة تنزيلها فقط؛ وقد تبقى أوزان أخرى من إصدارات PaddleOCR السابقة.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>ذاكرة PaddleOCR المؤقتة (قديمة، اختيارية)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>ذاكرة مؤقتة قديمة تستخدمها إصدارات PaddleOCR السابقة وبعض المسارات القديمة. تحفظ إصدارات PaddleOCR 3.x وPaddleX الحالية نماذجها في ~/.paddlex/official_models، لذا هذا المجلد اختياري وغير موجود عادة. وإذا ظهر، فإن حذفه يفرض إعادة تنزيل النماذج فقط.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>ذاكرة تنزيلات pip المؤقتة</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>ملفات wheel والأرشيفات المصدرية التي ينزّلها pip. هذه الذاكرة غير مطلوبة أثناء التشغيل ويمكن مسحها بأمان؛ وهي تسرّع إعادة التثبيت لاحقًا فقط.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>حزم Python المثبّتة</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>حزم Python وبياناتها الوصفية المثبّتة داخل بيئة OCR المُدارة. استخدم هذا المجلد للتحقق من الإصدارات الدقيقة لـ PaddlePaddle وPaddleOCR وPaddleX وProtobuf وتبعياتها. حذف الملفات هنا يدويًا يؤدي إلى إتلاف بيئة OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>جاهز. يمكن لـ ksnip-pyqt6 استخدام هذه البيئة عبر واجهة Script الخلفية.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>غير مثبّت. استخدم «تثبيت / إصلاح بيئة OCR».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>غير موجود (اختياري)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>فتح المجلد</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>هذا المجلد غير موجود بعد: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>تعذّر فتح المجلد بمدير الملفات في النظام.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>جارٍ تحضير التثبيت...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>اكتمل التثبيت. تم إعداد واجهة Script الخلفية.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>بيئة OCR جاهزة</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>تم تثبيت PaddleOCR في البيئة الخاصة.

تشير واجهة OCR الخلفية الآن إلى مشغّلها.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>فشل التثبيت.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>فشل تثبيت OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>خطأ تثبيت غير معروف.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>إزالة بيئة OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>هل تريد إزالة بيئة PaddleOCR الخاصة؟

لن تُحذف نماذج PaddleX التي تم تنزيلها.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>التثبيت قيد التنفيذ</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>انتظر انتهاء تثبيت OCR قبل إغلاق هذه النافذة.</translation></message>
  <message><source>Not present</source><translation>غير موجود</translation></message><message><source>Unavailable</source><translation>غير متاح</translation></message></context>
</TS>
