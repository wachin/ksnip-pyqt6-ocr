<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Modelbeheer - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Optionele PaddleOCR-omgeving</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR draait in een privéomgeving in de gegevensmap van de gebruiker. Deze staat los van de Python van het Debian-systeem. Bij de eerste installatie worden PaddlePaddle, PaddleOCR en hun afhankelijkheden gedownload; daarom zijn netwerktoegang en schijfruimte nodig.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Beheerde omgeving</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Berekenen...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Openen</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Dit is de privé-Pythonomgeving. Deze bevat de interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX en de OCR-starter.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Opslaglocaties en caches</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Groottes vernieuwen</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR-omgeving installeren / herstellen</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Omgeving verwijderen</translation></message>
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
      <translation>Modelgewichten die door PaddleX worden gebruikt. De huidige OCR-configuratie gebruikt:
- Platte tekst: PP-OCRv5/PP-OCRv6-detectie en -herkenning.
- Tabellen + Markdown/HTML: PP-StructureV3 gebruikt PP-DocLayout_plus-L en PP-DocBlockLayout voor de indeling, PP-LCNet_x1_0_table_cls voor tabelclassificatie, SLANeXt_wired en SLANet_plus voor tabelstructuur, RT-DETR-L_wired_table_cell_det en RT-DETR-L_wireless_table_cell_det voor tabelcellen en PP-OCRv5_mobile_det/rec voor tekst. Markdown en HTML zijn twee weergaven van hetzelfde indelingsresultaat.
- Formules: PP-FormulaNet_plus-L, alleen gedownload als ‘Wiskundige formules herkennen (LaTeX)’ is ingeschakeld.
Modellen worden op aanvraag gedownload. Verwijderen dwingt alleen een nieuwe download af; andere gewichten kunnen van eerdere PaddleOCR-versies afkomstig zijn.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-cache (verouderd, optioneel)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Verouderde cache van oudere PaddleOCR-versies en sommige oude pipelines. Huidige PaddleOCR 3.x en PaddleX bewaren hun modellen in ~/.paddlex/official_models; deze map is daarom optioneel en meestal afwezig. Als hij verschijnt, dwingt verwijderen alleen een nieuwe download af.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip-downloadcache</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels en bronarchieven die door pip zijn gedownload. Deze cache is tijdens het uitvoeren niet nodig en kan veilig worden geleegd; hij maakt alleen een latere herinstallatie sneller.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Geïnstalleerde Python-pakketten</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>De Python-pakketten en metadata die in de beheerde OCR-omgeving zijn geïnstalleerd. Gebruik deze map om de exacte versies van PaddlePaddle, PaddleOCR, PaddleX, Protobuf en hun afhankelijkheden te controleren. Bestanden hier handmatig verwijderen beschadigt de OCR-omgeving.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Gereed. ksnip-pyqt6 kan deze omgeving via de Script-backend gebruiken.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Niet geïnstalleerd. Gebruik ‘OCR-omgeving installeren / herstellen’.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Niet aanwezig (optioneel)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Map openen</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Deze map bestaat nog niet: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>De map kon niet worden geopend met de bestandsbeheerder van het systeem.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Installatie voorbereiden...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installatie voltooid. De Script-backend is geconfigureerd.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-omgeving gereed</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR is in de privéomgeving geïnstalleerd.

De OCR Script-backend verwijst nu naar de starter.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>De installatie is mislukt.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-installatie mislukt</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Onbekende installatiefout.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR-omgeving verwijderen</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>De privé-PaddleOCR-omgeving verwijderen?

Gedownloade PaddleX-modellen worden niet verwijderd.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installatie bezig</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Wacht tot de OCR-installatie is voltooid voordat u dit venster sluit.</translation></message>
  <message><source>Not present</source><translation>Niet aanwezig</translation></message><message><source>Unavailable</source><translation>Niet beschikbaar</translation></message></context>
</TS>
