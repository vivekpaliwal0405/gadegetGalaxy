import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Checkout = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCheckout = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/SignUp');
        return;
      }

      const userId = JSON.parse(atob(token.split('.')[1])).id;

      try {
        const response = await axios.get(`http://localhost:4001/checkout/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Do something with response.data if needed
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCheckout();
  }, [navigate]);

  const initialFormState = {
    address: '',
    apartment: '',
    city: '',
    state: '',
    postalcode: '',
    phone: '',
    country: 'India',
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCheckoutSubmit = async (ev) => {
    ev.preventDefault();

    if (Object.values(form).every((field) => field.trim() !== '')) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:4001/checkout', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (response.ok) {
          console.log('User data:', data);
          setForm(initialFormState);
          // Navigate to a success page or show a success message
          navigate('/order-confirmation');
        } else {
          alert(data.error || 'An unknown error occurred');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const location = useLocation();
  const { products } = location.state || { products: [] };

  if (!products.length) {
    return <div className="text-gray-500">No items to checkout.</div>;
  }

  const subtotal = products.reduce((acc, product) => acc + product.productId.price * product.quantity, 0);
  const shipping = 99.00; // Example shipping cost
  const taxes = (subtotal * 0.086).toFixed(2); // Example tax rate
  const total = (subtotal + shipping + parseFloat(taxes)).toFixed(2);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleCheckoutSubmit} className="flex flex-col md:flex-row">
          {/* Contact and Shipping Information */}
          <div className="flex-1 p-4">
            <h2 className="text-lg font-semibold mb-4">Contact information</h2>
            <div className="mb-6">
              <label className="block mb-1">Phone number</label>
              <input
                type="text"
                name="phone"
                className="w-full border border-gray-300 p-2 rounded"
                onChange={handleChange}
                value={form.phone}
                required
              />
            </div>

            <h2 className="text-lg font-semibold mb-4">Shipping information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={form.address}
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-1">Apartment, suite, etc.</label>
                <input
                  type="text"
                  name="apartment"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={form.apartment}
                  required
                />
              </div>
              <div>
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={form.city}
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Country</label>
                <select
                  name="country"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={form.country}
                  required
                >
                  <option>India</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">State / Province</label>
                <input
                  type="text"
                  name="state"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={form.state}
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Postal code</label>
                <input
                  type="text"
                  name="postalcode"
                  className="w-full border border-gray-300 p-2 rounded"
                  onChange={handleChange}
                  value={form.postalcode}
                  required
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mx-auto max-w-7xl px-2 lg:px-0">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Checkout</h1>
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.productId._id} className="flex py-6 sm:py-6">
                    <div className="flex-shrink-0">
                      <img
                        src={product.productId.img}
                        alt={product.productId.productName}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <Link to={`/Singleproduct/${product.productId._id}`} className="font-semibold text-black">
                                {product.productId.productName}
                              </Link>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">{product.productId.category}</p>
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-sm font-medium text-gray-900">₹{product.productId.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹{subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>₹{shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Taxes</p>
                <p>₹{taxes}</p>
              </div>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <p>Total</p>
              <p>₹{total}</p>
            </div>
            <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg">Confirm order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
