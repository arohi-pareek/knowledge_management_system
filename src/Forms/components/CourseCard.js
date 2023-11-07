import React, { useState } from "react";

function CourseCard({ item, onSubscribe, subscribed }) {
  const [isSubscribed, setIsSubscribed] = useState(subscribed);

  const handleSubscribe = () => {
    onSubscribe(item);
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div
      className={`Cbox ${isSubscribed ? "shrunken-card" : ""}`}
      onClick={handleSubscribe}
    >
      {/* Card content */}
    </div>
  );
}

export default CourseCard;
