import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
  styles?: string;
  variant?: string;
}

export const Button = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, variant, ...rest } = props;
  switch (variant) {
    case "primary":
      return <ButtonPrimary {...props} />;
    case "continue":
      return <ContinueButton {...props} />;
    case "noButtonPrimary":
      return <NoButtonPrimary {...props} />;
  }

  return <ButtonPrimary {...props} />;
};

export const ButtonPrimary = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, ...rest } = props;

  return (
    <button
      style={{
        width: size ? size : "130px",
      }}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center disabled:cursor-not-allowed disabled:opacity-30 p-2 text-primary font-bold text-base border border-primary rounded-full hover:bg-secondary transition ${styles}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const ContinueButton = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, ...rest } = props;

  return (
    <button
      style={{
        width: size ? size : "130px",
      }}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-between disabled:cursor-not-allowed disabled:opacity-30 px-2 py-1 text-primary font-bold text-base border border-primary rounded-full hover:bg-secondary transition ${styles}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const NoButtonPrimary = (props: ButtonProps) => {
  const { styles, children, size, disabled, onClick, ...rest } = props;

  return (
    <span
      style={{
        width: size ? size : "auto",
      }}
      onClick={onClick}
      className={`cursor-pointer flex justify-center disabled:cursor-not-allowed disabled:opacity-30 p-2 text-primary font-bold text-base border border-primary rounded-full hover:bg-secondary transition ${styles}`}
      {...rest}
    >
      {children}
    </span>
  );
};
