import { useThemeStore } from "../themeStore";

type Props = {
  className?: string;
  close?: string;
};

export const ModalWrapper: React.FC<Props> = ({ className, children }) => {
  const setAttr = useThemeStore((state: any) => state.setAttr);
  return (
    <div
      onClick={() => {
        setAttr({
          path: "theme.modal.open",
          value: false,
        });
      }}
      className={`${className} cursor-pointer bg-opacity-60 fixed top-0 left-0 bg-black w-full h-full z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-screen-lg m-auto mt-28 shadow-xl cursor-auto"
      >
        {children}
      </div>
    </div>
  );
};
