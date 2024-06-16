'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { clearCookies } from './actions';
import styles from './SetCheckoutForm.module.scss';

export default function SetCheckOutForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const router = useRouter();

  const handleCheckout = async () => {
    // Clear cookies
    await clearCookies();
    // Clear input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setCity('');
    setPostalCode('');
    setCountry('');
    setCreditCard('');
    setExpirationDate('');
    setSecurityCode('');
    // Redirect to Thank You page
    router.push('/checkout/thank-you');
  };

  return (
    <div>
      <div className={styles.checkoutForm}>
        <h1>Checkout</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <div>
              <h3>Contact Information</h3>
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                value={firstName}
                placeholder="First name"
                onChange={(event) => setFirstName(event.currentTarget.value)}
                required
              />
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                value={lastName}
                placeholder="Last name"
                onChange={(event) => setLastName(event.currentTarget.value)}
                required
              />
              <label htmlFor="email">E-Mail Address</label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="your@email.com"
                onChange={(event) => setEmail(event.currentTarget.value)}
                required
              />
            </div>

            <div>
              <h3>Address Information</h3>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                value={address}
                placeholder="Address"
                onChange={(event) => setAddress(event.currentTarget.value)}
                required
              />
              <label htmlFor="city">City</label>
              <input
                id="city"
                value={city}
                placeholder="City"
                onChange={(event) => setCity(event.currentTarget.value)}
                required
              />
              <label htmlFor="postalCode">Postal Code</label>
              <input
                id="postalCode"
                value={postalCode}
                placeholder="Postal Code"
                pattern="\d*"
                inputMode="numeric"
                onChange={(event) => setPostalCode(event.currentTarget.value)}
                required
              />
              <label htmlFor="country">Country</label>
              <input
                id="country"
                value={country}
                placeholder="Country"
                onChange={(event) => setCountry(event.currentTarget.value)}
                required
              />
            </div>
            <div>
              <h3>Credit Card Information</h3>
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <input
                id="creditCardNumber"
                value={creditCard}
                placeholder="Credit Card Number"
                required
                onChange={(event) => setCreditCard(event.currentTarget.value)}
              />
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                id="expirationDate"
                value={expirationDate}
                placeholder="MM / YYYY"
                required
                onChange={(event) =>
                  setExpirationDate(event.currentTarget.value)
                }
              />
              <label htmlFor="securityCode">Security Code</label>
              <input
                id="securityCode"
                value={securityCode}
                placeholder="CVC"
                required
                onChange={(event) => setSecurityCode(event.currentTarget.value)}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleCheckout()}
            data-test-id="checkout-confirm-order"
            className={styles.checkOutButton}
            disabled={
              !firstName ||
              !lastName ||
              !email ||
              !address ||
              !city ||
              !postalCode ||
              !country ||
              !creditCard ||
              !expirationDate ||
              !securityCode
            }
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
