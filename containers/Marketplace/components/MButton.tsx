interface MButtonProps {
  label: string;
  onClick: any;
}

const MButton = ({ label, onClick }: MButtonProps) => {
  return (
    <button className="bg-black hover:bg-base-red-dark text-white font-bold py-1 px-7 rounded" onClick={onClick}>
      {label}
    </button >
  )
}

export default MButton