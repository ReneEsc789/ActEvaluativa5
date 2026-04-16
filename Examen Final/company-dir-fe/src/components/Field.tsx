interface FieldProps {
  label: string;
  value: string;
}

export default function Field({ label, value }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="text-slate-800 font-medium">{value}</p>
    </div>
  );
}
