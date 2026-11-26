<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ka">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>მოდელების მმართველი - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>არასავალდებულო PaddleOCR გარემო</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR მუშაობს მომხმარებლის მონაცემთა დირექტორიაში არსებულ პირად გარემოში. ის დამოუკიდებელია Debian სისტემის Python-ისგან. პირველი ინსტალაცია ჩამოტვირთავს PaddlePaddle-ს, PaddleOCR-ს და მათ დამოკიდებულებებს, ამიტომ საჭიროა ქსელზე წვდომა და დისკის სივრცე.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>მართული გარემო</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>ითვლება...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>გახსნა</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>ეს არის პირადი Python გარემო. შეიცავს ინტერპრეტატორს, pip-ს, PaddlePaddle-ს, PaddleOCR-ს, PaddleX-ს და OCR გამშვებს.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>შენახვის ადგილები და ქეშები</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>ზომების განახლება</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR გარემოს დაყენება / შეკეთება</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>გარემოს წაშლა</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX მოდელების ქეში</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX-ის მიერ გამოყენებული მოდელის წონები. მიმდინარე OCR კონფიგურაცია იყენებს:
- ჩვეულებრივი ტექსტი: PP-OCRv5/PP-OCRv6 ამოცნობა და ტექსტის ამოცნობა.
- ცხრილები + Markdown/HTML: PP-StructureV3 იყენებს PP-DocLayout_plus-L და PP-DocBlockLayout განლაგებისთვის, PP-LCNet_x1_0_table_cls ცხრილების კლასიფიკაციისთვის, SLANeXt_wired და SLANet_plus ცხრილის სტრუქტურისთვის, RT-DETR-L_wired_table_cell_det და RT-DETR-L_wireless_table_cell_det ცხრილის უჯრედებისთვის და PP-OCRv5_mobile_det/rec ტექსტისთვის. Markdown და HTML ერთი და იმავე განლაგების შედეგის ორი წარმოდგენაა.
- ფორმულები: PP-FormulaNet_plus-L, ჩამოიტვირთება მხოლოდ მაშინ, როცა ჩართულია „მათემატიკური ფორმულების ამოცნობა (LaTeX)“.
მოდელები ჩამოიტვირთება საჭიროებისამებრ. მათი წაშლა მხოლოდ ხელახლა ჩამოტვირთვას ითხოვს; სხვა წონები შეიძლება ადრინდელი PaddleOCR ვერსიებიდან იყოს.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR ქეში (ძველი, არასავალდებულო)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>ძველი ქეში, რომელსაც იყენებენ PaddleOCR-ის წინა ვერსიები და ზოგიერთი ძველი პროცესი. მიმდინარე PaddleOCR 3.x და PaddleX მოდელებს ინახავენ ~/.paddlex/official_models-ში, ამიტომ ეს საქაღალდე არასავალდებულოა და ჩვეულებრივ არ არსებობს. თუ გამოჩნდა, წაშლა მხოლოდ ხელახლა ჩამოტვირთვას ითხოვს.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip ჩამოტვირთვების ქეში</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pip-ის მიერ ჩამოტვირთული wheel და წყაროს არქივები. ეს ქეში გაშვებისას არ არის საჭირო და უსაფრთხოდ გასუფთავდება; ის მხოლოდ შემდგომ ხელახალ ინსტალაციას აჩქარებს.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>დაყენებული Python პაკეტები</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>მართულ OCR გარემოში დაყენებული Python პაკეტები და მეტამონაცემები. გამოიყენეთ ეს საქაღალდე PaddlePaddle-ის, PaddleOCR-ის, PaddleX-ის, Protobuf-ის და მათი დამოკიდებულებების ზუსტი ვერსიების შესამოწმებლად. აქ ფაილების ხელით წაშლა აფუჭებს OCR გარემოს.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>მზადაა. ksnip-pyqt6 შეუძლია ამ გარემოს გამოყენება Script backend-ის მეშვეობით.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>არ არის დაყენებული. გამოიყენეთ „OCR გარემოს დაყენება / შეკეთება“.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>არ არსებობს (არასავალდებულო)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>საქაღალდის გახსნა</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>ეს საქაღალდე ჯერ არ არსებობს: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>საქაღალდის გახსნა სისტემის ფაილების მმართველში ვერ მოხერხდა.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>ინსტალაციის მომზადება...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>ინსტალაცია დასრულდა. Script backend კონფიგურირებულია.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR გარემო მზადაა</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR დაყენდა პირად გარემოში.

OCR Script backend ახლა გამშვებზე მიუთითებს.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>ინსტალაცია ვერ მოხერხდა.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-ის ინსტალაცია ვერ მოხერხდა</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>უცნობი ინსტალაციის შეცდომა.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR გარემოს წაშლა</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>წავშალოთ პირადი PaddleOCR გარემო?

ჩამოტვირთული PaddleX მოდელები არ წაიშლება.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>მიმდინარეობს ინსტალაცია</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>სანამ ამ ფანჯარას დახურავთ, დაელოდეთ OCR-ის ინსტალაციის დასრულებას.</translation></message>
  <message><source>Not present</source><translation>არ არსებობს</translation></message><message><source>Unavailable</source><translation>მიუწვდომელია</translation></message></context>
</TS>
