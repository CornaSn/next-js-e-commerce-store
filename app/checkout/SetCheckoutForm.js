'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { clearCookies } from './actions';
import styles from './SetCheckoutForm.module.scss';

export default function SetCheckOutForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const router = useRouter();

  const handleCheckout = async () => {
    // Clear cookies
    await clearCookies();
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
              />
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                value={lastName}
                placeholder="Last name"
                onChange={(event) => setLastName(event.currentTarget.value)}
              />
              <label htmlFor="email">E-Mail Address</label>
              <input
                id="email"
                type="email"
                value={emailAddress}
                placeholder="your@email.com"
                onChange={(event) => setEmailAddress(event.currentTarget.value)}
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
              />
              <label htmlFor="city">City</label>
              <input
                id="city"
                value={city}
                placeholder="City"
                onChange={(event) => setCity(event.currentTarget.value)}
              />
              <label htmlFor="postalCode">Postal Code</label>
              <input
                id="postalCode"
                value={postalCode}
                placeholder="Postal Code"
                pattern="\d*"
                inputMode="numeric"
                onChange={(event) => setPostalCode(event.currentTarget.value)}
              />
              <label htmlFor="country">Country</label>
              <input
                id="country"
                value={country}
                placeholder="Country"
                onChange={(event) => setCountry(event.currentTarget.value)}
              />
            </div>
            <div>
              <h3>Credit Card Information</h3>
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <input
                id="creditCardNumber"
                value={creditCardNumber}
                placeholder="Credit Card Number"
                onChange={(event) =>
                  setCreditCardNumber(event.currentTarget.value)
                }
              />
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                id="expirationDate"
                value={expirationDate}
                placeholder="MM / YYYY"
                onChange={(event) =>
                  setExpirationDate(event.currentTarget.value)
                }
              />
              <label htmlFor="securityCode">Security Code</label>
              <input
                id="securityCode"
                value={securityCode}
                placeholder="CVC"
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
              !emailAddress ||
              !address ||
              !city ||
              !postalCode ||
              !country ||
              !creditCardNumber ||
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
