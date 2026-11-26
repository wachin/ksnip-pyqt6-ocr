<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="he">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>מנהל מודלים - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>סביבת PaddleOCR אופציונלית</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR פועל בסביבה פרטית בתיקיית הנתונים של המשתמש. היא אינה תלויה ב-Python של מערכת Debian. ההתקנה הראשונה מורידה את PaddlePaddle, PaddleOCR והתלויות שלהן, ולכן נדרשים גישה לרשת ומקום בדיסק.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>סביבה מנוהלת</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>מחשב...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>פתח</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>זו סביבת ה-Python הפרטית. היא מכילה את המפרש, pip, PaddlePaddle, PaddleOCR, PaddleX ומפעיל ה-OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>מיקומי אחסון ומטמונים</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>רענן גדלים</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>התקן / תקן סביבת OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>הסר סביבה</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>מטמון מודלי PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>משקלי המודלים שבהם PaddleX משתמש. תצורת ה-OCR הנוכחית משתמשת ב:
- טקסט רגיל: זיהוי והכרה של PP-OCRv5/PP-OCRv6.
- טבלאות + Markdown/HTML: PP-StructureV3 משתמש ב-PP-DocLayout_plus-L ו-PP-DocBlockLayout לפריסה, ב-PP-LCNet_x1_0_table_cls לסיווג טבלאות, ב-SLANeXt_wired ו-SLANet_plus למבנה הטבלאות, ב-RT-DETR-L_wired_table_cell_det ו-RT-DETR-L_wireless_table_cell_det לתאי הטבלאות וב-PP-OCRv5_mobile_det/rec לטקסט. Markdown ו-HTML הן שתי הצגות של אותה תוצאת פריסה.
- נוסחאות: PP-FormulaNet_plus-L, מורד רק כאשר „זהה נוסחאות מתמטיות (LaTeX)” מופעל.
המודלים מורדים לפי דרישה. מחיקתם רק מחייבת הורדה מחדש; משקלים אחרים עשויים להישאר מגרסאות PaddleOCR קודמות.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>מטמון PaddleOCR (ישן, אופציונלי)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>מטמון ישן שבו משתמשות גרסאות PaddleOCR קודמות וכמה תזרימים ישנים. גרסאות PaddleOCR 3.x ו-PaddleX הנוכחיות שומרות את המודלים ב-~/.paddlex/official_models, ולכן התיקייה הזו אופציונלית ובדרך כלל אינה קיימת. אם היא תופיע, מחיקתה רק תחייב הורדה מחדש.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>מטמון הורדות pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>קובצי wheel וארכיוני מקור שהורדו על ידי pip. המטמון הזה אינו נדרש בזמן ריצה ואפשר לרוקן אותו בבטחה; הוא רק מאיץ התקנה מחדש מאוחרת.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>חבילות Python מותקנות</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>חבילות ומטא-נתונים של Python המותקנים בסביבת ה-OCR המנוהלת. השתמש בתיקייה הזו כדי לבדוק את הגרסאות המדויקות של PaddlePaddle, PaddleOCR, PaddleX, Protobuf והתלויות שלהן. מחיקה ידנית של קבצים כאן הורסת את סביבת ה-OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>מוכן. ksnip-pyqt6 יכול להשתמש בסביבה הזו דרך ה-backend של Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>לא מותקן. השתמש ב״התקן / תקן סביבת OCR״.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>לא קיים (אופציונלי)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>פתח תיקייה</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>התיקייה הזו עדיין לא קיימת: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>לא ניתן היה לפתוח את התיקייה במנהל הקבצים של המערכת.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>מכין התקנה...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>ההתקנה הושלמה. ה-backend של Script הוגדר.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>סביבת OCR מוכנה</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR הותקן בסביבה הפרטית.

ה-backend של OCR Script מצביע כעת על המפעיל.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>ההתקנה נכשלה.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>התקנת OCR נכשלה</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>שגיאת התקנה לא ידועה.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>הסר סביבת OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>להסיר את סביבת PaddleOCR הפרטית?

מודלי PaddleX שהורדו לא יימחקו.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>ההתקנה מתבצעת</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>המתן לסיום התקנת OCR לפני סגירת החלון.</translation></message>
  <message><source>Not present</source><translation>לא קיים</translation></message><message><source>Unavailable</source><translation>לא זמין</translation></message></context>
</TS>
