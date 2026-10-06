import React, { createContext, useContext, useState } from 'react';

const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState({ street: 'Shivajinagar,pune' });
  const [selectedStore, setSelectedStore] = useState({ name: 'Fresh Cart Market' });
  const [mode, setMode] = useState('delivery');
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

  return (
    <DeliveryContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        selectedStore,
        setSelectedStore,
        mode,
        setMode,
        isDeliveryOpen,
        setIsDeliveryOpen,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};

export const useDelivery = () => {
  const context = useContext(DeliveryContext);

  if (!context) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  }

  return context;
};

export default DeliveryContext;
