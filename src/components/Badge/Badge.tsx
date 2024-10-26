interface BadgeProps {
  label: string;
}
const Badge = ({ label }: BadgeProps) => {
  return (
    <div
      className={
        "border border-green/15 bg-green/5 rounded-32 text-button text-green px-4 whitespace-nowrap"
      }
    >
      {label}
    </div>
  );
};
export default Badge;
