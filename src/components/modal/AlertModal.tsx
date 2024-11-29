import { useQuery } from "react-query";
import Border from "../ui/Border";

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
    <div className="fixed top-150px flex justify-center w-100vw">
      <Border>
        <div className="text-brand fixed mt-20px">{message}</div>
      </Border>
    </div>
  );

  async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default AlertModal;
