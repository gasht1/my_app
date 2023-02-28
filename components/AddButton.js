const AddButton = ({ setClose }) => {
  return (
    <div
      onClick={() => setClose(false)}
      className=" p-3 m-r bg-red-500 w-60 border-r-3 text-white font-medium text-center cursor-pointer"
    >
      Add New flower
    </div>
  );
};

export default AddButton;
