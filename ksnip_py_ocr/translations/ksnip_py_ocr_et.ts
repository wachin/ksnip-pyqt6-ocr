<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="et">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Mudelite haldur - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Valikuline PaddleOCR-i keskkond</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR töötab kasutaja andmekataloogis asuvas privaatses keskkonnas. See on Debiani süsteemi Pythonist sõltumatu. Esmakordsel installimisel laaditakse alla PaddlePaddle, PaddleOCR ja nende sõltuvused, seega on vaja võrguühendust ja kettaruumi.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Hallatav keskkond</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Arvutatakse...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Ava</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>See on privaatne Pythoni keskkond. See sisaldab tõlki, pipi, PaddlePaddle'i, PaddleOCR-i, PaddleX-i ja OCR-käivitit.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Salvestuskohad ja vahemälud</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Värskenda suurusi</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR-keskkonna paigaldamine / parandamine</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Eemalda keskkond</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX-i mudelite vahemälu</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX-i kasutatavad mudelikaalud. Praegune OCR-i seadistus kasutab:
- Lihttekst: PP-OCRv5/PP-OCRv6 tuvastus ja tekstituvastus.
- Tabelid + Markdown/HTML: PP-StructureV3 kasutab paigutuse jaoks PP-DocLayout_plus-L ja PP-DocBlockLayout, tabelite liigitamiseks PP-LCNet_x1_0_table_cls, tabelistruktuuri jaoks SLANeXt_wired ja SLANet_plus, tabelilahtrite jaoks RT-DETR-L_wired_table_cell_det ja RT-DETR-L_wireless_table_cell_det ning teksti jaoks PP-OCRv5_mobile_det/rec. Markdown ja HTML on sama paigutustulemuse kaks esitust.
- Valemid: PP-FormulaNet_plus-L, mis laaditakse alla ainult siis, kui „Matemaatiliste valemite tuvastamine (LaTeX)” on lubatud.
Mudelid laaditakse vajaduse järgi. Nende kustutamine sunnib ainult uuesti alla laadima; muud kaalud võivad pärineda varasematest PaddleOCR-i versioonidest.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-i vahemälu (pärand, valikuline)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Pärandvahemälu, mida kasutavad varasemad PaddleOCR-i versioonid ja mõned vanad töövood. Praegused PaddleOCR 3.x ja PaddleX salvestavad mudelid kausta ~/.paddlex/official_models, seega see kaust on valikuline ja tavaliselt puudub. Kui see ilmub, sunnib kustutamine ainult uuesti alla laadima.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pipi allalaadimiste vahemälu</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pipi alla laaditud wheel- ja lähtearhiivid. Seda vahemälu pole käitamise ajal vaja ja selle võib ohutult tühjendada; see teeb ainult hilisema uuesti paigaldamise kiiremaks.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Paigaldatud Pythoni paketid</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Hallatavasse OCR-keskkonda paigaldatud Pythoni paketid ja metaandmed. Selles kaustas saab kontrollida PaddlePaddle'i, PaddleOCR-i, PaddleX-i, Protobufi ja nende sõltuvuste täpseid versioone. Failide käsitsi kustutamine siin rikub OCR-keskkonna.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Valmis. ksnip-pyqt6 saab seda keskkonda Script-tausta kaudu kasutada.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Pole paigaldatud. Kasuta „OCR-keskkonna paigaldamine / parandamine”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Pole olemas (valikuline)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Ava kaust</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Seda kausta veel pole: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Kausta ei saanud süsteemi failihalduriga avada.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Installimise ettevalmistamine...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installimine lõpetatud. Script-taust on seadistatud.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-keskkond valmis</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR paigaldati privaatsesse keskkonda.

OCR-i Script-taust osutab nüüd käivitile.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Installimine ebaõnnestus.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-i installimine ebaõnnestus</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Tundmatu installimistõrge.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Eemalda OCR-keskkond</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Kas eemaldada privaatne PaddleOCR-i keskkond?

Allalaaditud PaddleX-i mudeleid ei kustutata.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installimine käib</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Enne selle akna sulgemist oota, kuni OCR-i installimine lõpeb.</translation></message>
  <message><source>Not present</source><translation>Pole olemas</translation></message><message><source>Unavailable</source><translation>Pole saadaval</translation></message></context>
</TS>
