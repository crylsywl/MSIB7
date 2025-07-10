import React from 'react';

export default function CourseDetails() {
  return (
    <div className="mb-8 ml-[150px]">
      <img src="/src/assets/assetsvivit/Banner.png" alt="Banner" className="w-full h-auto mb-6 rounded-2xl" />
      <h1 className="mb-4 text-4xl font-bold">JobReady CV Batch 5</h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-semibold">Rp 15.000</p>
        <p className="text-lg text-gray-500 line-through">Rp 50.000</p>
      </div>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Deskripsi</h2>
        <p className="text-justify">
          Ingin meningkatkan kualitas CV Anda untuk menonjol di mata rekruter?
          Layanan Review CV kami dirancang khusus untuk fresh graduate yang
          ingin tampil lebih profesional dan kompetitif di dunia kerja...
        </p>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-semibold">Ketentuan</h2>
        <p className="text-justify">
          Pastikan CV yang diunggah dalam format PDF dengan ukuran maksimal 2
          MB untuk proses review yang optimal. Setelah pembayaran
          dikonfirmasi, tim kami akan memulai proses review yang berlangsung
          selama 1-3 hari kerja...
        </p>
      </section>
    </div>
  );
}

