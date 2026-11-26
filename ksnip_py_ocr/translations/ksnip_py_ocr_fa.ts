<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fa">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>مدیر مدل‌ها - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>محیط اختیاری PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR در یک محیط خصوصی در پوشه داده‌های کاربر اجرا می‌شود. این محیط از پایتون سیستم Debian مستقل است. نصب اولیه PaddlePaddle، PaddleOCR و وابستگی‌های آن‌ها را دانلود می‌کند؛ بنابراین به دسترسی شبکه و فضای دیسک نیاز دارد.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>محیط مدیریت‌شده</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>در حال محاسبه...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>باز کردن</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>این محیط خصوصی پایتون است. شامل مفسر، pip، PaddlePaddle، PaddleOCR، PaddleX و راه‌انداز OCR است.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>مکان‌های ذخیره‌سازی و حافظه‌های نهان</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>به‌روزرسانی اندازه‌ها</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>نصب / تعمیر محیط OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>حذف محیط</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>حافظه نهان مدل‌های PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>وزن‌های مدل که PaddleX استفاده می‌کند. پیکربندی فعلی OCR از این موارد استفاده می‌کند:
- متن ساده: تشخیص و بازشناسی PP-OCRv5/PP-OCRv6.
- جدول‌ها + Markdown/HTML: PP-StructureV3 از PP-DocLayout_plus-L و PP-DocBlockLayout برای چیدمان، PP-LCNet_x1_0_table_cls برای طبقه‌بندی جدول، SLANeXt_wired و SLANet_plus برای ساختار جدول، RT-DETR-L_wired_table_cell_det و RT-DETR-L_wireless_table_cell_det برای سلول‌های جدول و PP-OCRv5_mobile_det/rec برای متن استفاده می‌کند. Markdown و HTML دو نمایش از یک نتیجه چیدمان هستند.
- فرمول‌ها: PP-FormulaNet_plus-L، فقط زمانی دانلود می‌شود که «تشخیص فرمول‌های ریاضی (LaTeX)» فعال باشد.
مدل‌ها در صورت نیاز دانلود می‌شوند. حذف آن‌ها فقط دانلود مجدد را الزامی می‌کند؛ وزن‌های دیگر ممکن است از نسخه‌های قبلی PaddleOCR باقی مانده باشند.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>حافظه نهان PaddleOCR (قدیمی، اختیاری)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>حافظه نهان قدیمی که نسخه‌های قبلی PaddleOCR و برخی جریان‌های قدیمی از آن استفاده می‌کنند. PaddleOCR 3.x و PaddleX فعلی مدل‌ها را در ~/.paddlex/official_models ذخیره می‌کنند، بنابراین این پوشه اختیاری است و معمولاً وجود ندارد. اگر ظاهر شود، حذف آن فقط دانلود مجدد را الزامی می‌کند.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>حافظه نهان دانلودهای pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>فایل‌های wheel و آرشیوهای منبع که pip دانلود می‌کند. این حافظه نهان در زمان اجرا لازم نیست و می‌توان آن را با خیال راحت پاک کرد؛ فقط نصب مجدد بعدی را سریع‌تر می‌کند.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>بسته‌های پایتون نصب‌شده</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>بسته‌ها و فراداده‌های پایتون نصب‌شده در محیط OCR مدیریت‌شده. از این پوشه برای بررسی نسخه‌های دقیق PaddlePaddle، PaddleOCR، PaddleX، Protobuf و وابستگی‌های آن‌ها استفاده کنید. حذف دستی فایل‌ها در اینجا محیط OCR را خراب می‌کند.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>آماده است. ksnip-pyqt6 می‌تواند از این محیط از طریق بک‌اند Script استفاده کند.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>نصب نشده است. از «نصب / تعمیر محیط OCR» استفاده کنید.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>موجود نیست (اختیاری)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>باز کردن پوشه</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>این پوشه هنوز وجود ندارد: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>پوشه با مدیر فایل سیستم باز نشد.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>در حال آماده‌سازی نصب...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>نصب کامل شد. بک‌اند Script پیکربندی شد.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>محیط OCR آماده است</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR در محیط خصوصی نصب شد.

بک‌اند OCR Script اکنون به راه‌انداز آن اشاره می‌کند.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>نصب ناموفق بود.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>نصب OCR ناموفق بود</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>خطای نصب ناشناخته.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>حذف محیط OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>محیط خصوصی PaddleOCR حذف شود؟

مدل‌های دانلودشده PaddleX حذف نمی‌شوند.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>نصب در حال انجام است</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>پیش از بستن این پنجره منتظر پایان نصب OCR بمانید.</translation></message>
  <message><source>Not present</source><translation>موجود نیست</translation></message><message><source>Unavailable</source><translation>در دسترس نیست</translation></message></context>
</TS>
