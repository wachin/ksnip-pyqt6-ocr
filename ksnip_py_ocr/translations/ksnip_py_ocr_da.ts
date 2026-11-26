<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="da">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Modelhåndtering - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Valgfrit PaddleOCR-miljø</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR kører i et privat miljø i brugerens datamappe. Det er uafhængigt af Debian-systemets Python. Den første installation downloader PaddlePaddle, PaddleOCR og deres afhængigheder, så der kræves netværksadgang og diskplads.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Administreret miljø</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Beregner...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Åbn</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Dette er det private Python-miljø. Det indeholder fortolkeren, pip, PaddlePaddle, PaddleOCR, PaddleX og OCR-starteren.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Lagerplaceringer og caches</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Opdater størrelser</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Installér / reparér OCR-miljø</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Fjern miljø</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX-modelcache</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Modelvægte, som PaddleX bruger. Den aktuelle OCR-konfiguration bruger:
- Ren tekst: PP-OCRv5/PP-OCRv6-detektion og -genkendelse.
- Tabeller + Markdown/HTML: PP-StructureV3 bruger PP-DocLayout_plus-L og PP-DocBlockLayout til layout, PP-LCNet_x1_0_table_cls til tabelklassificering, SLANeXt_wired og SLANet_plus til tabelstruktur, RT-DETR-L_wired_table_cell_det og RT-DETR-L_wireless_table_cell_det til tabelceller og PP-OCRv5_mobile_det/rec til tekst. Markdown og HTML er to gengivelser af det samme layoutresultat.
- Formler: PP-FormulaNet_plus-L, som kun downloades, når ‘Genkend matematiske formler (LaTeX)’ er aktiveret.
Modeller downloades efter behov. Hvis du sletter dem, tvinges blot en ny download; andre vægte kan stamme fra tidligere PaddleOCR-versioner.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-cache (ældre, valgfri)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Ældre cache brugt af tidligere PaddleOCR-versioner og nogle gamle pipelines. Aktuelle PaddleOCR 3.x og PaddleX gemmer deres modeller i ~/.paddlex/official_models, så denne mappe er valgfri og normalt fraværende. Hvis den vises, tvinger sletning blot en ny download.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip-downloadcache</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels og kildearkiver, som pip har downloadet. Denne cache er ikke nødvendig under kørsel og kan tømmes sikkert; den gør kun en senere geninstallation hurtigere.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Installerede Python-pakker</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Python-pakkerne og metadataene, der er installeret i det administrerede OCR-miljø. Brug denne mappe til at kontrollere de præcise versioner af PaddlePaddle, PaddleOCR, PaddleX, Protobuf og deres afhængigheder. Hvis du sletter filer her manuelt, ødelægges OCR-miljøet.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Klar. ksnip-pyqt6 kan bruge dette miljø via Script-backend'en.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Ikke installeret. Brug ‘Installér / reparér OCR-miljø’.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Ikke til stede (valgfri)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Åbn mappe</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Denne mappe findes endnu ikke: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Mappen kunne ikke åbnes med systemets filhåndtering.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Forbereder installation...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installationen er fuldført. Script-backend'en er konfigureret.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-miljø klar</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR blev installeret i det private miljø.

OCR Script-backend'en peger nu på starteren.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Installationen mislykkedes.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-installationen mislykkedes</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Ukendt installationsfejl.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Fjern OCR-miljø</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Fjern det private PaddleOCR-miljø?

Downloadede PaddleX-modeller slettes ikke.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installation i gang</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Vent på, at OCR-installationen er færdig, før du lukker dette vindue.</translation></message>
  <message><source>Not present</source><translation>Ikke til stede</translation></message><message><source>Unavailable</source><translation>Utilgængelig</translation></message></context>
</TS>
