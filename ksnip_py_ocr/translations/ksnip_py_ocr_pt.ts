<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Gestor de modelos - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Ambiente PaddleOCR opcional</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>O PaddleOCR é executado num ambiente privado no diretório de dados do utilizador. É independente do Python do sistema Debian. A primeira instalação descarrega o PaddlePaddle, o PaddleOCR e as respetivas dependências, pelo que necessita de acesso à rede e de espaço em disco.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Ambiente gerido</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>A calcular...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Abrir</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Este é o ambiente Python privado. Contém o interpretador, o pip, o PaddlePaddle, o PaddleOCR, o PaddleX e o lançador de OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Locais de armazenamento e caches</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Atualizar tamanhos</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instalar / reparar ambiente OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Remover ambiente</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Cache de modelos PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Pesos de modelos utilizados pelo PaddleX. A configuração OCR atual utiliza:
- Texto simples: deteção e reconhecimento PP-OCRv5/PP-OCRv6.
- Tabelas + Markdown/HTML: o PP-StructureV3 utiliza PP-DocLayout_plus-L e PP-DocBlockLayout para o layout, PP-LCNet_x1_0_table_cls para a classificação de tabelas, SLANeXt_wired e SLANet_plus para a estrutura das tabelas, RT-DETR-L_wired_table_cell_det e RT-DETR-L_wireless_table_cell_det para as células e PP-OCRv5_mobile_det/rec para o texto. Markdown e HTML são duas representações do mesmo resultado de layout.
- Fórmulas: PP-FormulaNet_plus-L, descarregado apenas quando «Reconhecer fórmulas matemáticas (LaTeX)» está ativado.
Os modelos são descarregados a pedido. Eliminá-los apenas força um novo descarregamento; outros pesos podem permanecer de versões anteriores do PaddleOCR.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Cache PaddleOCR (legado, opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Cache legado utilizado por versões anteriores do PaddleOCR e por alguns pipelines antigos. As versões atuais do PaddleOCR 3.x e do PaddleX guardam os modelos em ~/.paddlex/official_models, pelo que esta pasta é opcional e normalmente está ausente. Se aparecer, eliminá-la apenas força um novo descarregamento.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Cache de transferências do pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheels e arquivos-fonte descarregados pelo pip. Esta cache não é necessária em tempo de execução e pode ser limpa sem risco; apenas torna uma reinstalação posterior mais rápida.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Pacotes Python instalados</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Pacotes e metadados Python instalados no ambiente OCR gerido. Utilize esta pasta para verificar as versões exatas do PaddlePaddle, PaddleOCR, PaddleX, Protobuf e das respetivas dependências. Eliminar ficheiros aqui manualmente danifica o ambiente OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Pronto. O ksnip-pyqt6 pode utilizar este ambiente através do backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Não instalado. Utilize «Instalar / reparar ambiente OCR».</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Não presente (opcional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Abrir pasta</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Esta pasta ainda não existe: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Não foi possível abrir a pasta com o gestor de ficheiros do sistema.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>A preparar a instalação...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalação concluída. O backend Script foi configurado.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Ambiente OCR pronto</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>O PaddleOCR foi instalado no ambiente privado.

O backend Script de OCR aponta agora para o respetivo lançador.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>A instalação falhou.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Falha na instalação do OCR</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Erro de instalação desconhecido.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Remover ambiente OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Remover o ambiente PaddleOCR privado?

Os modelos PaddleX descarregados não são eliminados.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalação em curso</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Aguarde a conclusão da instalação do OCR antes de fechar esta janela.</translation></message>
  <message><source>Not present</source><translation>Não presente</translation></message><message><source>Unavailable</source><translation>Indisponível</translation></message></context>
</TS>
