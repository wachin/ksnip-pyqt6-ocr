<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ca">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Gestor de models - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Entorn PaddleOCR opcional</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR s’executa en un entorn privat dins del directori de dades de l’usuari. És independent del Python del sistema Debian. La primera instal·lació baixa PaddlePaddle, PaddleOCR i les seves dependències, de manera que necessita accés a la xarxa i espai al disc.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Entorn gestionat</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Calculant...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Obre</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Aquest és l’entorn privat de Python. Conté l’intèrpret, pip, PaddlePaddle, PaddleOCR, PaddleX i el llançador d’OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Ubicacions d’emmagatzematge i memòries cau</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Actualitza les mides</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instal·la / repara l’entorn OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Elimina l’entorn</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Memòria cau de models de PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Pesos de models usats per PaddleX. La configuració actual d’OCR usa:
- Text simple: detecció i reconeixement PP-OCRv5/PP-OCRv6.
- Taules + Markdown/HTML: PP-StructureV3 usa PP-DocLayout_plus-L i PP-DocBlockLayout per al disseny, PP-LCNet_x1_0_table_cls per a la classificació de taules, SLANeXt_wired i SLANet_plus per a l’estructura de les taules, RT-DETR-L_wired_table_cell_det i RT-DETR-L_wireless_table_cell_det per a les cel·les i PP-OCRv5_mobile_det/rec per al text. Markdown i HTML són dues representacions del mateix resultat de disseny.
- Fórmules: PP-FormulaNet_plus-L, descarregat només quan s’activa «Reconèixer fórmules matemàtiques (LaTeX)».
Els models es descarreguen sota demanda. Esborrar-los només obliga a tornar-los a descarregar; altres pesos poden romandre de versions anteriors de PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Memòria cau de PaddleOCR (heredada, opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Memòria cau heredada usada per versions anteriors de PaddleOCR i alguns fluxos antics. Les versions actuals de PaddleOCR 3.x i PaddleX desen els models a ~/.paddlex/official_models, així que aquesta carpeta és opcional i normalment no existeix. Si apareix, esborrar-la només obliga a tornar a descarregar els models.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Memòria cau de descàrregues de pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Rodes i fitxers font descarregats per pip. Aquesta memòria cau no cal en temps d’execució i es pot esborrar sense risc; només fa que una reinstal·lació posterior sigui més ràpida.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Paquets de Python instal·lats</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Paquets i metadades de Python instal·lats dins de l’entorn OCR gestionat. Usa aquest directori per revisar les versions exactes de PaddlePaddle, PaddleOCR, PaddleX, Protobuf i les seves dependències. Esborrar fitxers aquí a mà trenca l’entorn OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>A punt. ksnip-pyqt6 pot usar aquest entorn mitjançant el backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>No instal·lat. Usa «Instal·la / repara l’entorn OCR».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>No present (opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Obre la carpeta</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Aquesta carpeta encara no existeix: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>No s’ha pogut obrir la carpeta amb el gestor de fitxers del sistema.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>S’està preparant la instal·lació...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instal·lació completada. S’ha configurat el backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Entorn OCR a punt</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR s’ha instal·lat a l’entorn privat.

El backend Script d’OCR ara apunta al seu llançador.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>La instal·lació ha fallat.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Ha fallat la instal·lació de l’OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Error d’instal·lació desconegut.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Elimina l’entorn OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Eliminar l’entorn PaddleOCR privat?

Els models PaddleX descarregats no s’eliminen.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instal·lació en curs</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Espera que acabi la instal·lació de l’OCR abans de tancar aquesta finestra.</translation></message>
  <message><source>Not present</source><translation>No present</translation></message><message><source>Unavailable</source><translation>No disponible</translation></message></context>
</TS>
