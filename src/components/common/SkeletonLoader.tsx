interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  variant?: 'rectangle' | 'circle' | 'text';
  className?: string;
}

const SkeletonLoader = ({ 
  width = '100%', 
  height = '1rem', 
  variant = 'rectangle', 
  className = '' 
}: SkeletonLoaderProps) => {
  
  const baseClasses = "animate-pulse bg-gray-300 dark:bg-gray-700";
  
  const variantClasses = {
    rectangle: "rounded-md",
    circle: "rounded-full",
    text: "rounded-sm mb-2"
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};

export default SkeletonLoader;