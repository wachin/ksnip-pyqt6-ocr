<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_CA">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Gestionnaire de modèles - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Environnement PaddleOCR facultatif</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR s’exécute dans un environnement privé situé dans le répertoire de données de l’utilisateur. Il est indépendant de Python du système Debian. La première installation télécharge PaddlePaddle, PaddleOCR et leurs dépendances ; elle nécessite donc un accès réseau et de l’espace disque.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Environnement géré</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Calcul en cours...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Ouvrir</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Il s’agit de l’environnement Python privé. Il contient l’interpréteur, pip, PaddlePaddle, PaddleOCR, PaddleX et le lanceur OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Emplacements de stockage et caches</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Actualiser les tailles</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Installer / réparer l’environnement OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Supprimer l’environnement</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Cache des modèles PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Poids de modèles utilisés par PaddleX. La configuration OCR actuelle utilise :
- Texte brut : détection et reconnaissance PP-OCRv5/PP-OCRv6.
- Tableaux + Markdown/HTML : PP-StructureV3 utilise PP-DocLayout_plus-L et PP-DocBlockLayout pour la mise en page, PP-LCNet_x1_0_table_cls pour la classification des tableaux, SLANeXt_wired et SLANet_plus pour la structure des tableaux, RT-DETR-L_wired_table_cell_det et RT-DETR-L_wireless_table_cell_det pour les cellules, et PP-OCRv5_mobile_det/rec pour le texte. Markdown et HTML sont deux représentations du même résultat de mise en page.
- Formules : PP-FormulaNet_plus-L, téléchargé uniquement lorsque « Reconnaître les formules mathématiques (LaTeX) » est activé.
Les modèles sont téléchargés à la demande. Les supprimer ne fait que forcer un nouveau téléchargement ; d’autres poids peuvent provenir de versions antérieures de PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Cache PaddleOCR (hérité, facultatif)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Cache hérité utilisé par les anciennes versions de PaddleOCR et certains anciens pipelines. Les versions actuelles de PaddleOCR 3.x et PaddleX stockent leurs modèles dans ~/.paddlex/official_models ; ce dossier est donc facultatif et généralement absent. S’il apparaît, le supprimer ne fait que forcer un nouveau téléchargement.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Cache de téléchargement pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels et archives sources téléchargés par pip. Ce cache n’est pas nécessaire à l’exécution et peut être vidé sans risque ; il accélère seulement une réinstallation ultérieure.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Paquets Python installés</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Paquets et métadonnées Python installés dans l’environnement OCR géré. Ce dossier permet de vérifier les versions exactes de PaddlePaddle, PaddleOCR, PaddleX, Protobuf et de leurs dépendances. Supprimer des fichiers ici manuellement endommage l’environnement OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Prêt. ksnip-pyqt6 peut utiliser cet environnement via le backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Non installé. Utilisez « Installer / réparer l’environnement OCR ».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Absent (facultatif)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Ouvrir le dossier</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Ce dossier n’existe pas encore : %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Impossible d’ouvrir le dossier avec le gestionnaire de fichiers du système.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Préparation de l’installation...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Installation terminée. Le backend Script a été configuré.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Environnement OCR prêt</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR a été installé dans l’environnement privé.

Le backend Script OCR pointe maintenant vers son lanceur.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>L’installation a échoué.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Échec de l’installation OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Erreur d’installation inconnue.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Supprimer l’environnement OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Supprimer l’environnement PaddleOCR privé ?

Les modèles PaddleX téléchargés ne sont pas supprimés.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Installation en cours</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Attendez la fin de l’installation OCR avant de fermer cette fenêtre.</translation></message>
  <message><source>Not present</source><translation>Absent</translation></message><message><source>Unavailable</source><translation>Indisponible</translation></message></context>
</TS>
