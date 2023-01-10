import { FiCopy } from "react-icons/fi";

interface Props {
  size?: string;
  content: string
}
export const ClipBoard: React.FC<Props> = ({ content, size = "xl" }) => (
  <div onClick={() => alert(`copy to clip: ${content}`)}>
    <FiCopy className="text-xl" />
  </div>
);
