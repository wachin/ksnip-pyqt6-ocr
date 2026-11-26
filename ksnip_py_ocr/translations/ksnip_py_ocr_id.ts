<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="id">
  <context>
    <name>ModelManagerDialog</name>
    <message>
      <location filename="../manager.py" line="156" />
      <source>Model Manager - PaddleOCR</source>
      <translation>Manajer Model - PaddleOCR</translation></message>
    <message>
      <location filename="../manager.py" line="164" />
      <source>Optional PaddleOCR environment</source>
      <translation>Lingkungan PaddleOCR opsional</translation></message>
    <message>
      <location filename="../manager.py" line="169" />
      <source>PaddleOCR runs in a private environment under your user data directory. It is independent from the Debian system Python. The first installation downloads PaddlePaddle, PaddleOCR, and their dependencies, so it needs network access and disk space.</source>
      <translation>PaddleOCR berjalan di lingkungan privat dalam direktori data pengguna. Lingkungan ini independen dari Python sistem Debian. Instalasi pertama mengunduh PaddlePaddle, PaddleOCR, dan dependensinya, sehingga memerlukan akses jaringan dan ruang disk.</translation></message>
    <message>
      <location filename="../manager.py" line="401" />
      <location filename="../manager.py" line="180" />
      <source>Managed environment</source>
      <translation>Lingkungan terkelola</translation></message>
    <message>
      <location filename="../manager.py" line="397" />
      <location filename="../manager.py" line="395" />
      <location filename="../manager.py" line="382" />
      <location filename="../manager.py" line="380" />
      <location filename="../manager.py" line="351" />
      <location filename="../manager.py" line="189" />
      <source>Calculating...</source>
      <translation>Menghitung...</translation></message>
    <message>
      <location filename="../manager.py" line="355" />
      <location filename="../manager.py" line="191" />
      <source>Open</source>
      <translation>Buka</translation></message>
    <message>
      <location filename="../manager.py" line="198" />
      <source>This is the private Python environment. It contains the interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, and the OCR launcher.</source>
      <translation>Ini adalah lingkungan Python privat. Berisi interpreter, pip, PaddlePaddle, PaddleOCR, PaddleX, dan peluncur OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="220" />
      <source>Storage locations and caches</source>
      <translation>Lokasi penyimpanan dan cache</translation></message>
    <message>
      <location filename="../manager.py" line="224" />
      <source>Refresh sizes</source>
      <translation>Segarkan ukuran</translation></message>
    <message>
      <location filename="../manager.py" line="245" />
      <source>Install / Repair OCR environment</source>
      <translation>Instal / perbaiki lingkungan OCR</translation></message>
    <message>
      <location filename="../manager.py" line="510" />
      <location filename="../manager.py" line="250" />
      <source>Remove environment</source>
      <translation>Hapus lingkungan</translation></message>
    <message>
      <location filename="../manager.py" line="281" />
      <source>PaddleX model cache</source>
      <translation>Cache model PaddleX</translation></message>
    <message>
      <location filename="../manager.py" line="283" />
      <source>Model weights used by PaddleX. The current OCR setup uses:
- Plain text: PP-OCRv5/PP-OCRv6 detection and recognition.
- Tables + Markdown/HTML: PP-StructureV3 uses PP-DocLayout_plus-L and PP-DocBlockLayout for layout, PP-LCNet_x1_0_table_cls for table classification, SLANeXt_wired and SLANet_plus for table structure, RT-DETR-L_wired_table_cell_det and RT-DETR-L_wireless_table_cell_det for table cells, and PP-OCRv5_mobile_det/rec for text. Markdown and HTML are two renderings of the same layout result.
- Formulas: PP-FormulaNet_plus-L, downloaded only when Recognize mathematical formulas (LaTeX) is enabled.
Models are downloaded on demand. Deleting them only forces a later re-download; other weights may remain from earlier PaddleOCR versions.</source>
      <translation>Bobot model yang digunakan PaddleX. Konfigurasi OCR saat ini menggunakan:
