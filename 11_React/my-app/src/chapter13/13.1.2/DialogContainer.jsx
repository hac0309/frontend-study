import Dialog from "./Dialog";

function DialogContainer() {
  return (
    <>
    {/* WelComeDialog */}
    <Dialog
      title="하루마리네집🐶🐱"
      message="🐶어서와용😼"
      color="blue"
    />

    {/* AlertDialog */}
    <Dialog
      title="하루마리네집🐶🐱"
      message="🐶🧨허락없이...들어오다니.....🏏😼"
      color="red"
    />
    </>
  );
};

export default DialogContainer;