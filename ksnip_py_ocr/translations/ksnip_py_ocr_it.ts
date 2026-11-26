<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Gestione modelli - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Ambiente PaddleOCR opzionale</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR viene eseguito in un ambiente privato nella directory dei dati utente. È indipendente dal Python di sistema Debian. La prima installazione scarica PaddlePaddle, PaddleOCR e le relative dipendenze, quindi richiede accesso alla rete e spazio su disco.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Ambiente gestito</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Calcolo in corso...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Apri</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Questo è l’ambiente Python privato. Contiene l’interprete, pip, PaddlePaddle, PaddleOCR, PaddleX e l’avvio OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Percorsi di archiviazione e cache</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Aggiorna dimensioni</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Installa / ripara ambiente OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Rimuovi ambiente</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Cache modelli PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Pesi dei modelli usati da PaddleX. La configurazione OCR attuale usa:
- Testo semplice: rilevamento e riconoscimento PP-OCRv5/PP-OCRv6.
- Tabelle + Markdown/HTML: PP-StructureV3 usa PP-DocLayout_plus-L e PP-DocBlockLayout per il layout, PP-LCNet_x1_0_table_cls per la classificazione delle tabelle, SLANeXt_wired e SLANet_plus per la struttura delle tabelle, RT-DETR-L_wired_table_cell_det e RT-DETR-L_wireless_table_cell_det per le celle e PP-OCRv5_mobile_det/rec per il testo. Markdown e HTML sono due rappresentazioni dello stesso risultato di layout.
- Formule: PP-FormulaNet_plus-L, scaricato solo quando è attiva «Riconosci formule matematiche (LaTeX)».
I modelli vengono scaricati su richiesta. Eliminarli costringe solo a scaricarli di nuovo; altri pesi possono provenire da versioni precedenti di PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Cache PaddleOCR (legacy, opzionale)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Cache legacy usata dalle versioni precedenti di PaddleOCR e da alcune vecchie pipeline. Le versioni attuali di PaddleOCR 3.x e PaddleX archiviano i modelli in ~/.paddlex/official_models, quindi questa cartella è opzionale e normalmente assente. Se compare, eliminarla costringe solo a scaricare di nuovo i modelli.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Cache download pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheel e archivi sorgente scaricati da pip. Questa cache non serve in fase di esecuzione e può essere svuotata senza rischi; rende solo più rapida una successiva reinstallazione.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Pacchetti Python installati</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Pacchetti e metadati Python installati nell’ambiente OCR gestito. Usa questa cartella per controllare le versioni esatte di PaddlePaddle, PaddleOCR, PaddleX, Protobuf e delle loro dipendenze. Eliminare file manualmente qui danneggia l’ambiente OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Pronto. ksnip-pyqt6 può usare questo ambiente tramite il backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Non installato. Usa «Installa / ripara ambiente OCR».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Non presente (opzionale)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Apri cartella</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Questa cartella non esiste ancora: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Impossibile aprire la cartella con il gestore file di sistema.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Preparazione dell’installazione...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installazione completata. Il backend Script è stato configurato.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Ambiente OCR pronto</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR è stato installato nell’ambiente privato.

Il backend Script OCR ora punta al suo avvio.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Installazione non riuscita.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Installazione OCR non riuscita</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Errore di installazione sconosciuto.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Rimuovi ambiente OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Rimuovere l’ambiente PaddleOCR privato?

I modelli PaddleX scaricati non vengono eliminati.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installazione in corso</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Attendi il completamento dell’installazione OCR prima di chiudere questa finestra.</translation></message>
  <message><source>Not present</source><translation>Non presente</translation></message><message><source>Unavailable</source><translation>Non disponibile</translation></message></context>
</TS>
