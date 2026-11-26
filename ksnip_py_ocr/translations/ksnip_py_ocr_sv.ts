<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="sv">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Modellhanterare - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Valfri PaddleOCR-miljö</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR körs i en privat miljö i användarens datakatalog. Den är oberoende av Debians system-Python. Den första installationen hämtar PaddlePaddle, PaddleOCR och deras beroenden, så den behöver nätverksåtkomst och diskutrymme.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Hanterad miljö</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Beräknar...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Öppna</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Detta är den privata Python-miljön. Den innehåller tolken, pip, PaddlePaddle, PaddleOCR, PaddleX och OCR-startaren.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Lagringsplatser och cacheminnen</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Uppdatera storlekar</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Installera / reparera OCR-miljö</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Ta bort miljö</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX-modellcache</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Modellvikter som används av PaddleX. Den aktuella OCR-konfigurationen använder:
- Vanlig text: PP-OCRv5/PP-OCRv6-detektering och -igenkänning.
- Tabeller + Markdown/HTML: PP-StructureV3 använder PP-DocLayout_plus-L och PP-DocBlockLayout för layout, PP-LCNet_x1_0_table_cls för tabellklassificering, SLANeXt_wired och SLANet_plus för tabellstruktur, RT-DETR-L_wired_table_cell_det och RT-DETR-L_wireless_table_cell_det för tabellceller och PP-OCRv5_mobile_det/rec för text. Markdown och HTML är två renderingar av samma layoutresultat.
- Formler: PP-FormulaNet_plus-L, hämtas endast när ”Identifiera matematiska formler (LaTeX)” är aktiverat.
Modeller hämtas vid behov. Att ta bort dem tvingar bara fram en ny hämtning; andra vikter kan komma från tidigare PaddleOCR-versioner.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-cache (äldre, valfri)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Äldre cache som används av tidigare PaddleOCR-versioner och vissa gamla pipelines. Aktuella PaddleOCR 3.x och PaddleX lagrar sina modeller i ~/.paddlex/official_models, så den här mappen är valfri och vanligtvis frånvarande. Om den dyker upp tvingar borttagning bara fram en ny hämtning.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip-nedladdningscache</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels och källarkiv som hämtats av pip. Cachen behövs inte under körning och kan tömmas säkert; den gör bara en senare ominstallation snabbare.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Installerade Python-paket</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Python-paketen och metadata som installerats i den hanterade OCR-miljön. Använd den här mappen för att kontrollera de exakta versionerna av PaddlePaddle, PaddleOCR, PaddleX, Protobuf och deras beroenden. Om du tar bort filer här manuellt går OCR-miljön sönder.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Klart. ksnip-pyqt6 kan använda den här miljön via Script-backend.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Inte installerad. Använd ”Installera / reparera OCR-miljö”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Saknas (valfri)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Öppna mapp</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Den här mappen finns inte ännu: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Det gick inte att öppna mappen med systemets filhanterare.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Förbereder installation...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installationen är klar. Script-backend har konfigurerats.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-miljö klar</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR installerades i den privata miljön.

OCR Script-backend pekar nu på startaren.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Installationen misslyckades.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-installationen misslyckades</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Okänt installationsfel.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Ta bort OCR-miljö</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Ta bort den privata PaddleOCR-miljön?

Hämtade PaddleX-modeller tas inte bort.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installation pågår</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Vänta tills OCR-installationen är klar innan du stänger det här fönstret.</translation></message>
  <message><source>Not present</source><translation>Saknas</translation></message><message><source>Unavailable</source><translation>Otillgänglig</translation></message></context>
</TS>
