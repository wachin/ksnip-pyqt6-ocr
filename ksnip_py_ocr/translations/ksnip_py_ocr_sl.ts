<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sl">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Upravitelj modelov - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Izbirno okolje PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR se izvaja v zasebnem okolju v uporabnikovem podatkovnem imeniku. Neodvisen je od sistemskega Pythona Debian. Prva namestitev prenese PaddlePaddle, PaddleOCR in njune odvisnosti, zato potrebuje dostop do omrežja in prostor na disku.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Upravljano okolje</translation></message>
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
      <translation>Odpri</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>To je zasebno okolje Python. Vsebuje tolmač, pip, PaddlePaddle, PaddleOCR, PaddleX in zaganjalnik OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Mesta shranjevanja in predpomnilniki</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Osveži velikosti</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Namesti / popravi okolje OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Odstrani okolje</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Predpomnilnik modelov PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Uteži modelov, ki jih uporablja PaddleX. Trenutna nastavitev OCR uporablja:
- Navadno besedilo: zaznavanje in prepoznavanje PP-OCRv5/PP-OCRv6.
- Tabele + Markdown/HTML: PP-StructureV3 uporablja PP-DocLayout_plus-L in PP-DocBlockLayout za postavitev, PP-LCNet_x1_0_table_cls za razvrščanje tabel, SLANeXt_wired in SLANet_plus za strukturo tabel, RT-DETR-L_wired_table_cell_det in RT-DETR-L_wireless_table_cell_det za celice tabel ter PP-OCRv5_mobile_det/rec za besedilo. Markdown in HTML sta dva prikaza istega rezultata postavitve.
- Formule: PP-FormulaNet_plus-L, ki se prenese le, ko je omogočeno »Prepoznavanje matematičnih formul (LaTeX)«.
Modeli se prenašajo po potrebi. Če jih izbrišete, bo potreben le nov prenos; druge uteži lahko izvirajo iz prejšnjih različic PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Predpomnilnik PaddleOCR (zapuščina, izbirno)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Zapuščinski predpomnilnik, ki ga uporabljajo prejšnje različice PaddleOCR in nekateri stari postopki. Trenutna PaddleOCR 3.x in PaddleX shranjujeta modele v ~/.paddlex/official_models, zato je ta mapa izbirna in običajno ne obstaja. Če se pojavi, brisanje zahteva le nov prenos.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Predpomnilnik prenosov pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheel in izvorni arhivi, ki jih prenese pip. Ta predpomnilnik med izvajanjem ni potreben in ga je mogoče varno izprazniti; le pospeši poznejšo ponovno namestitev.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Nameščeni paketi Python</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Paketi in metapodatki Python, nameščeni v upravljanem okolju OCR. V tej mapi lahko preverite natančne različice PaddlePaddle, PaddleOCR, PaddleX, Protobuf in njihovih odvisnosti. Ročno brisanje datotek tukaj poškoduje okolje OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Pripravljeno. ksnip-pyqt6 lahko to okolje uporablja prek zaledja Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Ni nameščeno. Uporabite »Namesti / popravi okolje OCR«.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Ni prisotno (izbirno)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Odpri mapo</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Ta mapa še ne obstaja: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Mape ni bilo mogoče odpreti v sistemskem upravitelju datotek.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Priprava namestitve...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Namestitev je končana. Zaledje Script je nastavljeno.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Okolje OCR je pripravljeno</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR je bil nameščen v zasebno okolje.

Zaledje OCR Script zdaj kaže na zaganjalnik.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Namestitev ni uspela.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Namestitev OCR ni uspela</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Neznana napaka pri namestitvi.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Odstrani okolje OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Ali naj odstranim zasebno okolje PaddleOCR?

Preneseni modeli PaddleX ne bodo izbrisani.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Namestitev poteka</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Preden zaprete to okno, počakajte, da se namestitev OCR konča.</translation></message>
  <message><source>Not present</source><translation>Ni prisotno</translation></message><message><source>Unavailable</source><translation>Ni na voljo</translation></message></context>
</TS>
