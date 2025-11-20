export const DetailRow = ({ label, value }: { label: string; value: React.ReactNode }) => {
  return (
    <p>
      <span className="text-gray-500">{label}: </span>
      <span className="font-medium">{value}</span>
    </p>
  )
}
