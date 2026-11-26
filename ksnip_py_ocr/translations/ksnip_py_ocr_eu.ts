<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="eu">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Model kudeatzailea - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Aukerako PaddleOCR ingurunea</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR erabiltzailearen datuen direktorioan dagoen ingurune pribatu batean exekutatzen da. Debian sistemaren Pythonetik independentea da. Lehen instalazioak PaddlePaddle, PaddleOCR eta haien mendekotasunak deskargatzen ditu, beraz, sareko sarbidea eta disko-espazioa behar ditu.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Kudeatutako ingurunea</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Kalkulatzen...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Ireki</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Hau Python ingurune pribatua da. Interpretea, pip, PaddlePaddle, PaddleOCR, PaddleX eta OCR abiarazlea dauzka.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Biltegiratze-kokapenak eta cacheak</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Eguneratu tamainak</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instalatu / konpondu OCR ingurunea</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Kendu ingurunea</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX modelo-cachea</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX-ek erabiltzen dituen modelo-pisuak. Egungo OCR konfigurazioak hauek erabiltzen ditu:
- Testu arrunta: PP-OCRv5/PP-OCRv6 detekzioa eta ezagutza.
- Taulak + Markdown/HTML: PP-StructureV3-k PP-DocLayout_plus-L eta PP-DocBlockLayout erabiltzen ditu diseinurako, PP-LCNet_x1_0_table_cls taulen sailkapenerako, SLANeXt_wired eta SLANet_plus taulen egiturarako, RT-DETR-L_wired_table_cell_det eta RT-DETR-L_wireless_table_cell_det taula-zeluletarako eta PP-OCRv5_mobile_det/rec testurako. Markdown eta HTML diseinu-emaitza beraren bi irudikapen dira.
- Formulak: PP-FormulaNet_plus-L, «Formula matematikoak ezagutu (LaTeX)» gaituta dagoenean soilik deskargatzen da.
Modeloak behar denean deskargatzen dira. Hauek ezabatzeak berriz deskargatzea besterik ez du eragiten; beste pisu batzuk PaddleOCRren aurreko bertsioetatik egon daitezke.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR cachea (zaharra, aukerakoa)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>PaddleOCRren aurreko bertsioek eta hainbat fluxu zaharrek erabiltzen duten cache zaharra. Egungo PaddleOCR 3.x eta PaddleX-ek modeloak ~/.paddlex/official_models-en gordetzen dituzte, beraz, karpeta hau aukerakoa da eta normalean ez dago. Agertzen bada, ezabatzeak berriz deskargatzea besterik ez du eragiten.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip deskarga-cachea</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pip-ek deskargatutako wheel eta iturburu-artxiboak. Cache hau ez da beharrezkoa exekuzioan eta seguru hustu daiteke; geroago berrinstalatzea bizkortzen du soilik.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Instalatutako Python paketeak</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Kudeatutako OCR ingurunean instalatutako Python paketeak eta metadatuak. Erabili karpeta hau PaddlePaddle, PaddleOCR, PaddleX, Protobuf eta haien mendekotasunen bertsio zehatzak egiaztatzeko. Hemen fitxategiak eskuz ezabatzeak OCR ingurunea hondatzen du.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Prest. ksnip-pyqt6-k Script backendaren bidez erabil dezake ingurune hau.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Ez dago instalatuta. Erabili «Instalatu / konpondu OCR ingurunea».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Ez dago (aukerakoa)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Ireki karpeta</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Karpeta hau ez da oraindik existitzen: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Ezin izan da karpeta ireki sistemaren fitxategi-kudeatzailearekin.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Instalazioa prestatzen...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalazioa osatu da. Script backend-a konfiguratu da.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR ingurunea prest</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR ingurune pribatuan instalatu da.

OCR Script backend-a abiarazlea seinalatzen ari da orain.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Instalazioak huts egin du.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR instalazioak huts egin du</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Instalazio-errore ezezaguna.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Kendu OCR ingurunea</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>PaddleOCR ingurune pribatua kendu nahi duzu?

Deskargatutako PaddleX modeloak ez dira ezabatuko.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalazioa abian da</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Itxaron OCR instalazioa amaitu arte leiho hau itxi aurretik.</translation></message>
  <message><source>Not present</source><translation>Ez dago</translation></message><message><source>Unavailable</source><translation>Ez dago erabilgarri</translation></message></context>
</TS>
