<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>모델 관리자 - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>선택적 PaddleOCR 환경</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR는 사용자 데이터 디렉터리의 개인 환경에서 실행됩니다. Debian 시스템 Python과 독립적입니다. 첫 설치 시 PaddlePaddle, PaddleOCR 및 해당 종속성을 다운로드하므로 네트워크 접근과 디스크 공간이 필요합니다.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>관리되는 환경</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>계산 중...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>열기</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>이것은 개인 Python 환경입니다. 인터프리터, pip, PaddlePaddle, PaddleOCR, PaddleX 및 OCR 실행기가 포함되어 있습니다.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>저장 위치 및 캐시</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>크기 새로 고침</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR 환경 설치 / 복구</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>환경 제거</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX 모델 캐시</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX에서 사용하는 모델 가중치입니다. 현재 OCR 구성은 다음을 사용합니다:
- 일반 텍스트: PP-OCRv5/PP-OCRv6 감지 및 인식.
- 표 + Markdown/HTML: PP-StructureV3는 레이아웃에 PP-DocLayout_plus-L 및 PP-DocBlockLayout, 표 분류에 PP-LCNet_x1_0_table_cls, 표 구조에 SLANeXt_wired 및 SLANet_plus, 표 셀에 RT-DETR-L_wired_table_cell_det 및 RT-DETR-L_wireless_table_cell_det, 텍스트에 PP-OCRv5_mobile_det/rec를 사용합니다. Markdown과 HTML은 동일한 레이아웃 결과의 두 가지 표현입니다.
- 수식: PP-FormulaNet_plus-L, '수학 수식 인식(LaTeX)'이 활성화된 경우에만 다운로드됩니다.
모델은 필요할 때 다운로드됩니다. 삭제하면 다시 다운로드해야 할 뿐입니다. 다른 가중치는 이전 PaddleOCR 버전에서 남아 있을 수 있습니다.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR 캐시 (레거시, 선택 사항)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>이전 PaddleOCR 버전과 일부 오래된 파이프라인에서 사용하는 레거시 캐시입니다. 현재 PaddleOCR 3.x 및 PaddleX는 모델을 ~/.paddlex/official_models에 저장하므로 이 폴더는 선택 사항이며 일반적으로 없습니다. 폴더가 나타나면 삭제 시 다시 다운로드해야 할 뿐입니다.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip 다운로드 캐시</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pip가 다운로드한 wheel 및 소스 아카이브입니다. 이 캐시는 실행 중 필요하지 않으며 안전하게 비울 수 있습니다. 나중에 재설치할 때만 빨라집니다.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>설치된 Python 패키지</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>관리되는 OCR 환경에 설치된 Python 패키지 및 메타데이터입니다. 이 폴더에서 PaddlePaddle, PaddleOCR, PaddleX, Protobuf 및 해당 종속성의 정확한 버전을 확인할 수 있습니다. 여기서 파일을 수동으로 삭제하면 OCR 환경이 손상됩니다.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>준비됨. ksnip-pyqt6는 Script 백엔드를 통해 이 환경을 사용할 수 있습니다.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>설치되지 않았습니다. 'OCR 환경 설치 / 복구'를 사용하세요.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>없음 (선택 사항)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>폴더 열기</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>이 폴더는 아직 없습니다: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>시스템 파일 관리자로 폴더를 열 수 없습니다.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>설치 준비 중...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>설치가 완료되었습니다. Script 백엔드가 구성되었습니다.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR 환경 준비 완료</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR가 개인 환경에 설치되었습니다.

OCR Script 백엔드가 이제 실행기를 가리킵니다.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>설치에 실패했습니다.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR 설치 실패</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>알 수 없는 설치 오류입니다.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR 환경 제거</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>개인 PaddleOCR 환경을 제거하시겠습니까?

다운로드한 PaddleX 모델은 삭제되지 않습니다.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>설치 진행 중</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>이 창을 닫기 전에 OCR 설치가 완료될 때까지 기다리세요.</translation></message>
  <message><source>Not present</source><translation>없음</translation></message><message><source>Unavailable</source><translation>사용할 수 없음</translation></message></context>
</TS>
