function SkeletonCard() {

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">

      {/* Image Placeholder */}

      <div className="h-60 bg-gray-300"></div>

      {/* Content */}

      <div className="p-5">

        {/* Title */}

        <div className="h-8 bg-gray-300 rounded w-3/4"></div>

        {/* Description */}

        <div className="mt-4 h-4 bg-gray-200 rounded"></div>

        <div className="mt-2 h-4 bg-gray-200 rounded w-5/6"></div>

        {/* Button */}

        <div className="mt-6 h-12 bg-gray-300 rounded-xl"></div>

      </div>

    </div>
  );
}

export default SkeletonCard;