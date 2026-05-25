interface Spec {
  label: string;
  value: string;
}

interface TechnicalSpecsTableProps {
  specs: Spec[];
  title?: string;
}

export function TechnicalSpecsTable({ specs, title = 'Teknik Özellikler' }: TechnicalSpecsTableProps) {
  return (
    <div className="rounded-2xl border border-[#D9E1EA] overflow-hidden">
      <div className="bg-[#071B34] px-6 py-4">
        <h3 className="font-mono text-sm text-[#E9EEF3] uppercase tracking-widest">{title}</h3>
      </div>
      <table className="w-full">
        <tbody>
          {specs.map((spec, i) => (
            <tr
              key={spec.label}
              className={i % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FC]'}
            >
              <td className="px-6 py-3 text-sm font-medium text-[#071B34] w-1/2 border-r border-[#D9E1EA]">
                {spec.label}
              </td>
              <td className="px-6 py-3 font-mono text-sm text-[#0A6DB8]">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
