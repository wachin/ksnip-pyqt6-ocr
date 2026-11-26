<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Менеджер моделей - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Дополнительное окружение PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR работает в частной среде в каталоге данных пользователя. Она не зависит от системного Python Debian. При первой установке загружаются PaddlePaddle, PaddleOCR и их зависимости, поэтому требуются доступ к сети и место на диске.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Управляемое окружение</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Вычисление...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Открыть</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Это частная среда Python. Она содержит интерпретатор, pip, PaddlePaddle, PaddleOCR, PaddleX и средство запуска OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Места хранения и кеши</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Обновить размеры</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Установить / восстановить окружение OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Удалить окружение</translation></message>
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
      <translation>Веса моделей, используемые PaddleX. Текущая конфигурация OCR использует:
- Обычный текст: обнаружение и распознавание PP-OCRv5/PP-OCRv6.
- Таблицы + Markdown/HTML: PP-StructureV3 использует PP-DocLayout_plus-L и PP-DocBlockLayout для макета, PP-LCNet_x1_0_table_cls для классификации таблиц, SLANeXt_wired и SLANet_plus для структуры таблиц, RT-DETR-L_wired_table_cell_det и RT-DETR-L_wireless_table_cell_det для ячеек таблиц и PP-OCRv5_mobile_det/rec для текста. Markdown и HTML — два представления одного и того же результата макета.
- Формулы: PP-FormulaNet_plus-L, загружается только при включении «Распознавать математические формулы (LaTeX)».
Модели загружаются по требованию. Их удаление требует только повторной загрузки; другие веса могут остаться от предыдущих версий PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Кеш PaddleOCR (устаревший, необязательный)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Устаревший кеш, используемый предыдущими версиями PaddleOCR и некоторыми старыми конвейерами. Текущие PaddleOCR 3.x и PaddleX хранят модели в ~/.paddlex/official_models, поэтому этот каталог необязателен и обычно отсутствует. Если он появится, удаление потребует только повторной загрузки.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Кеш загрузок pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels и архивы исходников, загруженные pip. Этот кеш не нужен во время работы и его можно безопасно очистить; он лишь ускоряет последующую переустановку.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Установленные пакеты Python</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Пакеты и метаданные Python, установленные в управляемом окружении OCR. В этом каталоге можно проверить точные версии PaddlePaddle, PaddleOCR, PaddleX, Protobuf и их зависимостей. Ручное удаление файлов здесь повреждает окружение OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Готово. ksnip-pyqt6 может использовать эту среду через backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Не установлено. Используйте «Установить / восстановить окружение OCR».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Отсутствует (необязательно)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Открыть папку</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Эта папка ещё не существует: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Не удалось открыть папку в системном файловом менеджере.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Подготовка установки...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Установка завершена. Backend Script настроен.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Окружение OCR готово</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR установлен в частную среду.

Backend OCR Script теперь указывает на средство запуска.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Установка не удалась.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Не удалось установить OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Неизвестная ошибка установки.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Удалить окружение OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Удалить частное окружение PaddleOCR?

Загруженные модели PaddleX не будут удалены.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Идёт установка</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Дождитесь завершения установки OCR, прежде чем закрывать это окно.</translation></message>
  <message><source>Not present</source><translation>Отсутствует</translation></message><message><source>Unavailable</source><translation>Недоступно</translation></message></context>
</TS>
