import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../data/siteData';

export const FloatingActionBtn: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Halo%20Jasa%20Temanggung%2C%20saya%20ingin%20konsultasi`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float-btn"
      title="Hubungi Jasa Temanggung via WhatsApp"
    >
      <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.155-.544-1.874-.775-3.072-2.693-3.165-2.817-.093-.124-.757-1.008-.757-1.924 0-.916.48-1.365.651-1.55.171-.186.375-.232.5-.232.124 0 .25.002.358.007.114.006.267-.043.417.319.155.375.529 1.291.575 1.385.047.093.078.203.016.327-.062.124-.094.202-.187.311-.093.11-.197.246-.281.33-.094.094-.192.196-.083.383.11.188.487.804 1.045 1.302.719.64 1.325.838 1.512.932.187.094.296.078.405-.047.11-.125.468-.544.593-.731.124-.187.25-.156.421-.093.171.062 1.092.515 1.28.608.187.094.312.14.358.219.047.078.047.452-.097.857z" />
      </svg>
      <span>Konsultasi WA</span>
    </a>
  );
};
