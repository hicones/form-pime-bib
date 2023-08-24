interface ProgressBarProps {
  progress: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  return (
    <header className="progress-bar">
      <div
        className="progress-bar__fill items-center flex justify-end px-2"
        style={{ width: `${props.progress}%` }}
      >
        <p className="text-white text-xs font-light">{props.progress}</p>
      </div>
    </header>
  );
};

export default ProgressBar;
