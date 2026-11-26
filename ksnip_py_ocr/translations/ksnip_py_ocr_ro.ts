<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ro">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Manager de modele - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Mediu PaddleOCR opțional</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR rulează într-un mediu privat în directorul de date al utilizatorului. Este independent de Pythonul sistemului Debian. Prima instalare descarcă PaddlePaddle, PaddleOCR și dependențele acestora, deci necesită acces la rețea și spațiu pe disc.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Mediu gestionat</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Se calculează...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Deschide</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Acesta este mediul Python privat. Conține interpretorul, pip, PaddlePaddle, PaddleOCR, PaddleX și lansatorul OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Locații de stocare și cache-uri</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Actualizează dimensiunile</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instalează / repară mediul OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Elimină mediul</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Cache pentru modelele PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Ponderile modelelor folosite de PaddleX. Configurația OCR actuală folosește:
- Text simplu: detectare și recunoaștere PP-OCRv5/PP-OCRv6.
- Tabele + Markdown/HTML: PP-StructureV3 folosește PP-DocLayout_plus-L și PP-DocBlockLayout pentru aspect, PP-LCNet_x1_0_table_cls pentru clasificarea tabelelor, SLANeXt_wired și SLANet_plus pentru structura tabelelor, RT-DETR-L_wired_table_cell_det și RT-DETR-L_wireless_table_cell_det pentru celulele tabelelor și PP-OCRv5_mobile_det/rec pentru text. Markdown și HTML sunt două reprezentări ale aceluiași rezultat de aspect.
- Formule: PP-FormulaNet_plus-L, descărcat doar când este activată „Recunoaște formule matematice (LaTeX)”.
Modelele sunt descărcate la cerere. Ștergerea lor forțează doar o nouă descărcare; alte ponderi pot proveni din versiuni anterioare PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Cache PaddleOCR (vechi, opțional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Cache vechi folosit de versiunile anterioare PaddleOCR și de unele fluxuri vechi. Versiunile actuale PaddleOCR 3.x și PaddleX stochează modelele în ~/.paddlex/official_models, deci acest folder este opțional și de obicei absent. Dacă apare, ștergerea lui forțează doar o nouă descărcare.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Cache pentru descărcările pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheel-uri și arhive sursă descărcate de pip. Acest cache nu este necesar la rulare și poate fi golit în siguranță; doar face o reinstalare ulterioară mai rapidă.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Pachete Python instalate</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Pachetele și metadatele Python instalate în mediul OCR gestionat. Folosește acest folder pentru a verifica versiunile exacte ale PaddlePaddle, PaddleOCR, PaddleX, Protobuf și dependențele lor. Ștergerea manuală a fișierelor de aici deteriorează mediul OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Gata. ksnip-pyqt6 poate folosi acest mediu prin backendul Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Nu este instalat. Folosește „Instalează / repară mediul OCR”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Absent (opțional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Deschide folderul</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Acest folder nu există încă: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Folderul nu a putut fi deschis cu managerul de fișiere al sistemului.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Se pregătește instalarea...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalare finalizată. Backendul Script a fost configurat.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Mediul OCR este gata</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR a fost instalat în mediul privat.

Backendul OCR Script indică acum lansatorul.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Instalarea a eșuat.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Instalarea OCR a eșuat</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Eroare de instalare necunoscută.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Elimină mediul OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Elimini mediul privat PaddleOCR?

Modelele PaddleX descărcate nu vor fi șterse.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalare în curs</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Așteaptă finalizarea instalării OCR înainte de a închide această fereastră.</translation></message>
  <message><source>Not present</source><translation>Absent</translation></message><message><source>Unavailable</source><translation>Indisponibil</translation></message></context>
</TS>
