import React, { useState } from 'react';

export default function PaymentModal({ onClose }) {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelectPayment = (paymentName) => {
    setSelectedPayment(paymentName);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#fffff0] p-6 rounded-lg max-w-3xl w-11/12">
        <h2 className="mb-6 text-3xl font-semibold">Pilih Metode Pembayaran:</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <PaymentOption
            name="Gopay"
            image="/src/assets/assetsvivit/gopay.png"
            fee={1000}
            total={16000}
            isSelected={selectedPayment === "Gopay"}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="OVO"
            image="/src/assets/assetsvivit/OVO.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === "OVO"}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="ShopeePay"
            image="/src/assets/assetsvivit/sopay.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === "ShopeePay"}
            onSelect={handleSelectPayment}
          />
          <PaymentOption
            name="Dana"
            image="/src/assets/assetsvivit/Dana.png"
            fee={2000}
            total={17000}
            isSelected={selectedPayment === "Dana"}
            onSelect={handleSelectPayment}
          />
        </div>
        <button
          onClick={onClose}
          style={{ boxShadow: 'inset 0px 4px 10px rgba(0, 0, 0, 0.3)' }}
          className="mt-6 ml-[140px] bg-[#FB6816] text-[#fffff0] font-semibold py-2 px-4 rounded-full shadow-inner w-[420px] shadow-lg active:scale-95 transition-transform duration-150"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}

function PaymentOption({ name, image, fee, total, isSelected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      className={`cursor-pointer bg-[#D2D2D2] p-4 rounded-lg flex items-center justify-between shadow-md hover:shadow-lg transition-shadow ${
        isSelected
          ? 'border-4 border-blue-500 transform scale-95 shadow-xl shadow-blue-300'
          : ''
      }`}
    >
      <img src={image} alt={name} className="w-auto h-16" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm">Biaya Transaksi Rp {fee.toLocaleString()}</p>
        <p className="font-semibold">Rp {total.toLocaleString()}</p>
      </div>
    </div>
  );
}
