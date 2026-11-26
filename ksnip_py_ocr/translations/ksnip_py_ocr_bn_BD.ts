<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="bn_BD">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>মডেল ম্যানেজার - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>ঐচ্ছিক PaddleOCR পরিবেশ</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR ব্যবহারকারীর ডেটা ডিরেক্টরিতে একটি ব্যক্তিগত পরিবেশে চলে। এটি Debian সিস্টেমের Python থেকে স্বাধীন। প্রথম ইনস্টলেশনে PaddlePaddle, PaddleOCR এবং তাদের নির্ভরতা ডাউনলোড হয়, তাই নেটওয়ার্ক অ্যাক্সেস এবং ডিস্ক স্থান প্রয়োজন।</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>পরিচালিত পরিবেশ</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>গণনা করা হচ্ছে...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>খুলুন</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>এটি ব্যক্তিগত Python পরিবেশ। এতে interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX এবং OCR লঞ্চার রয়েছে।</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>স্টোরেজ অবস্থান এবং ক্যাশ</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>আকার রিফ্রেশ করুন</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>OCR পরিবেশ ইনস্টল / মেরামত করুন</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>পরিবেশ সরান</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>PaddleX মডেল ক্যাশ</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>PaddleX যে মডেল ওজন ব্যবহার করে। বর্তমান OCR কনফিগারেশন ব্যবহার করে:
- সাধারণ টেক্সট: PP-OCRv5/PP-OCRv6 সনাক্তকরণ ও স্বীকৃতি।
- টেবিল + Markdown/HTML: PP-StructureV3 লেআউটের জন্য PP-DocLayout_plus-L ও PP-DocBlockLayout, টেবিল শ্রেণিবিন্যাসের জন্য PP-LCNet_x1_0_table_cls, টেবিল কাঠামোর জন্য SLANeXt_wired ও SLANet_plus, টেবিল সেলের জন্য RT-DETR-L_wired_table_cell_det ও RT-DETR-L_wireless_table_cell_det এবং টেক্সটের জন্য PP-OCRv5_mobile_det/rec ব্যবহার করে। Markdown ও HTML একই লেআউট ফলাফলের দুটি উপস্থাপনা।
- সূত্র: PP-FormulaNet_plus-L, শুধুমাত্র «গাণিতিক সূত্র চিনুন (LaTeX)» সক্রিয় থাকলে ডাউনলোড হয়।
মডেলগুলো প্রয়োজন অনুযায়ী ডাউনলোড হয়। সেগুলো মুছে ফেললে কেবল পুনরায় ডাউনলোড করতে হয়; অন্য ওজন আগের PaddleOCR সংস্করণ থেকে থাকতে পারে।</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>PaddleOCR ক্যাশ (পুরোনো, ঐচ্ছিক)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>পুরোনো PaddleOCR সংস্করণ এবং কিছু পুরোনো পাইপলাইন যে ক্যাশ ব্যবহার করে। বর্তমান PaddleOCR 3.x ও PaddleX মডেল ~/.paddlex/official_models-এ সংরক্ষণ করে, তাই এই ফোল্ডার ঐচ্ছিক এবং সাধারণত থাকে না। এটি দেখা গেলে মুছে ফেললে কেবল পুনরায় ডাউনলোড করতে হয়।</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>pip ডাউনলোড ক্যাশ</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>pip যে wheel ও সোর্স আর্কাইভ ডাউনলোড করে। এই ক্যাশ চালানোর সময় প্রয়োজন হয় না এবং নিরাপদে মুছে ফেলা যায়; এটি কেবল পরে পুনরায় ইনস্টল দ্রুত করে।</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>ইনস্টল করা Python প্যাকেজ</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>পরিচালিত OCR পরিবেশে ইনস্টল করা Python প্যাকেজ ও মেটাডেটা। PaddlePaddle, PaddleOCR, PaddleX, Protobuf এবং তাদের নির্ভরতার সঠিক সংস্করণ যাচাই করতে এই ফোল্ডার ব্যবহার করুন। এখানে ফাইল হাতে মুছে ফেললে OCR পরিবেশ নষ্ট হয়।</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>প্রস্তুত। ksnip-pyqt6 Script backend-এর মাধ্যমে এই পরিবেশ ব্যবহার করতে পারে।</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>ইনস্টল করা নেই। «OCR পরিবেশ ইনস্টল / মেরামত করুন» ব্যবহার করুন।</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>উপস্থিত নেই (ঐচ্ছিক)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>ফোল্ডার খুলুন</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>এই ফোল্ডারটি এখনও নেই: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>সিস্টেম ফাইল ম্যানেজার দিয়ে ফোল্ডার খোলা যায়নি।</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>ইনস্টলেশন প্রস্তুত করা হচ্ছে...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>ইনস্টলেশন সম্পন্ন। Script backend কনফিগার করা হয়েছে।</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>OCR পরিবেশ প্রস্তুত</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR ব্যক্তিগত পরিবেশে ইনস্টল হয়েছে।

OCR Script backend এখন এর লঞ্চারের দিকে ইঙ্গিত করে।</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>ইনস্টলেশন ব্যর্থ হয়েছে।</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>OCR ইনস্টলেশন ব্যর্থ হয়েছে</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>অজানা ইনস্টলেশন ত্রুটি।</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>OCR পরিবেশ সরান</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>ব্যক্তিগত PaddleOCR পরিবেশ সরাবেন?

ডাউনলোড করা PaddleX মডেল মুছে ফেলা হবে না।</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>ইনস্টলেশন চলছে</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>এই উইন্ডো বন্ধ করার আগে OCR ইনস্টলেশন শেষ হওয়া পর্যন্ত অপেক্ষা করুন।</translation></message>
  <message><source>Not present</source><translation>উপস্থিত নেই</translation></message><message><source>Unavailable</source><translation>উপলব্ধ নেই</translation></message></context>
</TS>
