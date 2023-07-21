import styles from "../styles/alert.module.css";

type AlertProps = {
  text: string;
};

const Alert = ({ text }: AlertProps) => {
  return (
    <div className="fixed right-0 z-50 flex justify-center w-full bottom-5">
      <div
        className={`flex items-center px-4 py-2 space-x-2 text-center shadow-md rounded-xl bg-slate-100 dark:bg-slate-700 success ${styles.success}`}
      >
        <i className="text-green-500 ri-check-double-fill"></i>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
