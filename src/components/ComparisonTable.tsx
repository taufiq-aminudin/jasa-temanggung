import React, { useState, useMemo } from 'react';
import { COMPARISON_DATA } from '../data/siteData';

interface ComparisonTableProps {
  navigate: (path: string) => void;
}

type SortField = 'cost' | 'duration' | 'none';
type SortDirection = 'asc' | 'desc';

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ navigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('none');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const filteredData = useMemo(() => {
    let result = [...COMPARISON_DATA];
    if (filterCategory !== 'all') {
      result = result.filter(item => item.category === filterCategory);
    }

    if (sortField === 'cost') {
      result.sort((a, b) => {
        return sortDirection === 'asc' ? a.costNum - b.costNum : b.costNum - a.costNum;
      });
    } else if (sortField === 'duration') {
      result.sort((a, b) => {
        return sortDirection === 'asc' ? a.durationNum - b.durationNum : b.durationNum - a.durationNum;
      });
    }

    return result;
  }, [filterCategory, sortField, sortDirection]);

  const handleSort = (field: 'cost' | 'duration') => {
    if (sortField === field) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else {
        setSortField('none');
        setSortDirection('asc');
      }
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleExportCsv = () => {
    setIsExporting(true);
    const headers = ['No', 'Nama Layanan', 'Sektor', 'Estimasi Biaya', 'Nilai Min (IDR)', 'Durasi Kerja', 'Durasi Min (Hari)', 'Output Utama'];
    const rows = filteredData.map((item, idx) => [
      idx + 1,
      `"${item.name}"`,
      `"${item.categoryName}"`,
      `"${item.cost}"`,
      item.costNum,
      `"${item.duration}"`,
      item.durationNum,
      `"${item.output}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `estimasi-jasa-temanggung-${filterCategory}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => {
      URL.revokeObjectURL(url);
      setIsExporting(false);
    }, 1500);
  };

  const costSummary = useMemo(() => {
    if (filteredData.length === 0) return '-';
    const min = Math.min(...filteredData.map(d => d.costNum));
    const max = Math.max(...filteredData.map(d => d.costNum));
    const format = (n: number) => {
      if (n >= 1000000) return `Rp ${(n / 1000000).toFixed(1)} Jt`;
      return `Rp ${Math.round(n / 1000)}rb`;
    };
    return min === max ? format(min) : `${format(min)} – ${format(max)}`;
  }, [filteredData]);

  const durationSummary = useMemo(() => {
    if (filteredData.length === 0) return '-';
    const min = Math.min(...filteredData.map(d => d.durationNum));
    const max = Math.max(...filteredData.map(d => d.durationNum));
    return min === max ? `${min} Hari` : `${min} – ${max} Hari`;
  }, [filteredData]);

  return (
    <div style={{ marginTop: '36px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '16px' }}>
        <div className="testi-filter-wrap" style={{ margin: 0, justifyContent: 'flex-start' }}>
          <button
            type="button"
            className={`testi-filter-btn ${filterCategory === 'all' ? 'active' : ''}`}
            onClick={() => setFilterCategory('all')}
          >
            Semua Sektor (8)
          </button>
          <button
            type="button"
            className={`testi-filter-btn ${filterCategory === 'dokumen' ? 'active' : ''}`}
            onClick={() => setFilterCategory('dokumen')}
          >
            Legalitas &amp; Dokumen
          </button>
          <button
            type="button"
            className={`testi-filter-btn ${filterCategory === 'kendaraan' ? 'active' : ''}`}
            onClick={() => setFilterCategory('kendaraan')}
          >
            Samsat Kendaraan
          </button>
          <button
            type="button"
            className={`testi-filter-btn ${filterCategory === 'digital' ? 'active' : ''}`}
            onClick={() => setFilterCategory('digital')}
          >
            Digital &amp; Pemasaran
          </button>
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          style={{ fontSize: '13px', padding: '8px 16px' }}
          onClick={handleExportCsv}
        >
          {isExporting ? '✓ Berhasil Diunduh' : '📥 Unduh Tabel (.CSV)'}
        </button>
      </div>

      <div className="comparison-table-wrapper">
        <div className="comparison-summary-bar">
          <div className="summary-stat-group">
            <div className="summary-stat-item">
              <span className="label">Layanan Ditampilkan</span>
              <strong className="val">{filteredData.length} Layanan</strong>
            </div>
            <div className="summary-stat-item">
              <span className="label">Rentang Estimasi Biaya</span>
              <strong className="val">{costSummary}</strong>
            </div>
            <div className="summary-stat-item">
              <span className="label">Rentang Waktu Kerja</span>
              <strong className="val">{durationSummary}</strong>
            </div>
          </div>
          <div style={{ fontSize: '12px', color: '#cbd5e1' }}>
            💡 Klik judul kolom untuk mengurutkan biaya &amp; waktu
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Layanan &amp; Sektor</th>
                <th
                  className="sortable-th"
                  onClick={() => handleSort('cost')}
                  title="Klik untuk mengurutkan biaya"
                >
                  Estimasi Biaya
                  <span className="sort-icon">
                    {sortField === 'cost' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ↕'}
                  </span>
                </th>
                <th
                  className="sortable-th"
                  onClick={() => handleSort('duration')}
                  title="Klik untuk mengurutkan durasi"
                >
                  Durasi Kerja
                  <span className="sort-icon">
                    {sortField === 'duration' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ' ↕'}
                  </span>
                </th>
                <th>Output / Berkas Utama</th>
                <th style={{ textAlign: 'right' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong style={{ display: 'block', color: 'var(--ink)' }}>{item.name}</strong>
                    <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{item.categoryName}</span>
                  </td>
                  <td>
                    <span className="price-pill">{item.cost}</span>
                  </td>
                  <td>
                    <span className="time-pill">⏱ {item.duration}</span>
                  </td>
                  <td style={{ fontSize: '13px' }}>{item.output}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button
                      type="button"
                      className="table-cta-btn"
                      onClick={() => navigate(`/jasa/${item.serviceId}`)}
                    >
                      Detail →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
