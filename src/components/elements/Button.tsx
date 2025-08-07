import { BiLoaderCircle } from 'react-icons/bi';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  background?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  color,
  background,
  className,
  onClick,
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'all__trans flex w-full cursor-pointer items-center justify-center gap-2 px-6 py-2 hover:-translate-y-1',
        background ?? 'bg-primary-default hover:bg-primary-default',
        color ?? 'text-white',
        className
      )}
      disabled={disabled || loading}
    >
      {loading && <BiLoaderCircle className="animate-spin text-2xl" />}
      <div>{children}</div>
    </button>
  );
};

export default Button;
