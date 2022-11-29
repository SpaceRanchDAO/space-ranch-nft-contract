interface MButtonProps {
  label: string;
  onClick: any;
}

const MButton = ({ label, onClick }: MButtonProps) => {
  return (
<<<<<<< HEAD
    <button className="bg-base-red hover:bg-base-orange text-white font-bold py-1 px-7 rounded-md" onClick={onClick}>
=======
    <button className="bg-black hover:bg-base-red-dark text-white font-bold py-1 px-7 rounded" onClick={onClick}>
>>>>>>> a8c72412c8e0e4a4798f81ca3f059ad1692385c1
      {label}
    </button >
  )
}

export default MButton