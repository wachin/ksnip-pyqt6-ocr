<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="cs">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Správce modelů - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Volitelné prostředí PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR běží v soukromém prostředí v datovém adresáři uživatele. Je nezávislé na systémovém Pythonu Debianu. První instalace stáhne PaddlePaddle, PaddleOCR a jejich závislosti, takže vyžaduje přístup k síti a místo na disku.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Spravované prostředí</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Počítá se...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Otevřít</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Toto je soukromé prostředí Pythonu. Obsahuje interpret, pip, PaddlePaddle, PaddleOCR, PaddleX a spouštěč OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Umístění úložiště a mezipaměti</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Obnovit velikosti</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Nainstalovat / opravit prostředí OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Odebrat prostředí</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Mezipaměť modelů PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Váhy modelů používané PaddleX. Aktuální konfigurace OCR používá:
- Prostý text: detekce a rozpoznávání PP-OCRv5/PP-OCRv6.
- Tabulky + Markdown/HTML: PP-StructureV3 používá PP-DocLayout_plus-L a PP-DocBlockLayout pro rozvržení, PP-LCNet_x1_0_table_cls pro klasifikaci tabulek, SLANeXt_wired a SLANet_plus pro strukturu tabulek, RT-DETR-L_wired_table_cell_det a RT-DETR-L_wireless_table_cell_det pro buňky tabulek a PP-OCRv5_mobile_det/rec pro text. Markdown a HTML jsou dvě zobrazení stejného výsledku rozvržení.
- Vzorce: PP-FormulaNet_plus-L, stahuje se pouze při zapnutí „Rozpoznávat matematické vzorce (LaTeX)“.
Modely se stahují podle potřeby. Jejich smazáním se vynutí pouze nové stažení; ostatní váhy mohou pocházet z dřívějších verzí PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Mezipaměť PaddleOCR (starší, volitelná)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Starší mezipaměť používaná dřívějšími verzemi PaddleOCR a některými starými postupy. Aktuální PaddleOCR 3.x a PaddleX ukládají modely do ~/.paddlex/official_models, takže tato složka je volitelná a obvykle neexistuje. Pokud se objeví, smazání vynutí pouze nové stažení.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Mezipaměť stahování pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels a zdrojové archivy stažené pipem. Tato mezipaměť není za běhu potřeba a lze ji bezpečně vymazat; pouze zrychlí pozdější přeinstalaci.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Nainstalované balíčky Pythonu</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Balíčky a metadata Pythonu nainstalované ve spravovaném prostředí OCR. V této složce můžete zkontrolovat přesné verze PaddlePaddle, PaddleOCR, PaddleX, Protobuf a jejich závislostí. Ruční smazání souborů zde poškodí prostředí OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Připraveno. ksnip-pyqt6 může toto prostředí používat přes backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Není nainstalováno. Použijte „Nainstalovat / opravit prostředí OCR“.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Není k dispozici (volitelné)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Otevřít složku</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Tato složka zatím neexistuje: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Složku se nepodařilo otevřít ve správci souborů systému.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Připravuje se instalace...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalace dokončena. Backend Script byl nakonfigurován.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Prostředí OCR je připraveno</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR byl nainstalován do soukromého prostředí.

Backend OCR Script nyní ukazuje na spouštěč.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Instalace se nezdařila.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Instalace OCR se nezdařila</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Neznámá chyba instalace.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Odebrat prostředí OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Odebrat soukromé prostředí PaddleOCR?

Stažené modely PaddleX nebudou smazány.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Probíhá instalace</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Před zavřením tohoto okna počkejte, až instalace OCR skončí.</translation></message>
  <message><source>Not present</source><translation>Není k dispozici</translation></message><message><source>Unavailable</source><translation>Nedostupné</translation></message></context>
</TS>
