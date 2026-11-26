<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="hu">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Modellkezelő - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Opcionális PaddleOCR-környezet</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>A PaddleOCR a felhasználói adatkönyvtárban lévő privát környezetben fut. Független a Debian rendszer Pythonjától. Az első telepítés letölti a PaddlePaddle-t, a PaddleOCR-t és a függőségeiket, ezért hálózati hozzáférésre és lemezhelyre van szükség.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Kezelt környezet</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Számítás...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Megnyitás</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Ez a privát Python-környezet. Tartalmazza az értelmezőt, a pipet, a PaddlePaddle-t, a PaddleOCR-t, a PaddleX-et és az OCR-indítót.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Tárolási helyek és gyorsítótárak</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Méretek frissítése</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR-környezet telepítése / javítása</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Környezet eltávolítása</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX-modell-gyorsítótár</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>A PaddleX által használt modellsúlyok. A jelenlegi OCR-beállítás ezeket használja:
- Egyszerű szöveg: PP-OCRv5/PP-OCRv6 észlelés és szövegfelismerés.
- Táblázatok + Markdown/HTML: a PP-StructureV3 a PP-DocLayout_plus-L és PP-DocBlockLayout modelleket használja az elrendezéshez, a PP-LCNet_x1_0_table_cls modellt a táblázatok osztályozásához, a SLANeXt_wired és SLANet_plus modelleket a táblázatszerkezethez, a RT-DETR-L_wired_table_cell_det és RT-DETR-L_wireless_table_cell_det modelleket a táblázatcellákhoz, valamint a PP-OCRv5_mobile_det/rec modelleket a szöveghez. A Markdown és a HTML ugyanannak az elrendezési eredménynek két megjelenítése.
- Képletek: PP-FormulaNet_plus-L, amely csak a „Matematikai képletek felismerése (LaTeX)” bekapcsolásakor töltődik le.
A modellek igény szerint töltődnek le. Törlésük csak új letöltést kényszerít ki; más súlyok korábbi PaddleOCR-verziókból is származhatnak.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-gyorsítótár (örökölt, opcionális)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>A korábbi PaddleOCR-verziók és néhány régi folyamat által használt örökölt gyorsítótár. A jelenlegi PaddleOCR 3.x és PaddleX a modelleket a ~/.paddlex/official_models könyvtárban tárolja, ezért ez a mappa opcionális, és általában nem létezik. Ha megjelenik, törlése csak új letöltést kényszerít ki.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip-letöltési gyorsítótár</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>A pip által letöltött wheel- és forrásarchívumok. Ez a gyorsítótár futásidőben nem szükséges, és biztonságosan törölhető; csak egy későbbi újratelepítést gyorsít meg.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Telepített Python-csomagok</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>A kezelt OCR-környezetbe telepített Python-csomagok és metaadataik. Ebben a könyvtárban ellenőrizheti a PaddlePaddle, PaddleOCR, PaddleX, Protobuf és függőségeik pontos verzióit. A fájlok kézi törlése itt tönkreteszi az OCR-környezetet.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Kész. A ksnip-pyqt6 a Script backend segítségével használhatja ezt a környezetet.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Nincs telepítve. Használja az „OCR-környezet telepítése / javítása” lehetőséget.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Nincs jelen (opcionális)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Mappa megnyitása</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Ez a mappa még nem létezik: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>A mappa nem nyitható meg a rendszer fájlkezelőjével.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Telepítés előkészítése...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>A telepítés befejeződött. A Script backend beállítása megtörtént.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-környezet kész</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>A PaddleOCR telepítése megtörtént a privát környezetbe.

Az OCR Script backend most az indítóra mutat.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>A telepítés sikertelen.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Az OCR telepítése sikertelen</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Ismeretlen telepítési hiba.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR-környezet eltávolítása</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Eltávolítja a privát PaddleOCR-környezetet?

A letöltött PaddleX-modellek nem törlődnek.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Telepítés folyamatban</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Várja meg az OCR telepítésének befejezését, mielőtt bezárja ezt az ablakot.</translation></message>
  <message><source>Not present</source><translation>Nincs jelen</translation></message><message><source>Unavailable</source><translation>Nem érhető el</translation></message></context>
</TS>
