'use client';

import { useState } from 'react';

export default function SetCheckOutForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCardNumber, setcreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            <h3>Contact Information</h3>
            <div>
              <div>
                <label htmlFor="First name"> First name</label>
                <input
                  id="First name"
                  data-test-id="checkout-first-name"
                  value={firstName}
                  placeholder="First name"
                  onChange={(event) => setFirstName(event.currentTarget.value)}
                />
                <label htmlFor="Last name"> Last name</label>
                <input
                  id="Last name"
                  data-test-id="checkout-last-name"
                  value={lastName}
                  placeholder="First name"
                  onChange={(event) => setLastName(event.currentTarget.value)}
                />
              </div>
              <div>
                <label htmlFor="email">E-Mail Address</label>
                <input
                  id="email"
                  data-test-id="checkout-email"
                  type="email"
                  pattern=".+@example\.com"
                  value={emailAddress}
                  placeholder="your@email.com"
                  onChange={(event) =>
                    setEmailAddress(event.currentTarget.value)
                  }
                />
              </div>
            </div>
            <div>
              <h3>Address Information</h3>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                data-test-id="checkout-address"
                value={address}
                placeholder="Address"
                onChange={(event) => setAddress(event.currentTarget.value)}
              />
              <div>
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  data-test-id="checkout-city"
                  value={city}
                  placeholder="City"
                  onChange={(event) => setCity(event.currentTarget.value)}
                />
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  id="postalCode"
                  data-test-id="checkout-postal-code"
                  value={postalCode}
                  placeholder="Postal Code"
                  onChange={(event) => setPostalCode(event.currentTarget.value)}
                />
              </div>
              <label htmlFor="country">Country</label>
              <input
                id="country"
                data-test-id="checkout-country"
                value={country}
                placeholder="Country"
                onChange={(event) => setCountry(event.currentTarget.value)}
              />
            </div>
            <div>
              <h3>Credit card Information</h3>
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <input
                id="creditCardNumber"
                data-test-id="checkout-credit-card"
                value={creditCardNumber}
                placeholder="Credit Card Number"
                onChange={(event) =>
                  setcreditCardNumber(event.currentTarget.value)
                }
              />
              <div>
                <label htmlFor="expirationDate">Expiration Date</label>
                <input
                  id="expirationDate"
                  data-test-id="checkout-expiration-date"
                  value={expirationDate}
                  placeholder=" MM / YYYY"
                  onChange={(event) =>
                    setExpirationDate(event.currentTarget.value)
                  }
                />
                <label htmlFor="securityCode">Security Code</label>
                <input
                  id="securityCode"
                  data-test-id="checkout-security-code"
                  value={securityCode}
                  placeholder="CVC"
                  onChange={(event) =>
                    setSecurityCode(event.currentTarget.value)
                  }
                />
              </div>
            </div>
          </div>
          <button
            data-test-id="checkout-confirm-order"
            disabled={
              firstName.length === 0 ||
              lastName.length === 0 ||
              emailAddress.length === 0 ||
              address.length === 0 ||
              city.length === 0 ||
              postalCode.length === 0 ||
              country.length === 0 ||
              creditCardNumber.length === 0 ||
              expirationDate.length === 0 ||
              securityCode.length === 0
            }
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
