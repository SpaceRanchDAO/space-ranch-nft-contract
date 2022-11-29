interface MButtonProps {
  label: string;
  onClick: any;
}

const MButton = ({ label, onClick }: MButtonProps) => {
  return (
    <button className="bg-base-red hover:bg-base-orange text-white font-bold py-1 px-7 rounded" onClick={onClick}>
      {label}
    </button >
  )
}

export default MButton