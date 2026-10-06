import { useState } from 'react';
import { useDelivery } from '../context/DeliveryContext';

export const DeliveryDrawer = () => {
    const {
        isDeliveryOpen,
        setIsDeliveryOpen,
        mode,
        setMode,
        selectedAddress,
        setSelectedAddress,
        selectedStore,
    } = useDelivery();

    const [isAddingNew, setIsAddingNew] = useState(false);
    const [street, setStreet] = useState(selectedAddress?.street ?? '');
    const [city, setCity] = useState(selectedAddress?.city ?? '');
    const [state, setState] = useState(selectedAddress?.state ?? 'Maharashtra');
    const [postcode, setPostcode] = useState(selectedAddress?.postcode ?? '');

    if (!isDeliveryOpen) return null;

    const handleAddNew = (e) => {
        e.preventDefault();
        if (!street.trim() || !city.trim()) return;
        setSelectedAddress({ street: street.trim(), city: city.trim(), state, postcode: postcode.trim() });
        setIsAddingNew(false);
    };

    return (
        <>
            {/* Backdrop */}
            <div className='fade show modal-backdrop'
                style={{ zIndex: 1045 }}
                onClick={() => setIsDeliveryOpen(false)} />

            {/* Offcanvas drawer */}
            <div className='offcanvas offcanvas-end show border-0 shadow-lg d-flex flex-column'
                style={{
                    visibility: 'visible',
                    zIndex: 1050,
                    width: '480px',
                    maxWidth: '100vw',
                }}
                tabIndex="-1">

                {/* Header */}
                <div className='offcanvas-header flex-column align-items-start border-bottom pb-3'>
                    <div className='d-flex align-items-center justify-content-between w-100 mb-3'>
                        <h5 className='offcanvas-title fw-bold'>Delivery Option</h5>
                        <button type='button'
                            className='btn-close'
                            onClick={() => setIsDeliveryOpen(false)}
                            aria-label='close'>
                        </button>
                    </div>

                    {/* mode Tabs */}

                    <div className="btn-group w-100 p-1 bg-light rounded-pill" role="group">
                        <button
                            type="button"
                            className={`btn rounded-pill fs-sm fw-semibold py-2 ${mode === 'delivery' ? 'btn-white shadow-sm text-dark bg-white' : 'btn-light text-body-secondary border-0'
                                }`}
                            onClick={() => setMode('delivery')}
                        >
                            <i className="bi bi-truck me-2"></i>Delivery
                        </button>
                        <button
                            type="button"
                            className={`btn rounded-pill fs-sm fw-semibold py-2 ${mode === 'pickup' ? 'btn-white shadow-sm text-dark bg-white' : 'btn-light text-body-secondary border-0'
                                }`}
                            onClick={() => setMode('pickup')}
                        >
                            <i className="bi bi-shop me-2"></i>Pickup
                        </button>
                    </div>
                </div>
                {/* Body */}
                <div className="offcanvas-body flex-grow-1 overflow-y-auto p-4">
                    {mode === 'delivery' ? (
                        <div>
                            {!isAddingNew ? (
                                <>
                                    <div className="p-3 rounded-4 border border-danger bg-danger-subtle mb-4">
                                        <span className="d-block fw-bold fs-sm text-dark">
                                            {selectedAddress?.street || 'No delivery address selected'}
                                        </span>
                                        {(selectedAddress?.city || selectedAddress?.state || selectedAddress?.postcode) && (
                                            <span className="d-block fs-xs text-body-secondary">
                                                {[selectedAddress.city, selectedAddress.state, selectedAddress.postcode].filter(Boolean).join(', ')}
                                            </span>
                                        )}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setIsAddingNew(true)}
                                        className="btn btn-outline-danger w-100 rounded-pill py-2 fs-sm fw-semibold d-flex align-items-center justify-content-center gap-2"
                                    >
                                        <i className="bi bi-plus-lg"></i>
                                        <span>Add delivery address</span>
                                    </button>
                                </>
                            ) : (
                                <form onSubmit={handleAddNew}>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6 className="fw-bold mb-0">Add an address</h6>
                                        <button
                                            type="button"
                                            onClick={() => setIsAddingNew(false)}
                                            className="btn btn-link fs-sm text-decoration-none p-0 text-dark"
                                        >
                                            Back
                                        </button>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fs-xs fw-semibold">Street Address *</label>
                                        <input
                                            type="text"
                                            required
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                            placeholder="e.g. 123 Main Street, Apt 4B"
                                            className="form-control rounded-pill fs-sm py-2"
                                        />
                                    </div>

                                    <div className="row g-2 mb-3">
                                        <div className="col-4">
                                            <label className="form-label fs-xs fw-semibold">City *</label>
                                            <input
                                                type="text"
                                                required
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                placeholder="Pune"
                                                className="form-control rounded-pill fs-sm py-2"
                                            />
                                        </div>
                                        <div className="col-4">
                                            <label className="form-label fs-xs fw-semibold">State</label>
                                            <select
                                                className="form-select rounded-pill fs-sm py-2"
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                            >
                                                <option value="Maharashtra">MH</option>
                                                <option value="Pune">MH</option>
                                                <option value="Karnataka">KA</option>
                                                <option value="Tamil Nadu">TN</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                            <label className="form-label fs-xs fw-semibold">Postcode *</label>
                                            <input
                                                type="text"
                                                required
                                                value={postcode}
                                                onChange={(e) => setPostcode(e.target.value)}
                                                placeholder="411016"
                                                className="form-control rounded-pill fs-sm py-2"
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-danger w-100 rounded-pill py-2 fs-sm fw-semibold">
                                        Save address
                                    </button>
                                </form>
                            )}
                        </div>
                    ) : (
                        <div className="d-flex flex-column gap-3">
                            <span className="fs-xs text-uppercase fw-bold text-body-secondary">
                                Select Store for pickup:
                            </span>
                            <div className="p-3 rounded-4 border border-danger bg-danger-subtle">
                                <span className="d-block fw-bold fs-sm text-dark">
                                    {selectedStore?.name || 'No pickup store selected'}
                                </span>
                                {selectedStore?.address && (
                                    <span className="d-block fs-xs text-body-secondary my-1">{selectedStore.address}</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="offcanvas-footer border-top p-4 bg-body">
                    <button
                        type="button"
                        className="btn btn-danger w-100 rounded-pill py-2 fs-sm fw-semibold"
                        onClick={() => setIsDeliveryOpen(false)}
                    >
                        Confirm address
                    </button>
                </div>
            </div>
        </>
    );
};
export default DeliveryDrawer;
