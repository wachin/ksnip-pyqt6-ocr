<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Gestor de modelos - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Entorno opcional de PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR se ejecuta en un entorno privado dentro del directorio de datos del usuario. Es independiente del Python del sistema Debian. La primera instalación descarga PaddlePaddle, PaddleOCR y sus dependencias, por lo que necesita acceso a la red y espacio en disco.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Entorno gestionado</translation></message>
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
      <translation>Este es el entorno privado de Python. Contiene el intérprete, pip, PaddlePaddle, PaddleOCR, PaddleX y el lanzador de OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Ubicaciones de almacenamiento y cachés</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Actualizar tamaños</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instalar / reparar entorno OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Eliminar entorno</translation></message>
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
      <translation>Pesos de modelos usados por PaddleX. La configuración actual de OCR usa:
- Texto plano: detección y reconocimiento PP-OCRv5/PP-OCRv6.
- Tablas + Markdown/HTML: PP-StructureV3 usa PP-DocLayout_plus-L y PP-DocBlockLayout para el diseño, PP-LCNet_x1_0_table_cls para la clasificación de tablas, SLANeXt_wired y SLANet_plus para la estructura de tablas, RT-DETR-L_wired_table_cell_det y RT-DETR-L_wireless_table_cell_det para las celdas de tablas, y PP-OCRv5_mobile_det/rec para el texto. Markdown y HTML son dos representaciones del mismo resultado de diseño.
- Fórmulas: PP-FormulaNet_plus-L, que solo se descarga cuando se activa «Reconocer fórmulas matemáticas (LaTeX)».
Los modelos se descargan bajo demanda. Borrarlos solo obliga a volver a descargarlos; otros pesos pueden permanecer de versiones anteriores de PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Caché de PaddleOCR (heredada, opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Caché heredada usada por versiones anteriores de PaddleOCR y algunos flujos antiguos. PaddleOCR 3.x y PaddleX actuales guardan sus modelos en ~/.paddlex/official_models, por lo que esta carpeta es opcional y normalmente no existe. Si aparece, borrarla solo obliga a volver a descargar los modelos.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Caché de descargas de pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Ruedas y archivos fuente descargados por pip. Esta caché no es necesaria en tiempo de ejecución y se puede borrar sin problema; solo hace que una reinstalación posterior sea más rápida.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Paquetes de Python instalados</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Paquetes y metadatos de Python instalados dentro del entorno OCR gestionado. Usa este directorio para revisar las versiones exactas de PaddlePaddle, PaddleOCR, PaddleX, Protobuf y sus dependencias. Borrar archivos de aquí a mano rompe el entorno OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Listo. ksnip-pyqt6 puede usar este entorno mediante el backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>No instalado. Usa 'Instalar / reparar entorno OCR'.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>No presente (opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Abrir carpeta</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Esta carpeta aún no existe: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>No se pudo abrir la carpeta con el gestor de archivos del sistema.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Preparando la instalación...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalación completada. El backend Script se ha configurado.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Entorno OCR listo</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR se instaló en el entorno privado.

El backend Script de OCR ahora apunta a su lanzador.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>La instalación falló.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Falló la instalación de OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Error de instalación desconocido.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Eliminar entorno OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>¿Eliminar el entorno privado de PaddleOCR?

Los modelos de PaddleX descargados no se eliminan.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalación en curso</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Espera a que termine la instalación de OCR antes de cerrar esta ventana.</translation></message>
  <message><source>Not present</source><translation>No presente</translation></message><message><source>Unavailable</source><translation>No disponible</translation></message></context>
</TS>
