

const StatusMessage = ({ type = "loading", message = "" }) => {
  const isError = type === "error";

  return (
    <div className="flex flex-col items-center justify-center h-64 text-center p-6">
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full ${
          isError ? "bg-red-100 text-red-500" : "bg-blue-100 text-blue-500"
        }`}
      >
        {isError ? (
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 9v2m0 4h.01m-.01-12a9 9 0 110 18 9 9 0 010-18z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 animate-spin"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        )}
      </div>
      <p className="mt-4 text-gray-700 text-lg">
        {message || (isError ? "Something went wrong!Page Not Found  404 " : "Loading...")}
      </p>
    </div>
  );
};

export default StatusMessage;
