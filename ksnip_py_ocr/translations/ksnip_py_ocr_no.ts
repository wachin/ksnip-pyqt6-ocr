<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="no">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Modellbehandling - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Valgfritt PaddleOCR-miljø</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR kjører i et privat miljø i brukerens datamappe. Det er uavhengig av Debian-systemets Python. Den første installasjonen laster ned PaddlePaddle, PaddleOCR og avhengighetene deres, så den trenger nettverkstilgang og diskplass.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Administrert miljø</translation></message>
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
      <translation>Åpne</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Dette er det private Python-miljøet. Det inneholder tolken, pip, PaddlePaddle, PaddleOCR, PaddleX og OCR-starteren.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Lagringssteder og hurtiglagre</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Oppdater størrelser</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Installer / reparer OCR-miljø</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Fjern miljø</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX-modellhurtiglager</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Modellvekter som brukes av PaddleX. Den gjeldende OCR-konfigurasjonen bruker:
- Ren tekst: PP-OCRv5/PP-OCRv6-deteksjon og -gjenkjenning.
- Tabeller + Markdown/HTML: PP-StructureV3 bruker PP-DocLayout_plus-L og PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for tabellklassifisering, SLANeXt_wired og SLANet_plus for tabellstruktur, RT-DETR-L_wired_table_cell_det og RT-DETR-L_wireless_table_cell_det for tabellceller og PP-OCRv5_mobile_det/rec for tekst. Markdown og HTML er to gjengivelser av samme layoutresultat.
- Formler: PP-FormulaNet_plus-L, lastes bare ned når «Gjenkjenn matematiske formler (LaTeX)» er aktivert.
Modeller lastes ned ved behov. Hvis du sletter dem, tvinges bare en ny nedlasting; andre vekter kan stamme fra tidligere PaddleOCR-versjoner.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-hurtiglager (eldre, valgfritt)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Eldre hurtiglager brukt av tidligere PaddleOCR-versjoner og enkelte gamle pipelines. Gjeldende PaddleOCR 3.x og PaddleX lagrer modellene i ~/.paddlex/official_models, så denne mappen er valgfri og vanligvis fraværende. Hvis den dukker opp, tvinger sletting bare en ny nedlasting.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip-nedlastingshurtiglager</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels og kildearkiver lastet ned av pip. Dette hurtiglageret er ikke nødvendig under kjøring og kan tømmes trygt; det gjør bare en senere reinstallering raskere.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Installerte Python-pakker</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Python-pakkene og metadataene som er installert i det administrerte OCR-miljøet. Bruk denne mappen til å kontrollere de nøyaktige versjonene av PaddlePaddle, PaddleOCR, PaddleX, Protobuf og avhengighetene deres. Hvis du sletter filer her manuelt, ødelegges OCR-miljøet.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Klar. ksnip-pyqt6 kan bruke dette miljøet via Script-backend.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Ikke installert. Bruk «Installer / reparer OCR-miljø».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Ikke til stede (valgfritt)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Åpne mappe</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Denne mappen finnes ikke ennå: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Kunne ikke åpne mappen med systemets filbehandler.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Forbereder installasjon...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installasjonen er fullført. Script-backend er konfigurert.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-miljø klart</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR ble installert i det private miljøet.

OCR Script-backend peker nå på starteren.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Installasjonen mislyktes.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-installasjonen mislyktes</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Ukjent installasjonsfeil.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Fjern OCR-miljø</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Fjerne det private PaddleOCR-miljøet?

Nedlastede PaddleX-modeller slettes ikke.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installasjon pågår</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Vent til OCR-installasjonen er ferdig før du lukker dette vinduet.</translation></message>
  <message><source>Not present</source><translation>Ikke til stede</translation></message><message><source>Unavailable</source><translation>Utilgjengelig</translation></message></context>
</TS>
