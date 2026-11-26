<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="gl">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Xestor de modelos - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Ambiente PaddleOCR opcional</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR execútase nun ambiente privado no directorio de datos do usuario. É independente do Python do sistema Debian. A primeira instalación descarga PaddlePaddle, PaddleOCR e as súas dependencias, polo que necesita acceso á rede e espazo en disco.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Ambiente xestionado</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Calculando...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Abrir</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Este é o ambiente privado de Python. Contén o intérprete, pip, PaddlePaddle, PaddleOCR, PaddleX e o lanzador de OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Localizacións de almacenamento e cachés</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Actualizar tamaños</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instalar / reparar ambiente OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Eliminar ambiente</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Caché de modelos de PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Pesos de modelos usados por PaddleX. A configuración actual de OCR usa:
- Texto simple: detección e recoñecemento PP-OCRv5/PP-OCRv6.
- Táboas + Markdown/HTML: PP-StructureV3 usa PP-DocLayout_plus-L e PP-DocBlockLayout para o deseño, PP-LCNet_x1_0_table_cls para a clasificación de táboas, SLANeXt_wired e SLANet_plus para a estrutura das táboas, RT-DETR-L_wired_table_cell_det e RT-DETR-L_wireless_table_cell_det para as celas e PP-OCRv5_mobile_det/rec para o texto. Markdown e HTML son dúas representacións do mesmo resultado de deseño.
- Fórmulas: PP-FormulaNet_plus-L, descargado só cando está activado «Recoñecer fórmulas matemáticas (LaTeX)».
Os modelos descárganse baixo demanda. Borralos só obriga a volver descargalos; outros pesos poden permanecer de versións anteriores de PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Caché de PaddleOCR (heredada, opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Caché heredada usada por versións anteriores de PaddleOCR e por algúns fluxos antigos. As versións actuais de PaddleOCR 3.x e PaddleX gardan os modelos en ~/.paddlex/official_models, polo que este cartafol é opcional e normalmente non existe. Se aparece, borralo só obriga a volver descargar os modelos.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Caché de descargas de pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Ruedas e arquivos fonte descargados por pip. Esta caché non é necesaria en tempo de execución e pódese borrar sen risco; só fai que unha reinstalación posterior sexa máis rápida.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Paquetes de Python instalados</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Paquetes e metadatos de Python instalados dentro do ambiente OCR xestionado. Usa este directorio para revisar as versións exactas de PaddlePaddle, PaddleOCR, PaddleX, Protobuf e as súas dependencias. Borrar arquivos aquí a man rompe o ambiente OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Listo. ksnip-pyqt6 pode usar este ambiente mediante o backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Non instalado. Usa «Instalar / reparar ambiente OCR».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Non presente (opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Abrir cartafol</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Este cartafol aínda non existe: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Non se puido abrir o cartafol co xestor de ficheiros do sistema.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Preparando a instalación...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalación completada. O backend Script foi configurado.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Ambiente OCR listo</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR instalouse no ambiente privado.

O backend Script de OCR agora apunta ao seu lanzador.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>A instalación fallou.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Fallou a instalación do OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Erro de instalación descoñecido.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Eliminar ambiente OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Eliminar o ambiente PaddleOCR privado?

Os modelos PaddleX descargados non se eliminan.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalación en curso</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Espera a que remate a instalación do OCR antes de pechar esta xanela.</translation></message>
  <message><source>Not present</source><translation>Non presente</translation></message><message><source>Unavailable</source><translation>Non dispoñible</translation></message></context>
</TS>
