import { Dispatch, SetStateAction } from "react";


interface SideProps {
  logopath: string;
  className: string;
  setSide: () => void;
  altTitle: string;
  setSideChoosen: Dispatch<SetStateAction<boolean>>;
}
/**
 * component that reperents one button of light or dark side
 * @param logopath path to displayed picture
 * @param className name of passed css class
 * @param setSide method to trigger filtering process of characters in context
 * @param altTitle alternative title of picture
 * @param setSideChoosen boolean to determine if user has choosen a side to trigger conditional rendering
 * @returns the button with light or dark side logo
 */

export const SideImageButton = ({
  logopath,
  className,
  setSide,
  altTitle,
  setSideChoosen,
}: SideProps) => {
  return (
    <div>
      <img
        src={logopath}
        className={className}
        alt={altTitle}
        onClick={() => {
          setSide();
          setSideChoosen(true);
        }}
      />
    </div>
  );
};
