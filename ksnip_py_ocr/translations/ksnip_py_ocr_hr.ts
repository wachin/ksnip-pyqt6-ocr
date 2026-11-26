<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="hr">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Upravitelj modela - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Neobavezno PaddleOCR okruženje</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR radi u privatnom okruženju u korisničkom direktoriju podataka. Neovisan je o Pythonu Debian sustava. Prva instalacija preuzima PaddlePaddle, PaddleOCR i njihove ovisnosti, pa su potrebni mrežni pristup i prostor na disku.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Upravljano okruženje</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Izračunavanje...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Otvori</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Ovo je privatno Python okruženje. Sadrži interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX i pokretač OCR-a.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Lokacije pohrane i predmemorije</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Osvježi veličine</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instaliraj / popravi OCR okruženje</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Ukloni okruženje</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Predmemorija PaddleX modela</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Težine modela koje koristi PaddleX. Trenutačna OCR konfiguracija koristi:
- Obični tekst: otkrivanje i prepoznavanje PP-OCRv5/PP-OCRv6.
- Tablice + Markdown/HTML: PP-StructureV3 koristi PP-DocLayout_plus-L i PP-DocBlockLayout za izgled, PP-LCNet_x1_0_table_cls za klasifikaciju tablica, SLANeXt_wired i SLANet_plus za strukturu tablica, RT-DETR-L_wired_table_cell_det i RT-DETR-L_wireless_table_cell_det za ćelije tablica te PP-OCRv5_mobile_det/rec za tekst. Markdown i HTML dva su prikaza istog rezultata izgleda.
- Formule: PP-FormulaNet_plus-L, preuzima se samo kada je omogućeno „Prepoznaj matematičke formule (LaTeX)”.
Modeli se preuzimaju na zahtjev. Brisanje samo prisiljava na ponovno preuzimanje; druge težine mogu potjecati iz ranijih PaddleOCR verzija.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR predmemorija (naslijeđena, neobavezna)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Naslijeđena predmemorija koju koriste starije PaddleOCR verzije i neki stari postupci. Trenutačni PaddleOCR 3.x i PaddleX spremaju modele u ~/.paddlex/official_models, pa je ova mapa neobavezna i obično ne postoji. Ako se pojavi, brisanje samo prisiljava na ponovno preuzimanje.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip predmemorija preuzimanja</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheel i izvorni arhivi koje preuzima pip. Ova predmemorija nije potrebna tijekom izvođenja i može se sigurno isprazniti; samo ubrzava kasniju ponovnu instalaciju.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Instalirani Python paketi</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Python paketi i metapodaci instalirani u upravljanom OCR okruženju. U ovoj mapi provjerite točne verzije PaddlePaddle, PaddleOCR, PaddleX, Protobuf i njihovih ovisnosti. Ručno brisanje datoteka ovdje kvari OCR okruženje.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Spremno. ksnip-pyqt6 može koristiti ovo okruženje putem Script pozadine.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Nije instalirano. Upotrijebite „Instaliraj / popravi OCR okruženje”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Nije prisutno (neobavezno)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Otvori mapu</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Ova mapa još ne postoji: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Mapu nije bilo moguće otvoriti u upravitelju datoteka sustava.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Priprema instalacije...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalacija je dovršena. Script pozadina je konfigurirana.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR okruženje spremno</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR je instaliran u privatno okruženje.

OCR Script pozadina sada pokazuje na pokretač.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Instalacija nije uspjela.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Instalacija OCR-a nije uspjela</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Nepoznata pogreška instalacije.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Ukloni OCR okruženje</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Ukloniti privatno PaddleOCR okruženje?

Preuzeti PaddleX modeli neće biti izbrisani.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalacija je u tijeku</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Pričekajte da se OCR instalacija dovrši prije zatvaranja ovog prozora.</translation></message>
  <message><source>Not present</source><translation>Nije prisutno</translation></message><message><source>Unavailable</source><translation>Nije dostupno</translation></message></context>
</TS>