- Teks biasa: deteksi dan pengenalan PP-OCRv5/PP-OCRv6.
- Tabel + Markdown/HTML: PP-StructureV3 menggunakan PP-DocLayout_plus-L dan PP-DocBlockLayout untuk tata letak, PP-LCNet_x1_0_table_cls untuk klasifikasi tabel, SLANeXt_wired dan SLANet_plus untuk struktur tabel, RT-DETR-L_wired_table_cell_det dan RT-DETR-L_wireless_table_cell_det untuk sel tabel, serta PP-OCRv5_mobile_det/rec untuk teks. Markdown dan HTML adalah dua representasi dari hasil tata letak yang sama.
- Rumus: PP-FormulaNet_plus-L, hanya diunduh saat „Kenali rumus matematika (LaTeX)” diaktifkan.
Model diunduh sesuai kebutuhan. Menghapusnya hanya memaksa unduhan ulang; bobot lain mungkin tersisa dari versi PaddleOCR sebelumnya.</translation></message>
    <message>
      <location filename="../manager.py" line="303" />
      <source>PaddleOCR cache (legacy, optional)</source>
      <translation>Cache PaddleOCR (lama, opsional)</translation></message>
    <message>
      <location filename="../manager.py" line="305" />
      <source>Legacy cache used by older PaddleOCR releases and some old pipelines. Current PaddleOCR 3.x and PaddleX store their models in ~/.paddlex/official_models, so this folder is optional and normally absent. If it appears, deleting it only forces a later re-download.</source>
      <translation>Cache lama yang digunakan versi PaddleOCR sebelumnya dan beberapa alur lama. PaddleOCR 3.x dan PaddleX saat ini menyimpan model di ~/.paddlex/official_models, jadi folder ini opsional dan biasanya tidak ada. Jika muncul, menghapusnya hanya memaksa unduhan ulang.</translation></message>
    <message>
      <location filename="../manager.py" line="316" />
      <source>pip download cache</source>
      <translation>Cache unduhan pip</translation></message>
    <message>
      <location filename="../manager.py" line="318" />
      <source>Wheels and source archives downloaded by pip. This cache is not needed at runtime and can be cleared safely; it only makes a later reinstall faster.</source>
      <translation>Wheel dan arsip sumber yang diunduh pip. Cache ini tidak diperlukan saat berjalan dan dapat dikosongkan dengan aman; hanya mempercepat instalasi ulang berikutnya.</translation></message>
    <message>
      <location filename="../manager.py" line="327" />
      <source>Installed Python packages</source>
      <translation>Paket Python terpasang</translation></message>
    <message>
      <location filename="../manager.py" line="329" />
      <source>The Python packages and metadata installed inside the managed OCR environment. Use this directory to inspect the exact versions of PaddlePaddle, PaddleOCR, PaddleX, Protobuf, and their dependencies. Removing files here by hand breaks the OCR environment.</source>
      <translation>Paket dan metadata Python yang terpasang di lingkungan OCR terkelola. Gunakan folder ini untuk memeriksa versi tepat PaddlePaddle, PaddleOCR, PaddleX, Protobuf, dan dependensinya. Menghapus file di sini secara manual merusak lingkungan OCR.</translation></message>
    <message>
      <location filename="../manager.py" line="369" />
      <source>Ready. ksnip-pyqt6 can use this environment through the Script backend.</source>
      <translation>Siap. ksnip-pyqt6 dapat menggunakan lingkungan ini melalui backend Script.</translation></message>
    <message>
      <location filename="../manager.py" line="376" />
      <source>Not installed. Use 'Install / Repair OCR environment'.</source>
      <translation>Belum terpasang. Gunakan „Instal / perbaiki lingkungan OCR”.</translation></message>
    <message>
      <location filename="../manager.py" line="426" />
      <source>Not present (optional)</source>
      <translation>Tidak ada (opsional)</translation></message>
    <message>
      <location filename="../manager.py" line="441" />
      <location filename="../manager.py" line="434" />
      <source>Open folder</source>
      <translation>Buka folder</translation></message>
    <message>
      <location filename="../manager.py" line="435" />
      <source>This folder does not exist yet: %1</source>
      <translation>Folder ini belum ada: %1</translation></message>
    <message>
      <location filename="../manager.py" line="442" />
      <source>Could not open the folder with the system file manager.</source>
      <translation>Folder tidak dapat dibuka dengan pengelola berkas sistem.</translation></message>
    <message>
      <location filename="../manager.py" line="452" />
      <source>Preparing installation...</source>
      <translation>Menyiapkan instalasi...</translation></message>
    <message>
      <location filename="../manager.py" line="470" />
      <source>Installation complete. The Script backend has been configured.</source>
      <translation>Instalasi selesai. Backend Script telah dikonfigurasi.</translation></message>
    <message>
      <location filename="../manager.py" line="474" />
      <source>OCR environment ready</source>
      <translation>Lingkungan OCR siap</translation></message>
    <message>
      <location filename="../manager.py" line="475" />
      <source>PaddleOCR was installed in the private environment.

The OCR Script backend now points to its launcher.</source>
      <translation>PaddleOCR dipasang di lingkungan privat.

Backend OCR Script sekarang menunjuk ke peluncurnya.</translation></message>
    <message>
      <location filename="../manager.py" line="481" />
      <source>Installation failed.</source>
      <translation>Instalasi gagal.</translation></message>
    <message>
      <location filename="../manager.py" line="484" />
      <source>OCR installation failed</source>
      <translation>Instalasi OCR gagal</translation></message>
    <message>
      <location filename="../manager.py" line="485" />
      <source>Unknown installation error.</source>
      <translation>Kesalahan instalasi tidak diketahui.</translation></message>
    <message>
      <location filename="../manager.py" line="495" />
      <source>Remove OCR environment</source>
      <translation>Hapus lingkungan OCR</translation></message>
    <message>
      <location filename="../manager.py" line="496" />
      <source>Remove the private PaddleOCR environment?

Downloaded PaddleX models are not deleted.</source>
      <translation>Hapus lingkungan PaddleOCR privat?

Model PaddleX yang diunduh tidak akan dihapus.</translation></message>
    <message>
      <location filename="../manager.py" line="521" />
      <source>Installation in progress</source>
      <translation>Instalasi sedang berlangsung</translation></message>
    <message>
      <location filename="../manager.py" line="522" />
      <source>Wait for the OCR installation to finish before closing this window.</source>
      <translation>Tunggu hingga instalasi OCR selesai sebelum menutup jendela ini.</translation></message>
  <message><source>Not present</source><translation>Tidak ada</translation></message><message><source>Unavailable</source><translation>Tidak tersedia</translation></message></context>
</TS>
