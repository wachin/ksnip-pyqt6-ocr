<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sq">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Menaxheri i modeleve - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Mjedis opsional PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR ekzekutohet në një mjedis privat në drejtorinë e të dhënave të përdoruesit. Është i pavarur nga Python i sistemit Debian. Instalimi i parë shkarkon PaddlePaddle, PaddleOCR dhe varësitë e tyre, prandaj kërkon akses në rrjet dhe hapësirë në disk.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Mjedis i menaxhuar</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Duke llogaritur...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Hap</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Ky është mjedisi privat i Python. Përmban interpretuesin, pip, PaddlePaddle, PaddleOCR, PaddleX dhe nisësin e OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Vendndodhjet e ruajtjes dhe cache-t</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Përditëso madhësitë</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instalo / riparo mjedisin OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Hiq mjedisin</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Cache i modeleve PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Peshat e modeleve që përdor PaddleX. Konfigurimi aktual i OCR përdor:
- Tekst i thjeshtë: zbulim dhe njohje PP-OCRv5/PP-OCRv6.
- Tabela + Markdown/HTML: PP-StructureV3 përdor PP-DocLayout_plus-L dhe PP-DocBlockLayout për planin, PP-LCNet_x1_0_table_cls për klasifikimin e tabelave, SLANeXt_wired dhe SLANet_plus për strukturën e tabelave, RT-DETR-L_wired_table_cell_det dhe RT-DETR-L_wireless_table_cell_det për qelizat e tabelave dhe PP-OCRv5_mobile_det/rec për tekstin. Markdown dhe HTML janë dy paraqitje të të njëjtit rezultat të planit.
- Formulat: PP-FormulaNet_plus-L, shkarkohet vetëm kur aktivizohet „Njih formulat matematikore (LaTeX)”.
Modelet shkarkohen sipas nevojës. Fshirja e tyre detyron vetëm një shkarkim të ri; peshat e tjera mund të vijnë nga versione të mëparshme të PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Cache i PaddleOCR (i vjetër, opsional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Cache i vjetër i përdorur nga versionet e mëparshme të PaddleOCR dhe disa rrjedha të vjetra. PaddleOCR 3.x dhe PaddleX aktualë i ruajnë modelet në ~/.paddlex/official_models, prandaj kjo dosje është opsionale dhe zakonisht mungon. Nëse shfaqet, fshirja detyron vetëm një shkarkim të ri.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Cache i shkarkimeve të pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheel dhe arkiva burimore të shkarkuara nga pip. Ky cache nuk nevojitet gjatë ekzekutimit dhe mund të zbrazet pa rrezik; thjesht e bën më të shpejtë një riinstalim të mëvonshëm.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Paketat Python të instaluara</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Paketat dhe metadatat Python të instaluara në mjedisin OCR të menaxhuar. Përdor këtë dosje për të kontrolluar versionet e sakta të PaddlePaddle, PaddleOCR, PaddleX, Protobuf dhe varësive të tyre. Fshirja manuale e skedarëve këtu dëmton mjedisin OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Gati. ksnip-pyqt6 mund ta përdorë këtë mjedis përmes backend-it Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Nuk është instaluar. Përdor „Instalo / riparo mjedisin OCR”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Nuk është i pranishëm (opsional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Hap dosjen</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Kjo dosje nuk ekziston ende: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Dosja nuk mund të hapej me menaxherin e skedarëve të sistemit.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Duke përgatitur instalimin...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalimi përfundoi. Backend-i Script është konfiguruar.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Mjedisi OCR është gati</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR u instalua në mjedisin privat.

Backend-i OCR Script tani tregon nisësin.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Instalimi dështoi.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Instalimi i OCR dështoi</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Gabim i panjohur instalimi.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Hiq mjedisin OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Të hiqet mjedisi privat PaddleOCR?

Modelet PaddleX të shkarkuara nuk fshihen.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalimi në vazhdim</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Prisni përfundimin e instalimit të OCR përpara se të mbyllni këtë dritare.</translation></message>
  <message><source>Not present</source><translation>Nuk është i pranishëm</translation></message><message><source>Unavailable</source><translation>I padisponueshëm</translation></message></context>
</TS>
