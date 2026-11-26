<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fi">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Mallien hallinta - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Valinnainen PaddleOCR-ympäristö</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR toimii käyttäjän tietohakemistossa sijaitsevassa yksityisessä ympäristössä. Se on riippumaton Debian-järjestelmän Pythonista. Ensimmäinen asennus lataa PaddlePaddlen, PaddleOCR:n ja niiden riippuvuudet, joten se tarvitsee verkkoyhteyden ja levytilaa.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Hallittu ympäristö</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Lasketaan...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Avaa</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Tämä on yksityinen Python-ympäristö. Se sisältää tulkin, pipin, PaddlePaddlen, PaddleOCR:n, PaddleX:n ja OCR-käynnistimen.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Tallennussijainnit ja välimuistit</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Päivitä koot</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Asenna / korjaa OCR-ympäristö</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Poista ympäristö</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX-mallivälimuisti</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX:n käyttämät mallipainot. Nykyinen OCR-asetus käyttää:
- Pelkkä teksti: PP-OCRv5/PP-OCRv6-tunnistus ja -tekstintunnistus.
- Taulukot + Markdown/HTML: PP-StructureV3 käyttää PP-DocLayout_plus-L- ja PP-DocBlockLayout-malleja asetteluun, PP-LCNet_x1_0_table_cls -mallia taulukoiden luokitteluun, SLANeXt_wired- ja SLANet_plus-malleja taulukkorakenteeseen, RT-DETR-L_wired_table_cell_det- ja RT-DETR-L_wireless_table_cell_det -malleja taulukkosoluihin sekä PP-OCRv5_mobile_det/rec -malleja tekstiin. Markdown ja HTML ovat kaksi esitystapaa samasta asettelutuloksesta.
- Kaavat: PP-FormulaNet_plus-L, joka ladataan vain, kun ”Tunnista matemaattiset kaavat (LaTeX)” on käytössä.
Mallit ladataan tarvittaessa. Niiden poistaminen pakottaa vain uuden latauksen; muut painot voivat olla peräisin aiemmista PaddleOCR-versioista.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR-välimuisti (vanha, valinnainen)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Vanha välimuisti, jota aiemmat PaddleOCR-versiot ja eräät vanhat työnkulut käyttävät. Nykyiset PaddleOCR 3.x ja PaddleX tallentavat mallit hakemistoon ~/.paddlex/official_models, joten tämä kansio on valinnainen eikä yleensä ole olemassa. Jos se ilmestyy, poistaminen pakottaa vain uuden latauksen.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip-latausvälimuisti</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pipin lataamat wheel- ja lähdearkistot. Tätä välimuistia ei tarvita ajonaikana, ja sen voi tyhjentää turvallisesti; se vain nopeuttaa myöhempää uudelleenasennusta.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Asennetut Python-paketit</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Hallittuun OCR-ympäristöön asennetut Python-paketit ja niiden metatiedot. Tästä hakemistosta voit tarkistaa PaddlePaddlen, PaddleOCR:n, PaddleX:n, Protobufin ja niiden riippuvuuksien tarkat versiot. Tiedostojen poistaminen täältä käsin rikkoo OCR-ympäristön.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Valmis. ksnip-pyqt6 voi käyttää tätä ympäristöä Script-taustajärjestelmän kautta.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Ei asennettu. Käytä ”Asenna / korjaa OCR-ympäristö”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Ei läsnä (valinnainen)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Avaa kansio</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Tätä kansiota ei ole vielä olemassa: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Kansiota ei voitu avata järjestelmän tiedostonhallinnalla.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Valmistellaan asennusta...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Asennus valmis. Script-taustajärjestelmä on määritetty.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR-ympäristö valmis</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR asennettiin yksityiseen ympäristöön.

OCR Script -taustajärjestelmä osoittaa nyt käynnistimeen.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Asennus epäonnistui.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR-asennus epäonnistui</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Tuntematon asennusvirhe.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Poista OCR-ympäristö</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Poistetaanko yksityinen PaddleOCR-ympäristö?

Ladattuja PaddleX-malleja ei poisteta.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Asennus käynnissä</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Odota, että OCR-asennus valmistuu, ennen kuin suljet tämän ikkunan.</translation></message>
  <message><source>Not present</source><translation>Ei läsnä</translation></message><message><source>Unavailable</source><translation>Ei saatavilla</translation></message></context>
</TS>
