import { useQuery } from "react-query";
import Border from "./ui/Border";
import Positioning from "./ui/Positioning";

interface Props {
  message: string;
  timeToDisplayMilliSeconds: number;
  isOpen: boolean;
  closeModal: () => void;
}

function Alert({
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
    <Positioning position="absolute" location="TOP">
      <Border borderRadius="SMALL">
        <div className="bg-brand-primary-400 text-brand-secundary-300 p-10px">
          {message}
        </div>
      </Border>
    </Positioning>
  );

  async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default Alert;
