<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Modell-Manager - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Optionale PaddleOCR-Umgebung</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR läuft in einer privaten Umgebung im Datenverzeichnis des Benutzers. Sie ist unabhängig vom Debian-System-Python. Bei der ersten Installation werden PaddlePaddle, PaddleOCR und deren Abhängigkeiten heruntergeladen; daher werden Netzwerkzugriff und Speicherplatz benötigt.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Verwaltete Umgebung</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Wird berechnet...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Öffnen</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Dies ist die private Python-Umgebung. Sie enthält den Interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX und den OCR-Starter.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Speicherorte und Caches</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Größen aktualisieren</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR-Umgebung installieren / reparieren</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Umgebung entfernen</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX-Modell-Cache</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Von PaddleX verwendete Modellgewichte. Die aktuelle OCR-Konfiguration verwendet:
- Reiner Text: PP-OCRv5/PP-OCRv6-Erkennung und -Texterkennung.
- Tabellen + Markdown/HTML: PP-StructureV3 verwendet PP-DocLayout_plus-L und PP-DocBlockLayout für das Layout, PP-LCNet_x1_0_table_cls für die Tabellenklassifizierung, SLANeXt_wired und SLANet_plus für die Tabellenstruktur, RT-DETR-L_wired_table_cell_det und RT-DETR-L_wireless_table_cell_det für Tabellenzellen sowie PP-OCRv5_mobile_det/rec für Text. Markdown und HTML sind zwei Darstellungen desselben Layout-Ergebnisses.
- Formeln: PP-FormulaNet_plus-L, nur heruntergeladen, wenn „Mathematische Formeln erkennen (LaTeX)“ aktiviert ist.
Modelle werden bei Bedarf heruntergeladen. Löschen erzwingt nur einen späteren erneuten Download; andere Gewichte können von früheren PaddleOCR-Versionen stammen.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-Cache (veraltet, optional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Veralteter Cache älterer PaddleOCR-Versionen und einiger alter Pipelines. Aktuelle PaddleOCR-3.x- und PaddleX-Versionen speichern ihre Modelle in ~/.paddlex/official_models; dieser Ordner ist daher optional und normalerweise nicht vorhanden. Falls er erscheint, erzwingt Löschen nur einen späteren erneuten Download.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip-Download-Cache</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Von pip heruntergeladene Wheels und Quellarchive. Dieser Cache wird zur Laufzeit nicht benötigt und kann gefahrlos geleert werden; er beschleunigt nur eine spätere Neuinstallation.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Installierte Python-Pakete</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Die in der verwalteten OCR-Umgebung installierten Python-Pakete und Metadaten. In diesem Verzeichnis können die genauen Versionen von PaddlePaddle, PaddleOCR, PaddleX, Protobuf und deren Abhängigkeiten geprüft werden. Das manuelle Löschen von Dateien hier beschädigt die OCR-Umgebung.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Bereit. ksnip-pyqt6 kann diese Umgebung über das Script-Backend verwenden.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Nicht installiert. Verwenden Sie „OCR-Umgebung installieren / reparieren“.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Nicht vorhanden (optional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Ordner öffnen</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Dieser Ordner existiert noch nicht: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Der Ordner konnte nicht mit dem Dateimanager des Systems geöffnet werden.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Installation wird vorbereitet...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installation abgeschlossen. Das Script-Backend wurde konfiguriert.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-Umgebung bereit</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR wurde in der privaten Umgebung installiert.

Das OCR-Script-Backend verweist jetzt auf den Starter.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Installation fehlgeschlagen.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-Installation fehlgeschlagen</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Unbekannter Installationsfehler.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR-Umgebung entfernen</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Die private PaddleOCR-Umgebung entfernen?

Heruntergeladene PaddleX-Modelle werden nicht gelöscht.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installation läuft</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Warten Sie, bis die OCR-Installation abgeschlossen ist, bevor Sie dieses Fenster schließen.</translation></message>
  <message><source>Not present</source><translation>Nicht vorhanden</translation></message><message><source>Unavailable</source><translation>Nicht verfügbar</translation></message></context>
</TS>
