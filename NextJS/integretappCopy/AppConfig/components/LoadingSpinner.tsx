const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;