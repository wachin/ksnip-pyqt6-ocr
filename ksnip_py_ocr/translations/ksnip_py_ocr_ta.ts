<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ta">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>மாதிரி மேலாளர் - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>விருப்ப PaddleOCR சூழல்</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR பயனரின் தரவு கோப்பகத்தில் உள்ள தனிப்பட்ட சூழலில் இயங்குகிறது. இது Debian கணினி Python-ஐச் சார்ந்தது அல்ல. முதல் நிறுவல் PaddlePaddle, PaddleOCR மற்றும் அவற்றின் சார்புகளைப் பதிவிறக்கும், எனவே வலைப்பிணைப்பு மற்றும் வட்டு இடம் தேவை.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>நிர்வகிக்கப்படும் சூழல்</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>கணக்கிடப்படுகிறது...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>திற</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>இது தனிப்பட்ட Python சூழல். இதில் interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX மற்றும் OCR தொடக்கி உள்ளன.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>சேமிப்பு இருப்பிடங்கள் மற்றும் தற்காலிகச் சேமிப்புகள்</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>அளவுகளைப் புதுப்பி</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR சூழலை நிறுவு / சரிசெய்</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>சூழலை அகற்று</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX மாதிரி தற்காலிகச் சேமிப்பு</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX பயன்படுத்தும் மாதிரி எடைகள். தற்போதைய OCR அமைப்பு பயன்படுத்துவது:
- எளிய உரை: PP-OCRv5/PP-OCRv6 கண்டறிதல் மற்றும் அங்கீகாரம்.
- அட்டவணைகள் + Markdown/HTML: PP-StructureV3 தளவமைப்புக்கு PP-DocLayout_plus-L மற்றும் PP-DocBlockLayout, அட்டவணை வகைப்பாட்டுக்கு PP-LCNet_x1_0_table_cls, அட்டவணை அமைப்புக்கு SLANeXt_wired மற்றும் SLANet_plus, அட்டவணை கலங்களுக்கு RT-DETR-L_wired_table_cell_det மற்றும் RT-DETR-L_wireless_table_cell_det, உரைக்கு PP-OCRv5_mobile_det/rec ஆகியவற்றைப் பயன்படுத்துகிறது. Markdown மற்றும் HTML ஒரே தளவமைப்பு முடிவின் இரு வடிவங்கள்.
- சூத்திரங்கள்: PP-FormulaNet_plus-L, «கணித சூத்திரங்களை அடையாளம் காண் (LaTeX)» இயக்கப்பட்டால் மட்டுமே பதிவிறக்கப்படும்.
மாதிரிகள் தேவைக்கேற்ப பதிவிறக்கப்படும். அவற்றை நீக்கினால் மீண்டும் பதிவிறக்க வேண்டியிருக்கும்; மற்ற எடைகள் முந்தைய PaddleOCR பதிப்புகளிலிருந்து இருக்கலாம்.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR தற்காலிகச் சேமிப்பு (பழையது, விருப்பம்)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>முந்தைய PaddleOCR பதிப்புகளும் சில பழைய செயலாக்கங்களும் பயன்படுத்தும் பழைய தற்காலிகச் சேமிப்பு. தற்போதைய PaddleOCR 3.x மற்றும் PaddleX மாதிரிகளை ~/.paddlex/official_models இல் சேமிக்கின்றன, எனவே இந்தக் கோப்பகம் விருப்பமானது மற்றும் பொதுவாக இல்லை. அது தோன்றினால், நீக்கினால் மீண்டும் பதிவிறக்க வேண்டியிருக்கும்.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip பதிவிறக்க தற்காலிகச் சேமிப்பு</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pip பதிவிறக்கும் wheel மற்றும் மூல காப்பகங்கள். இந்தத் தற்காலிகச் சேமிப்பு இயக்கத்தின் போது தேவையில்லை, பாதுகாப்பாக காலி செய்யலாம்; பின்னர் மீண்டும் நிறுவலை வேகப்படுத்தும்.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>நிறுவப்பட்ட Python தொகுப்புகள்</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>நிர்வகிக்கப்படும் OCR சூழலில் நிறுவப்பட்ட Python தொகுப்புகள் மற்றும் மெட்டாடேட்டா. PaddlePaddle, PaddleOCR, PaddleX, Protobuf மற்றும் அவற்றின் சார்புகளின் சரியான பதிப்புகளைச் சரிபார்க்க இந்தக் கோப்பகத்தைப் பயன்படுத்தவும். இங்கே கோப்புகளை கைமுறையாக நீக்கினால் OCR சூழல் பாதிக்கப்படும்.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>தயார். ksnip-pyqt6 Script backend மூலம் இந்தச் சூழலைப் பயன்படுத்தலாம்.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>நிறுவப்படவில்லை. «OCR சூழலை நிறுவு / சரிசெய்» பயன்படுத்தவும்.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>இல்லை (விருப்பம்)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>கோப்பகத்தைத் திற</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>இந்தக் கோப்பகம் இன்னும் இல்லை: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>கணினி கோப்பு மேலாளரால் கோப்பகத்தைத் திறக்க முடியவில்லை.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>நிறுவல் தயாராகிறது...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>நிறுவல் முடிந்தது. Script backend அமைக்கப்பட்டது.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR சூழல் தயார்</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR தனிப்பட்ட சூழலில் நிறுவப்பட்டது.

OCR Script backend இப்போது அதன் தொடக்கியைச் சுட்டுகிறது.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>நிறுவல் தோல்வியடைந்தது.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR நிறுவல் தோல்வியடைந்தது</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>அறியப்படாத நிறுவல் பிழை.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR சூழலை அகற்று</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>தனிப்பட்ட PaddleOCR சூழலை அகற்றவா?

பதிவிறக்கப்பட்ட PaddleX மாதிரிகள் நீக்கப்படாது.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>நிறுவல் நடைபெறுகிறது</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>இந்தச் சாளரத்தை மூடுவதற்கு முன் OCR நிறுவல் முடியும் வரை காத்திருக்கவும்.</translation></message>
  <message><source>Not present</source><translation>இல்லை</translation></message><message><source>Unavailable</source><translation>கிடைக்கவில்லை</translation></message></context>
</TS>
