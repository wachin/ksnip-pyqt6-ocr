<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="uk">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Менеджер моделей - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Додаткове середовище PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR працює в приватному середовищі в каталозі даних користувача. Воно не залежить від системного Python Debian. Під час першого встановлення завантажуються PaddlePaddle, PaddleOCR та їхні залежності, тому потрібні доступ до мережі й місце на диску.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Кероване середовище</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Обчислення...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Відкрити</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Це приватне середовище Python. Воно містить інтерпретатор, pip, PaddlePaddle, PaddleOCR, PaddleX і засіб запуску OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Місця зберігання та кеші</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Оновити розміри</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Встановити / відновити середовище OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Видалити середовище</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Кеш моделей PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Ваги моделей, які використовує PaddleX. Поточна конфігурація OCR використовує:
- Звичайний текст: виявлення та розпізнавання PP-OCRv5/PP-OCRv6.
- Таблиці + Markdown/HTML: PP-StructureV3 використовує PP-DocLayout_plus-L і PP-DocBlockLayout для макета, PP-LCNet_x1_0_table_cls для класифікації таблиць, SLANeXt_wired і SLANet_plus для структури таблиць, RT-DETR-L_wired_table_cell_det і RT-DETR-L_wireless_table_cell_det для клітинок таблиць та PP-OCRv5_mobile_det/rec для тексту. Markdown і HTML — два подання одного результату макета.
- Формули: PP-FormulaNet_plus-L, завантажується лише коли ввімкнено «Розпізнавати математичні формули (LaTeX)».
Моделі завантажуються за потреби. Їх видалення лише змушує завантажити їх знову; інші ваги можуть залишитися від попередніх версій PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Кеш PaddleOCR (застарілий, необов’язковий)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Застарілий кеш, який використовують попередні версії PaddleOCR і деякі старі конвеєри. Поточні PaddleOCR 3.x і PaddleX зберігають моделі в ~/.paddlex/official_models, тому ця тека необов’язкова й зазвичай відсутня. Якщо вона з’явиться, видалення лише змусить завантажити моделі знову.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Кеш завантажень pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels і архіви джерел, завантажені pip. Цей кеш не потрібен під час роботи, його можна безпечно очистити; він лише пришвидшує подальше перевстановлення.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Встановлені пакети Python</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Пакети й метадані Python, встановлені в керованому середовищі OCR. У цій теці можна перевірити точні версії PaddlePaddle, PaddleOCR, PaddleX, Protobuf та їхніх залежностей. Ручне видалення файлів тут пошкоджує середовище OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Готово. ksnip-pyqt6 може використовувати це середовище через backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Не встановлено. Використайте «Встановити / відновити середовище OCR».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Відсутній (необов’язково)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Відкрити теку</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Ця тека ще не існує: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Не вдалося відкрити теку в системному менеджері файлів.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Підготовка встановлення...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Встановлення завершено. Backend Script налаштовано.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Середовище OCR готове</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR встановлено в приватне середовище.

Backend OCR Script тепер указує на засіб запуску.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Встановлення не вдалося.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Не вдалося встановити OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Невідома помилка встановлення.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Видалити середовище OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Видалити приватне середовище PaddleOCR?

Завантажені моделі PaddleX не буде видалено.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Триває встановлення</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Зачекайте завершення встановлення OCR, перш ніж закрити це вікно.</translation></message>
  <message><source>Not present</source><translation>Відсутній</translation></message><message><source>Unavailable</source><translation>Недоступно</translation></message></context>
</TS>
