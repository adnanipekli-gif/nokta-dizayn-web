'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterGroup {
  label: string;
  options: string[];
}

const filterGroups: FilterGroup[] = [
  {
    label: 'Kullanım Alanı',
    options: [
      'Süpermarket & Hipermarket',
      'Mini Market',
      'Kasap & Şarküteri',
      'Pastane & Kafe',
      'Petrol İstasyonu',
      'Endüstriyel',
    ],
  },
  {
    label: 'Soğutma Tipi',
    options: ['Buzdolabı (+2°C / +10°C)', 'Dondurucu (-18°C / -22°C)', 'Kombine', 'Merkezi Sistem'],
  },
  {
    label: 'Ürün Grubu',
    options: ['Servis Reyonları', 'Dikey Reyonlar', 'Havuz Dolaplar', 'Kondenser', 'Chiller', 'Soğuk Oda'],
  },
];

interface FilterSidebarProps {
  onFilterChange?: (filters: Record<string, string[]>) => void;
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(['Kullanım Alanı']));
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const toggleOption = (group: string, option: string) => {
    setSelected((prev) => {
      const current = prev[group] || [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      const updated = { ...prev, [group]: next };
      onFilterChange?.(updated);
      return updated;
    });
  };

  const totalSelected = Object.values(selected).flat().length;

  return (
    <aside className="w-64 shrink-0">
      <div className="sticky top-24 rounded-2xl border border-[#D9E1EA] overflow-hidden bg-white">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#D9E1EA]">
          <span className="font-semibold text-[#071B34] text-sm">Filtrele</span>
          {totalSelected > 0 && (
            <button
              onClick={() => { setSelected({}); onFilterChange?.({}); }}
              className="text-xs text-[#0A6DB8] hover:underline"
            >
              Temizle ({totalSelected})
            </button>
          )}
        </div>
        {filterGroups.map((group) => {
          const isOpen = openGroups.has(group.label);
          const groupSelected = selected[group.label] || [];
          return (
            <div key={group.label} className="border-b border-[#D9E1EA] last:border-0">
              <button
                onClick={() => toggleGroup(group.label)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-[#071B34] hover:bg-[#F7F9FC] transition-colors"
                aria-expanded={isOpen}
              >
                <span>
                  {group.label}
                  {groupSelected.length > 0 && (
                    <span className="ml-2 text-xs bg-[#0A6DB8] text-white rounded-full px-1.5 py-0.5">
                      {groupSelected.length}
                    </span>
                  )}
                </span>
                <ChevronDown
                  size={14}
                  className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 space-y-2">
                  {group.options.map((option) => {
                    const checked = groupSelected.includes(option);
                    return (
                      <label
                        key={option}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleOption(group.label, option)}
                          className="w-4 h-4 rounded border-[#D9E1EA] text-[#0A6DB8] focus:ring-[#11B5FF]"
                        />
                        <span className="text-sm text-[#475569] group-hover:text-[#071B34] transition-colors">
                          {option}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
