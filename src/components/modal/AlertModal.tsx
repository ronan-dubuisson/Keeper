import { useQuery } from "react-query";

interface Props {
  message: string;
  timeToDisplayMilliSeconds: number;
  isOpen: boolean;
  closeModal: () => void;
}

function AlertModal({
  message,
  timeToDisplayMilliSeconds,
  isOpen,
  closeModal,
}: Props) {
  const timer = useQuery({
    queryKey: ["timer"],
    queryFn: () => delay(timeToDisplayMilliSeconds),
  });

  if (timer.data) closeModal();

  if (!isOpen) return null;

  return (
    <div className="flex justify-center">
      <div className="bg-brand-primary-400 text-brand fixed mt-20px top-150px">
        {message}
      </div>
    </div>
  );

  async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default AlertModal;
