<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pl">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Menedżer modeli - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Opcjonalne środowisko PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR działa w prywatnym środowisku w katalogu danych użytkownika. Jest niezależny od Pythona systemu Debian. Pierwsza instalacja pobiera PaddlePaddle, PaddleOCR i ich zależności, dlatego wymaga dostępu do sieci i miejsca na dysku.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Zarządzane środowisko</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Obliczanie...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Otwórz</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>To jest prywatne środowisko Python. Zawiera interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX i launcher OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Lokalizacje przechowywania i pamięci podręczne</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Odśwież rozmiary</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Zainstaluj / napraw środowisko OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Usuń środowisko</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Pamięć podręczna modeli PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Wagi modeli używane przez PaddleX. Bieżąca konfiguracja OCR używa:
- Zwykły tekst: wykrywanie i rozpoznawanie PP-OCRv5/PP-OCRv6.
- Tabele + Markdown/HTML: PP-StructureV3 używa PP-DocLayout_plus-L i PP-DocBlockLayout do układu, PP-LCNet_x1_0_table_cls do klasyfikacji tabel, SLANeXt_wired i SLANet_plus do struktury tabel, RT-DETR-L_wired_table_cell_det i RT-DETR-L_wireless_table_cell_det do komórek tabel oraz PP-OCRv5_mobile_det/rec do tekstu. Markdown i HTML to dwa sposoby przedstawienia tego samego wyniku układu.
- Wzory: PP-FormulaNet_plus-L, pobierany tylko po włączeniu „Rozpoznawaj wzory matematyczne (LaTeX)”.
Modele są pobierane na żądanie. Ich usunięcie wymusza jedynie ponowne pobranie; inne wagi mogą pochodzić z wcześniejszych wersji PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Pamięć podręczna PaddleOCR (starsza, opcjonalna)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Starsza pamięć podręczna używana przez wcześniejsze wersje PaddleOCR i niektóre stare potoki. Bieżące PaddleOCR 3.x i PaddleX przechowują modele w ~/.paddlex/official_models, więc ten folder jest opcjonalny i zwykle nie istnieje. Jeśli się pojawi, usunięcie wymusi jedynie ponowne pobranie.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Pamięć podręczna pobierania pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels i archiwa źródłowe pobrane przez pip. Ta pamięć nie jest potrzebna w czasie działania i można ją bezpiecznie wyczyścić; przyspiesza jedynie późniejszą reinstalację.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Zainstalowane pakiety Python</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Pakiety i metadane Python zainstalowane w zarządzanym środowisku OCR. Użyj tego folderu, aby sprawdzić dokładne wersje PaddlePaddle, PaddleOCR, PaddleX, Protobuf i ich zależności. Ręczne usuwanie plików tutaj psuje środowisko OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Gotowe. ksnip-pyqt6 może używać tego środowiska przez backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Nie zainstalowano. Użyj „Zainstaluj / napraw środowisko OCR”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Nieobecne (opcjonalne)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Otwórz folder</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Ten folder jeszcze nie istnieje: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Nie udało się otworzyć folderu w menedżerze plików systemu.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Przygotowywanie instalacji...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalacja zakończona. Backend Script został skonfigurowany.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Środowisko OCR gotowe</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR został zainstalowany w prywatnym środowisku.

Backend Script OCR wskazuje teraz na launcher.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Instalacja nie powiodła się.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Instalacja OCR nie powiodła się</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Nieznany błąd instalacji.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Usuń środowisko OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Usunąć prywatne środowisko PaddleOCR?

Pobrane modele PaddleX nie zostaną usunięte.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalacja w toku</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Poczekaj na zakończenie instalacji OCR przed zamknięciem tego okna.</translation></message>
  <message><source>Not present</source><translation>Nieobecne</translation></message><message><source>Unavailable</source><translation>Niedostępne</translation></message></context>
</TS>
