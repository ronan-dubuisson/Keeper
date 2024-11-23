import { useQuery } from "react-query";

interface Props {
  message: string;
  timeToDisplayMilliSeconds: number;
  closeModal: () => void;
}

function AlertModal({ message, timeToDisplayMilliSeconds, closeModal }: Props) {
  const timer = useQuery({
    queryKey: ["timer"],
    queryFn: () => delay(timeToDisplayMilliSeconds),
  });

  if (timer.data) closeModal();

  return <div>{message}</div>;

  async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default AlertModal;
