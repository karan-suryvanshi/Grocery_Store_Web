import React from 'react';
import { CATEGORY_BAR_ITEMS } from '../data/AllData';

export const CategoryBar = () => {
  return (
    <section className="border-bottom bg-body">
      <div className="container py-2">
        <div className="d-flex flex-nowrap overflow-x-auto gap-4 py-1 no-scrollbar align-items-center justify-content-between">
          {CATEGORY_BAR_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#catalog-${item.id}`}
              className="d-flex align-items-center text-decoration-none text-dark hover-red gap-2 flex-shrink-0 group"
            >
              <div
                className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle p-1"
                style={{ width: '42px', height: '42px' }}
              >
                {item.isSale ? (
                  <i className="bi bi-percent fs-5 text-danger" aria-hidden="true"></i>
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    width="28"
                    height="28"
                    style={{ objectFit: 'contain' }}
                  />
                )}
              </div>
              <span className="fw-semibold fs-sm text-nowrap">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategoryBar;
