<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="bg">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Мениджър на модели - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Опционална среда PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR работи в частна среда в директорията с данни на потребителя. Тя е независима от Python на системата Debian. Първата инсталация изтегля PaddlePaddle, PaddleOCR и техните зависимости, затова са необходими достъп до мрежата и дисково пространство.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Управлявана среда</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Изчисляване...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Отвори</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Това е частната Python среда. Тя съдържа интерпретатора, pip, PaddlePaddle, PaddleOCR, PaddleX и стартера за OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Места за съхранение и кешове</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Обнови размерите</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Инсталиране / поправка на OCR средата</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Премахване на средата</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Кеш за моделите на PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Тегла на моделите, използвани от PaddleX. Текущата OCR конфигурация използва:
- Обикновен текст: откриване и разпознаване PP-OCRv5/PP-OCRv6.
- Таблици + Markdown/HTML: PP-StructureV3 използва PP-DocLayout_plus-L и PP-DocBlockLayout за оформлението, PP-LCNet_x1_0_table_cls за класификация на таблици, SLANeXt_wired и SLANet_plus за структурата на таблици, RT-DETR-L_wired_table_cell_det и RT-DETR-L_wireless_table_cell_det за клетките на таблици и PP-OCRv5_mobile_det/rec за текста. Markdown и HTML са две представяния на един и същ резултат от оформлението.
- Формули: PP-FormulaNet_plus-L, изтегля се само когато е включено „Разпознаване на математически формули (LaTeX)“.
Моделите се изтеглят при поискване. Изтриването им налага само ново изтегляне; други тегла може да са от предишни версии на PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Кеш на PaddleOCR (стар, по избор)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Стар кеш, използван от предишни версии на PaddleOCR и някои стари потоци. Текущите PaddleOCR 3.x и PaddleX съхраняват моделите в ~/.paddlex/official_models, затова тази папка е по избор и обикновено липсва. Ако се появи, изтриването ѝ налага само ново изтегляне.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Кеш за изтегляния на pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheel и изходни архиви, изтеглени от pip. Този кеш не е необходим по време на работа и може безопасно да се изчисти; просто ускорява по-късна преинсталация.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Инсталирани Python пакети</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Python пакетите и метаданните, инсталирани в управляваната OCR среда. Използвайте тази папка, за да проверите точните версии на PaddlePaddle, PaddleOCR, PaddleX, Protobuf и техните зависимости. Ръчното изтриване на файлове тук поврежда OCR средата.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Готово. ksnip-pyqt6 може да използва тази среда чрез backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Не е инсталирано. Използвайте „Инсталиране / поправка на OCR средата“.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Няма (по избор)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Отвори папката</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Тази папка все още не съществува: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Папката не може да бъде отворена с файловия мениджър на системата.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Подготовка за инсталиране...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Инсталацията е завършена. Backend Script е конфигуриран.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR средата е готова</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR беше инсталиран в частната среда.

OCR backend Script вече сочи към стартера.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Инсталацията е неуспешна.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Инсталацията на OCR е неуспешна</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Неизвестна грешка при инсталация.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Премахни OCR средата</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Да се премахне ли частната PaddleOCR среда?

Изтеглените PaddleX модели няма да бъдат изтрити.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Инсталацията е в ход</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Изчакайте OCR инсталацията да завърши, преди да затворите този прозорец.</translation></message>
  <message><source>Not present</source><translation>Няма</translation></message><message><source>Unavailable</source><translation>Недостъпно</translation></message></context>
</TS>
