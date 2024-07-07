import React, { useState, useEffect } from "react";

const DiaperCard = ({
  imgSrc,
  imgHeight = "h-36",
  imgWidth = "w-1/2",
  title,
  quantityProp,
  startingTotal,
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [amountNeeded, setAmountNeeded] = useState(startingTotal);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const fetchCurrentQuantity = async () => {
    try {
      const response = await fetch(
        `http://24.144.94.207:3001/api/diapers/${title}/quantity`
      );
      const result = await response.json();
      const totalBought = result.total_bought || 0;
      setAmountNeeded(startingTotal - totalBought);
    } catch (error) {
      console.error("Error fetching current quantity:", error);
    }
  };

  useEffect(() => {
    fetchCurrentQuantity();
  }, []);

  const handleSubmit = async () => {
    const endpoint =
      quantityProp === "1"
        ? "http://24.144.94.207:3001/api/diapers"
        : "http://24.144.94.207:3001/api/beer";
    const data =
      quantityProp === "1"
        ? { name, quantity: parseInt(quantity, 10), title }
        : { name, title };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);

      // Clear the form after submission
      setName("");
      setQuantity(0);

      // Refresh the current quantity
      fetchCurrentQuantity();

      alert("Submission successful!");
    } catch (error) {
      console.error("There was a problem with the submission:", error);
      alert("Submission failed.");
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden border-2 border-gray-300">
      <img
        src={imgSrc}
        alt="Diaper"
        className={`${imgWidth} ${imgHeight} object-cover`}
      />
      <div className="p-2">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        {quantityProp === "1" && (
          <div className="mb-2">
            <p className="text-gray-700">Amount Needed: {amountNeeded}</p>
          </div>
        )}
        <div className="mb-2">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full px-2 py-1 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {quantityProp === "1" && (
          <div className="mb-2">
            <label className="block text-gray-700">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full px-2 py-1 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        )}
        <div className="text-center mt-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaperCard;
